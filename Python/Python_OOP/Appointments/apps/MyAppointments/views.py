from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    index = {
        'title' : 'Login/Registrotion',
        'welcome' : 'Welcome!'
    }
    return render(request, 'MyAppointments/index.html', index)

def appointments(request):
    print request.POST
    return redirect('MyAppointments:appointments')

def register(request):
    print request.POST
    register = {
        'title' : 'Registrotion',
        'welcome' : 'Welcome to register!'
    }
    return render(request, 'MyAppointments/index.html', register)

def login(request):
    print request.POST
    login = {
        'title' : 'Login',
        'welcome' : 'Welcome to login!'
    }
    return render(request, 'MyAppointments/index.html', login)
