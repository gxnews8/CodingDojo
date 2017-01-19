from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# populate data from form request in here
info = {}

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/survey', methods=['POST'])
def survey():
  info['name'] = request.form['name']
  info['location'] = request.form['location']
  info['favlang'] = request.form['favlang']
  info['comment'] = request.form['comment']
  return redirect('/result')

@app.route('/result')
def result():
  return render_template('result.html', data=info)

app.run(debug=True)
