from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def process():
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!") # just pass a string to the flash function
    elif len(request.form['location']) < 1:
        flash("location cannot be empty!")
    elif len(request.form['language']) < 1:
        flash("language cannot be empty!")
    elif len(request.form['comment']) > 120:
        flash("comment is no more than 120 characters!")
    else:
        flash("{} {}, {}, {}".format(request.form['name'], request.form['location'], request.form['language'], request.form['comment'])) # just pass a string to the flash function
    return redirect('/') # either way the application should return to the index and display the messagerequest.form['name'], request.form['name'],

app.run(debug=True)
