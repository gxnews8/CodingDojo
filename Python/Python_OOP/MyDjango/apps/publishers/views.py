from django.shortcuts import render, redirect
# from .models import Publisher
# Create your views here.
def create(request):
    print request.POST
    Publisher.objects.add_publisher(request.POST)
    return redirect('books:index')

def book_to_publisher(request):
    print request.POST
    return redirect('books:index')
