from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
# imports the Bcrypt module
from flask.ext.bcrypt import Bcrypt
import md5 # do this at the top of your file where you import modules
import os, binascii # include this at the top of your file
app = Flask(__name__)
app.secret_key = 'King'
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'md5')
salt = binascii.b2a_hex(os.urandom(15))

@app.route('/')
def index():
    query = "SELECT * FROM users ORDER BY id DESC"
    users = mysql.query_db(query)
    return render_template('index.html', all_users=users)

@app.route('/users/create', methods=['POST'])
def create_user():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
     # run validations and if they are successful we can create the password hash with bcrypt
    pw_hash = bcrypt.generate_password_hash(password)
     # now we insert the new user into the database
    insert_query = "INSERT INTO users (username, email, password, salt, created_at, updated_at) VALUES (:username, :email, :password, :salt, NOW(), NOW())"
    query_data = { 'username': username, 'email': email, 'password': password, 'salt': pw_hash }
    # salt =  binascii.b2a_hex(os.urandom(15))
    # encrypted_pw = md5.new(password + salt).hexdigest()
    # insert_query = "INSERT INTO users (username, email, password, salt, created_at, updated_at) VALUES (:username, :email, :encrypted_pw, :salt, NOW(), NOW())"
    # query_data = { 'username': username, 'email': email, 'encrypted_pw': encrypted_pw, 'salt': salt}
    if len(request.form['username']) < 1:
        flash('Please type your username')
    elif len(request.form['email']) < 1:
        flash('Please type your Email')
    elif len(request.form['password']) < 1:
        flash('Please type PassWord')
    else:
        mysql.query_db(insert_query, query_data)
    return redirect('/')

@app.route('/welcome')
def welcome():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = { 'email': email }
    user = mysql.query_db(user_query, query_data) # user will be returned in a list
    # flash(user[0]['salt'])
    # pw_hash = bcrypt.generate_password_hash(password)
    # flash(pw_hash)
    if bcrypt.check_password_hash(user[0]['salt'], password):
        # login user
        flash('Welcome '+user[0]['username'])
        return redirect('/')
    else:
        # set flash error message and redirect to login page
        flash('PassWord is wrong')
        return render_template('login.html')

app.run(debug=True)
