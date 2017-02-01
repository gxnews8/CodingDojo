from django.shortcuts import render, redirect
from .models import Courses
# Create your views here.
def index(request):
    index = {
        'title': 'Add a student to all bootcamp courses',
        'courses': Courses.objects.all(),
    }
    return render(request, 'mycourse/index.html', index)

def add(request):
    print request.POST
    Courses.objects.create(name = request.POST['name'], des = request.POST['des'])
    return redirect('mycourse:index')

def destroy(request, id):
    destroy = {
        'title': 'Delete a course',
        'course': Courses.objects.get(id = id)
    }
    return render(request, 'mycourse/destroy.html', destroy)

def remove(request, id):
    Courses.objects.get(id = request.POST['id']).delete()
    return redirect('mycourse:index')
