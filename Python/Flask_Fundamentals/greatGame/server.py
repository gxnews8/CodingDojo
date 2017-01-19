from flask import Flask, request, redirect, render_template, session, Markup
import random, re
app = Flask(__name__)
app.secret_key = 'Tell_NoOne'

def buildBox(uD):
    if not uD.isdigit():
        session['boxColor'] = 'red'
        session['boxState'] = Markup('<div id="theBox" class=' + session["boxColor"] + '><h2>Too ' + uD + '!</h2></div>')
    #Reset Case
    elif uD == '1':
        session['boxState'] = Markup('')
        session['guessForm'] = Markup("<form action='/hrm' method='post'><input type='hidden' value={{  session['ans']  }}><input type='text' name='guess' placeholder='Please type in a number!' autofocus='True'><p><input type='submit'></p></form>")
        session['ans'] = random.randrange(0,100)
    #If guess is not a number
    elif uD == '2':
        session['boxColor'] = 'yellow'
        session['boxState'] = Markup('<div id="theBox" class=' + session["boxColor"] + '><h2>Only number!</h2></div>')
    #Correct answer
    else:
        session['boxColor'] = 'green'
        session['boxState'] = Markup('<div id="theBox" class=' + session["boxColor"] + '><h2>' + str(session['ans']) + '<p> was the number!</h2></div><div><form action="/reset" method="post"><input type="submit" value="Reset"></form></div>')
        session['guessForm'] = Markup('\n')
    print session

@app.route('/')
def index():
    if not 'ans' in session:
        buildBox('1')
    print session['ans']
    return render_template("index.html")

@app.route('/hrm', methods=['POST'])
def guess():
    match = re.search('\D', request.form['guess'])
    if match or not request.form['guess']:
        buildBox('2')
        return redirect('/')
    # elif not request.form['guess']:
    #     buildBox('2')
    #     return redirect('/')
    else:
        print (str(session['ans']) + ' is the answer')
        session['theGuess'] = int(request.form['guess'])
        print (str(session['theGuess']) + ' is the guess')
        #build theBox - buildBox()
        if session['theGuess'] > session['ans']:
            print ('go down')
            #change theBox text to 'Too High!'
            buildBox('high')
        elif session['theGuess'] < session['ans']:
            print ('go up')
            #change theBox text to 'Too Low!'
            buildBox('low')
        else:
            print ('nailed it!')
            #display the number, green theBox, text to 'num was the number!', add play again button
            buildBox('0')
    return redirect('/')

@app.route('/reset', methods=["POST"])
def clearAll():
    buildBox('1')
    return redirect('/')

app.run(debug=True)
