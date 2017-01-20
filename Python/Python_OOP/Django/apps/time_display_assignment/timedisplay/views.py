from django.shortcuts import render, redirect
import datetime

# Create your views here.
def index(request):
  # print "*"*50
  print datetime.datetime.now()
  rightNow = {
  'datetime': datetime.datetime.now()
  }
  return render(request, 'index.html', rightNow)

def showSession(request):
    if request.method == "POST":
        request.session # It's a dictionary, so you can attach key/value pairs
        request.session['name'] = request.POST['first_name']
        # print request.session['name']
        # print "*"*50
        # print request.POST
        # print request.method
        # print "*"*50
        return render(request, 'showSession.html')
    else:
        return render(request, 'index.html')
