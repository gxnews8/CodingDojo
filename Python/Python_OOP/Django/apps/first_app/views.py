from django.shortcuts import render
import datetime

# Create your views here.
def index(request):
  print "*"*50
  title = 'Welcome to P5'
  rightNow = {
  'datetime': datetime.datetime.now()
  }
  return render(request, 'index.html', rightNow)
