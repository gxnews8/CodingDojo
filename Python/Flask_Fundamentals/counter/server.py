from flask import Flask, render_template, request, redirect, session, Markup
app = Flask(__name__)
app.secret_key = 'ThisIsKingSecret' # you need to set a secret key for security purposes

def buildHtml(id):

    if id == '1':
        session['ninjias'] = Markup('<button type="button" name="ninjias">ninjias</button>')
    elif id == '2':
        session['hackers'] = Markup('<button type="button" name="hackers">hackers</button>')
    elif id == '3':
        session['counter'] = Markup('<h1>Counter</h1>' + session['count'] + ' times')
        session['count'] = 0

    print session

@app.route('/')
def index():
    session['count'] = session['count'] + 1
    if session['count'] in session:
        buildHtml('3')

    print session['count']
    return render_template("index.html")

app.run(debug=True)
