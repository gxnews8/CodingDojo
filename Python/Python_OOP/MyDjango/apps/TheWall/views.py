from django.shortcuts import render, redirect
from .models import User, Message, Comment
from django.contrib import messages
# Create your views here.

def index(request):
    # print '*'*50
    index = {
        'title' : 'Welcome to The Wall',
        'users' : User.objects.all().order_by('id').reverse(),
        'messages' : Message.objects.all().order_by('id').reverse(),
        'comments' : Comment.objects.all().order_by('id').reverse(),
    }
    return render(request, 'TheWall/index.html', index)

def signUp(request):
    if request.method == 'POST':
        print request.POST

        # if failed validations
        if not response_form_models['status']:
            for error in response_form_models['errors']:
                messages.error(request, error)
            return redirect('TheWall:signUp')
        # if true on validations
        else:
            response_form_models = User.objects.signUp(request.POST)
            request.session['user_id'] = response_form_models['user'].id
            return redirect('TheWall:index')

    else:
        signUp = {
            'title' : 'Welcome to sign Up',
        }
        return render(request, 'TheWall/signUp.html', signUp)

def signIn(request):
    if request.method == 'POST':
        print request.POST
        response_form_models = User.objects.signIn(request.POST)
        # if failed validations
        if not response_form_models['status']:
            for error in response_form_models['errors']:
                messages.error(request, error)
            return redirect('TheWall:signIn')
        # if true on validations
        else:
            request.session['user_id'] = response_form_models['user_id']
            return redirect('TheWall:index')

    else:
        signIn = {
            'title' : 'Welcome to sign In',
        }
        return render(request, 'TheWall/signIn.html', signIn)

def add_message(request):
    if request.method == 'POST':
        print request.POST
        if not 'user_id' in request.session:
            messages.error(request, 'Must be signIn!')
            return redirect('TheWall:signIn')
        else:
            Message.objects.add_message(request.POST)
            return redirect('TheWall:index')

def add_comment(request):
    if request.method == 'POST':
        print request.POST
        if not 'user_id' in request.session:
            messages.error(request, 'Must be signIn!')
            return redirect('TheWall:signIn')
        else:
            Comment.objects.add_comment(request.POST)
            return redirect('TheWall:index')

def logOut(request):
    request.session.clear()
    return redirect('TheWall:index')
