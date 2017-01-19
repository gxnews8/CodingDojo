from flask import Flask, request, redirect, render_template, session, Markup
import random, datetime

app = Flask(__name__)
app.secret_key = 'King'

def makeTextarea(place):
    now = datetime.datetime.now().strftime("%Y-%m-%d %I:%M %p")
    if place == 'farm':
        session['activities'] += Markup('Earned '+str(session['farm'])+' golds from the '+place+'! ('+now+')\n')
        session['golds'] += session['farm']
        session['activitiesColor'] = 'black'
    elif place == 'cave':
        session['activities'] += Markup('Earned '+str(session['cave'])+' golds from the '+place+'! ('+now+')\n')
        session['golds'] += session['cave']
        session['activitiesColor'] = 'black'
    elif place == 'house':
        session['activities'] += Markup('Earned '+str(session['house'])+' golds from the '+place+'! ('+now+')\n')
        session['golds'] += session['house']
        session['activitiesColor'] = 'black'
    elif place == 'casino':
        if session['casino'] > 0:
            session['activities'] += Markup('Earned '+str(session['casino'])+' golds from the '+place+'! ('+now+')\n')
            session['activitiesColor'] = 'black'
        elif session['casino'] < 0:
            session['activities'] += Markup('Entered a '+place+' and lost '+str(abs(session['casino']))+' golds... Ouch.. ('+now+')\n')
            session['activitiesColor'] = 'red'
        elif session['casino'] == 0:
            session['activities'] += Markup('Just '+str(session['casino'])+'! Please leave '+place+' and Willing to bet against ('+now+')\n')
            session['activitiesColor'] = 'blue'
        session['golds'] += session['casino']
    print session

@app.route('/')
def index():
    session['farm'] = random.randrange(10, 20)
    session['cave'] = random.randrange(5, 10)
    session['house'] = random.randrange(2, 5)
    session['casino'] = random.randrange(-50, 50)
    print session
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process_money():
    session['money'] = request.form['building']
    if session['money'] == 'farm':
        makeTextarea('farm')
    elif session['money'] == 'cave':
        makeTextarea('cave')
    elif session['money'] == 'house':
        makeTextarea('house')
    elif session['money'] == 'casino':
        makeTextarea('casino')
    if session['golds'] < 0:
        session['color'] = 'red'
    else:
        session['color'] = 'black'

    return redirect("/")

@app.route('/reset', methods=["POST"])
def clearAll():
    session['golds'] = 0
    session['activities'] = Markup('')
    return redirect('/')

app.run(debug=True)
