from flask import Flask, render_template, request, redirect#, session
app = Flask(__name__)
# app.secret_key = 'MySecret_key'
# our index route will handle rendering our form

@app.route('/')
def index():
    return render_template('index.html')

info = {}
@app.route('/survey', methods=['POST'])
def survey():
    if 'Button' in request.form.values():
        info['name'] = request.form['name']
        info['location'] = request.form['location']
        info['language'] = request.form['language']
        info['comment'] = request.form['comment']
    return redirect('/result')

@app.route('/result')
def result():
    print info
    return render_template('result.html', data=info)

if __name__ == '__main__':
    app.run(debug=True) # run our server
