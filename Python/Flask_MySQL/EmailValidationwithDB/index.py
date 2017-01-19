from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'King'
mysql = MySQLConnector(app,'emailsdb')

@app.route('/')
def index():
    query = "SELECT * FROM emails"                           # define your query
    emails = mysql.query_db(query)                           # run query with query_db()
    return render_template('index.html', all_emails=emails) # pass data to our template

@app.route('/emails/<email_id>')
def success(email_id):
    # Write query to select specific user by id. At every point where
    # we want to insert data, we write ":" and variable name.
    query = "SELECT * FROM emails WHERE id = :specific_id"
    # Then define a dictionary with key that matches :variable_name in query.
    data = {'specific_id': email_id}
    # Run query with inserted data.
    emails = mysql.query_db(query, data)
    # emails should be a list with a single object,
    # so we pass the value at [0] to our template under alias one_email.
    return render_template('success.html', one_email=emails)

@app.route('/emails', methods=['POST'])
def create():
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    email = request.form['email']
    sameEmail = mysql.query_db("SELECT email FROM emails WHERE email = '"+email+"'")
    if len(request.form['first_name']) < 1:
        flash('Please type your first_name')
    elif len(request.form['last_name']) < 1:
        flash('Please type your last_name')
    elif len(request.form['email']) < 1:
        flash('Please type your email')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('This email invalidation')
    elif sameEmail:
        flash('This email already exist. Please choose another one ')
    else:
        query = "INSERT INTO emails (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
        # We'll then create a dictionary of data from the POST data received.
        data = {
                 'first_name': request.form['first_name'],
                 'last_name':  request.form['last_name'],
                 'email': request.form['email']
               }
        # Run query, with dictionary values injected into the query.

        mysql.query_db(query, data)
    return redirect('/')

@app.route('/update_email/<email_id>', methods=['POST'])
def update(email_id):
    query = "UPDATE emails SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email'],
             'id': email_id
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/remove_email/<email_id>', methods=['POST'])
def delete(email_id):
    query = "DELETE FROM emails WHERE id = :id"
    data = {'id': email_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
