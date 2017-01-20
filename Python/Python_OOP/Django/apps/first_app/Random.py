from django.shortcuts import render
import random

# Create your views here.
def random(request):
  print "*"*50
  return render(request, 'random.html')
