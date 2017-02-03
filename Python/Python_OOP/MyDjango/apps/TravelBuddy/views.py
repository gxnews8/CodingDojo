from django.shortcuts import render, redirect
from .models import User, Travel
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'TravelBuddy/index.html')

def register(request):
    if request.method == 'POST':
        print request.POST
        response_from_models = User.objects.add_user(request.POST)
        # if failed validations
        if not response_from_models['status']:
            for error in response_from_models['errors']:
                messages.error(request, error)
            return redirect('TravelBuddy:index')
        # if true on validations
        else:
            request.session['user_id'] = response_from_models['user'].id
            return redirect('TravelBuddy:travels')
    else:
        return redirect('TravelBuddy:index')

def login(request):
    response_from_models = User.objects.check_user(request.POST)
    if not response_from_models['status']:
        for error in response_from_models['errors']:
            messages.error(request, error)
        return redirect('TravelBuddy:index')
    else:
        request.session['user_id'] = response_from_models['user_id']
        return redirect('TravelBuddy:travels')

def travels(request):
    if not 'user_id' in request.session:
        messages.error(request, 'Must be logged in!')
        return redirect('TravelBuddy:index')
    else:
        travels = {
            'user': User.objects.get(id = request.session['user_id']),
            'mytravels': Travel.objects.filter(user_id = request.session['user_id']).order_by('-id'),
            'alltravels': Travel.objects.exclude(user_id = request.session['user_id']).order_by('-id'),
        }
        return render(request, 'TravelBuddy/travels.html', travels)

def add(request):
    if request.method == 'POST':
        print request.POST
        response_from_models = Travel.objects.add_plan(request.POST)
        # if failed validations
        if not response_from_models['status']:
            for error in response_from_models['errors']:
                messages.error(request, error)
            return render(request, 'TravelBuddy/add.html')
        # if true on validations
        else:
            return redirect('TravelBuddy:travels')
    else:
        return render(request, 'TravelBuddy/add.html')

def destination(request, id):
    if not 'user_id' in request.session:
        messages.error(request, 'Must be logged in!')
        return redirect('TravelBuddy:index')
    else:
        trip = Travel.objects.get(id = id)
        user = User.objects.get(id = request.session['user_id'])
        trip.joined_users.add(user)
        joined_users = trip.joined_users.all().order_by('-id')
        destination = {
            'destinations': Travel.objects.filter(id = id).order_by('-id'),
            'joined_users': joined_users,
        }
        return render(request, 'TravelBuddy/destination.html', destination)

def join(request, id):
    trip = Travel.objects.get(id = id)
    user = User.objects.get(id = request.session['user_id'])
    trip.joined_users.add(user)
    joined_users = trip.joined_users.all().order_by('-id')
    Travel.objects.add_plan(request.POST)
    return redirect('TravelBuddy:travels')

def remove(request, id):
    Travel.objects.filter(id = id).delete()
    return redirect('TravelBuddy:travels')

def logout(request):
    request.session.clear()
    return redirect('TravelBuddy:index')
