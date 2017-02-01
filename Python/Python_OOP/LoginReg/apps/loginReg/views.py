from django.shortcuts import render, redirect
from .models import LoginReg
from django.contrib import messages
# Create your views here.
def index(request):
    index = {
        'title': 'Login & Reg | Home'
    }
    return render(request, 'loginReg/index.html', index)

def register(request):
    if request.method == 'POST':
        print request.POST
        response_from_models = LoginReg.objects.register(request.POST)
        # if failed validations
        if not response_from_models['status']:
            for error in response_from_models['errors']:
                messages.error(request, error)
            return redirect('loginReg:index')
        # if true on validations
        else:
            request.session['user_id'] = response_from_models['user'].id
            return redirect('loginReg:success')
    else:
        return redirect('loginReg:index')

def login(request):
    response_from_models = LoginReg.objects.check(request.POST)
    if not response_from_models['status']:
        for error in response_from_models['errors']:
            messages.error(request, error)
        return redirect('loginReg:index')
    else:
        request.session['user_id'] = response_from_models['user_id']
        return redirect('loginReg:success')

def success(request):
    if not 'user_id' in request.session:
        messages.error(request, 'Must be logged in!')
        return redirect('loginReg:index')
    return render(request, 'loginReg/success.html')

def logout(request):
    request.session.clear()
    return redirect('loginReg:index')
