from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'my_secret_key'

@app.route('/')
def index():
    return render_template('index.html', name='Welcome to Ninjias')

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/new')
def dojos():
    return render_template('dojos.html')

if __name__ == '__main__':
    app.run(debug=True)
