from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    # print '*'*50
    index = {
     'noninjia' : 'No ninjia here.'
    }
    return render(request, 'ninjia/index.html', index)

def ninjias(request):
    # print '*'*50
    ninjias = {
        'ninjia' : 'images/tmnt.png'
    }
    return render(request, 'ninjia/ninjia.html', ninjias)

def oneninjias(request, color):
    # print '*'*50
    request.session['color'] = (color)
    print request.session['color']
    if request.session['color'] == 'blue':
        ninjia = 'images/leonardo.jpg'
    elif request.session['color'] == 'orange':
        ninjia = 'images/michelangelo.jpg'
    elif request.session['color'] == 'red':
        ninjia = 'images/raphael.jpg'
    elif request.session['color'] == 'purple':
        ninjia = 'images/donatello.jpg'
    else:
        ninjia = 'images/notapril.jpg'
    ninjias = {
        'ninjia' : ninjia
    }
    return render(request, 'ninjia/ninjia.html', ninjias)
