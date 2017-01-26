from django.shortcuts import render
import random, string
import os, binascii
# Create your views here.
salt = binascii.b2a_hex(os.urandom(14))

def index(request):
    print '*'*50
    request.session # It's a dictionary, so you can attach key/value pairs
    if not 'attempt' in request.session:
        attempt = 0
    else:
        attempt = request.session['attempt']
        print attempt
    if request.method == 'POST':
        def generator(size, chars):
            return ''.join(random.choice(chars) for _ in range(size))
        random2 = {
            'attempt' : int(request.POST['attempt']) + 1,
            'randomword' : generator(14,salt).upper(),
        }
        return render (request, 'first_app/index.html', random2)
    else:
        showattempt = {
            'attempt' : attempt,
        }
        return render (request, 'first_app/index.html', showattempt)
