from django.shortcuts import render, redirect
import random, datetime

# Create your views here.
datetime = datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
def index(request):
    # print '*'*50
    request.session['golds'] = 0
    request.session['activities'] = ''
    request.session['place'] = ''
    request.session['color'] = 'black'
    index = {
        'title' : 'ninjia Gold',
        'golds' : 0,
        'activities' : 'log...',
    }
    return render(request, 'ninjiaGold/index.html', index)

def process_money(request, place):
    # print '*'*50
    print request.method
    # print 'The place is '+request.POST['place']
    # print 'Earned '+str(request.session['moneys'])
    # print 'Total golds are '+str(request.POST['golds'])

    if not 'golds' in request.session:
        request.session['golds'] = 0
    else:
        request.session['golds'] = request.POST['golds']
        if request.session['golds'] < 0:
            request.session['color'] = 'red'
        else:
            request.session['color'] = 'green'

    if not 'activities' in request.session:
        request.session['activities'] = ''

    request.session['color'] = 'green'
    request.session['place'] = request.POST['place']
    if request.session['place'] == 'farm':
        request.session['moneys'] = random.randrange(10, 20)
        request.session['activities'] += 'Earned '+str(request.session['moneys'])+' golds from the '+request.session['place']+'! ('+datetime+')\n'
    if request.session['place'] == 'cave':
        request.session['moneys'] = random.randrange(5, 10)
        request.session['activities'] += 'Earned '+str(request.session['moneys'])+' golds from the '+request.session['place']+'! ('+datetime+')\n'
    if request.session['place'] == 'house':
        request.session['moneys'] = random.randrange(2, 5)
        request.session['activities'] += 'Earned '+str(request.session['moneys'])+' golds from the '+request.session['place']+'! ('+datetime+')\n'
    if request.session['place'] == 'casino':
        request.session['moneys'] = random.randrange(-50, 50)
        if request.session['moneys'] < 0:
            request.session['color'] = 'red'
            request.session['activities'] += 'Entered a '+request.session['place']+' and lost '+str(abs(request.session['moneys']))+' golds... Ouch.. ('+datetime+')\n'
        else:
            request.session['color'] = 'green'
            request.session['activities'] += 'Earned '+str(request.session['moneys'])+' golds from the '+request.session['place']+'! ('+datetime+')\n'

    places = {
        'moneys' : request.session['moneys'],
        'golds' : int(request.session['golds']) + request.session['moneys'],
        'color' : request.session['color'],
        'activities' : request.session['activities']
    }
    return render(request, 'ninjiaGold/index.html', places)

def reset(request):
    request.session.clear()
    return redirect ('/ninjiaGold/')

def textareacolor(text, color):
    textcolor = {
        'text' : text,
        'color' : color,
    }
    # oFont = Document.createElement('font')
    # oText = Document.createTextNode(text)
    # oFont.style.color = color
    # topic.appendChild(oFont)
    # oFont.appendChild(oText)
