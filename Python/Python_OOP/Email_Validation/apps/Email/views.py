from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Email
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your views here.
def index(request):
    index = {
        'title': 'Email Validation',
    }
    return render(request, 'Email/index.html', index)

def add(request):
    print request.POST
    print messages
    email = request.POST['email']
    errors = []
    if not len(email):
        errors.append('Email must be there')
    elif not EMAIL_REGEX.match(email):
        errors.append('Must have a valid email')
    modelResponse = {}
    if len(errors) > 0:
        for error in errors:
            messages.error(request, error)
        return redirect('Email:index')
        modelResponse['status'] = False
        modelResponse['errors'] = errors
    else:
        Email.objects.create(email = email)
        modelResponse['status'] = True
    # return modelResponse
        return redirect('Email:success')

def success(request):
    success = {
        'title': 'Success Page',
        'emails': Email.objects.all().order_by('-id'),
    }
    return render(request, 'Email/success.html', success)

def remove(request, id):
    Email.objects.get(id = id).delete()
    return redirect('Email:success')
