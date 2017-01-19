from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'secretisKing'

@app.route('/')
def index():
    session['ninjia'] = ''
    return render_template('index.html')

@app.route('/ninjia')
def all():
    session['ninjia'] = 'images/tmnt.png'
    return render_template("user.html")

@app.route('/ninjia/<color>', methods=['GET'])
def show(color):
    if color == 'blue':
        session['ninjia'] = 'images/leonardo.jpg'
    elif color == 'orange':
        session['ninjia'] = 'images/michelangelo.jpg'
    elif color == 'red':
        session['ninjia'] = 'images/raphael.jpg'
    elif color == 'purple':
        session['ninjia'] = 'images/donatello.jpg'
    else:
        session['ninjia'] = 'images/notapril.jpg'

    return render_template("user.html")

app.run(debug=True)
