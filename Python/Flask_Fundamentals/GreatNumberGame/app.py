from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
# routing rules and rest of server.py below
@app.route('/')
def index():
    session['guessNumber'] = random.randrange(1,5)
    return render_template("index.html")
# print session['guessNumber']

@app.route('/guess', methods=['POST'])
def guess():
    number = request.form['number']

    if number < session['guessNumber']:
        result = '<'
    elif number > session['guessNumber']:
        result = '>'
    elif number == session['guessNumber']:
        result = '='

    # return redirect('/')
    return render_template("guess.html", number=number, result=result)

app.run(debug=True)
