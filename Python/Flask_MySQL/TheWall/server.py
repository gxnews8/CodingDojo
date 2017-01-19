from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
# imports the Bcrypt module
from flask.ext.bcrypt import Bcrypt
import md5 # do this at the top of your file where you import modules
import os, binascii # include this at the top of your file
import datetime
app = Flask(__name__)
app.secret_key = 'King'
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'wall')
salt = binascii.b2a_hex(os.urandom(15))

@app.route('/')
def index():
    query = "SELECT * FROM users JOIN messages ON users.id = messages.user_id ORDER BY messages.updated_at DESC LIMIT 10"
    messages = mysql.query_db(query)
    comment_query = "SELECT * FROM users JOIN comments ON users.id = comments.user_id WHERE comments.message_id = comments.message_id ORDER BY comments.updated_at DESC LIMIT 10"
    comments = mysql.query_db(comment_query)
    now = datetime.datetime.now()
    return render_template('index.html', messages=messages, comments=comments, now=now)

@app.route('/signUp', methods=['GET', 'POST'])
def signUp():

    if request.method == 'POST':
        if len(request.form['first_name']) < 1:
            flash('Please type your firstName')
            return render_template('signUp.html')
        elif len(request.form['last_name']) < 1:
            flash('Please type your lastName')
            return render_template('signUp.html')
        elif len(request.form['email']) < 1:
            flash('Please type your Email')
            return render_template('signUp.html')
        elif len(request.form['password']) < 1:
            flash('Please type Password')
            return render_template('signUp.html')
        elif request.form['re-password'] != request.form['password']:
            flash('Two different passwords')
            return render_template('signUp.html')
        else:
            first_name = request.form['first_name']
            last_name = request.form['last_name']
            email = request.form['email']
            password = request.form['password']
            salt =  binascii.b2a_hex(os.urandom(15))
            encrypted_pw = md5.new(password + salt).hexdigest()
            pw_hash = bcrypt.generate_password_hash(encrypted_pw)
            level = 0
            insert_query = "INSERT INTO users (first_name, last_name, email, password, salt, pw_hash, level, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, :salt, :pw_hash, :level, NOW(), NOW())"
            query_data = {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': pw_hash,
                'salt': salt,
                'pw_hash': pw_hash,
                'level': level }
            mysql.query_db(insert_query, query_data)
            session['level'] = 0
            session['first_name'] = first_name
            return redirect('/')
    else:
        return render_template('signUp.html')

@app.route('/signIn', methods=['GET', 'POST'])
def signIn():
    if request.method == 'POST':
        if len(request.form['email']) < 1:
            flash('Please type your Email')
            return render_template('signIn.html')
        elif len(request.form['password']) < 1:
            flash('Please type Password')
            return render_template('signIn.html')
        else:
            email = request.form['email']
            password = request.form['password']
            user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
            query_data = { 'email': email }
            user = mysql.query_db(user_query, query_data)
            encrypted_pw = md5.new(password + user[0]['salt']).hexdigest()
            print
            print bcrypt.check_password_hash(user[0]['password'], encrypted_pw)
            if bcrypt.check_password_hash(user[0]['password'], encrypted_pw):
                session['user_id'] = user[0]['id']
                session['level'] = user[0]['level']
                session['first_name'] = user[0]['first_name']
                return redirect('/')
            else:
                flash('Password invalid')
                return render_template('signIn.html')
    else:
        return render_template('signIn.html')

@app.route('/logOut')
def logOut():
    session.clear()
    return redirect('/')

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        user_id = request.form['user_id']
        message = request.form['message']
        insert_query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
        query_data = { 'user_id': user_id, 'message': message }
        if len(request.form['message']) < 1:
            flash('Please type message')
        elif not 'first_name' in session:
            flash('Please signIn.')
            return render_template('signIn.html')
        else:
            mysql.query_db(insert_query, query_data)
        return redirect('/')
    else:
        return render_template('index.html')

@app.route('/comment', methods=['GET', 'POST'])
def comment():
    if request.method == 'POST':
        user_id = request.form['user_id']
        message_id = request.form['message_id']
        comment = request.form['comment']
        insert_query = "INSERT INTO comments (user_id, message_id, comment, created_at, updated_at) VALUES (:user_id, :message_id, :comment, NOW(), NOW())"
        query_data = { 'user_id': user_id, 'message_id': message_id, 'comment': comment }
        if len(request.form['comment']) < 1:
            flash('Please type comment')
        elif not 'first_name' in session:
            flash('Please signIn.')
            return render_template('signIn.html')
        else:
            mysql.query_db(insert_query, query_data)
        return redirect('/')
    else:
        return render_template('index.html')

@app.route('/edit_message/<message_id>', methods=['GET', 'POST'])
def edit_message(message_id):
    if request.method == 'POST':
        # message_id = request.form['message_id']
        message = request.form['message']
        editby = request.form['editby']
        now = datetime.datetime.now()
        query = "UPDATE messages SET message = :message, editby = :editby, updated_at = NOW() WHERE id = :message_id"
        data = {
            'message_id': message_id,
            'message': message,
            'editby': editby,
            'updated_at': now
            }
        mysql.query_db(query, data)
        return redirect('/')
    else:
        query = "SELECT * FROM users JOIN messages ON users.id = messages.user_id WHERE messages.id = :message_id"
        data = {'message_id': message_id}
        messages = mysql.query_db(query, data)
        return render_template('update_message.html', messages=messages)

@app.route('/edit_comment/<comment_id>', methods=['GET', 'POST'])
def edit_comment(comment_id):
    if request.method == 'POST':
        comment = request.form['comment']
        editby = request.form['editby']
        now = datetime.datetime.now()
        query = "UPDATE comments SET comment = :comment, editby = :editby, updated_at = NOW() WHERE id = :comment_id"
        data = {
            'comment_id': comment_id,
            'comment': comment,
            'editby': editby,
            'updated_at': now
            }
        mysql.query_db(query, data)
        return redirect('/')
    else:
        query = "SELECT * FROM users JOIN comments ON users.id = comments.user_id WHERE comments.id = :comment_id"
        data = {'comment_id': comment_id}
        comments = mysql.query_db(query, data)
        return render_template('update_comment.html', comments=comments)

@app.route('/remove/<id>', methods=['POST'])
def remove(id):
    query = "DELETE FROM messages WHERE id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/delete/<id>', methods=['POST'])
def delete(id):
    query = "DELETE FROM comments WHERE id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/admin/<id>', methods=['GET', 'POST'])
def admin(id):
    if request.method == 'POST':
        password = request.form['password']
        salt =  binascii.b2a_hex(os.urandom(15))
        encrypted_pw = md5.new(password + salt).hexdigest()
        pw_hash = bcrypt.generate_password_hash(encrypted_pw)
        if password < 1:
            password = request.form['hiddenPassword']
        else:
            password = pw_hash
            print password
            level = request.form['level']
            query = "UPDATE users SET password = :password, salt = :salt, pw_hash = :pw_hash, level = :level WHERE id = :id"
            data = {'id': id, 'password': password, 'salt': salt, 'pw_hash': pw_hash, 'level': level}
            mysql.query_db(query, data)

            message = request.form['message']
            query_message = "UPDATE messages SET message = :message WHERE user_id = :id"
            data_message = {'id': id, 'message': message}
            mysql.query_db(query_message, data_message)

            comment = request.form['comment']
            query_comment = "UPDATE comments SET comment = :comment WHERE user_id = :id"
            data_comment = {'id': id, 'comment': comment}
            mysql.query_db(query_comment, data_comment)
            return redirect('/')
    else:
        query_all = "SELECT * FROM users ORDER BY id DESC"
        users_all = mysql.query_db(query_all)

        query = "SELECT * FROM users WHERE id = :id"
        data = {'id': id}
        users = mysql.query_db(query, data)

        query_message = "SELECT * FROM messages WHERE user_id = :id"
        data_message = {'id': id}
        messages = mysql.query_db(query_message, data_message)

        query_comment = "SELECT * FROM comments WHERE user_id = :id"
        data_comment = {'id': id}
        comments = mysql.query_db(query_comment, data_comment)
        return render_template('admin.html', users_all=users_all, users=users, messages=messages, comments=comments)

@app.route('/switch/<user_id>/<level>/<first_name>')
def switch(user_id, level, first_name):
    session['user_id'] = user_id
    session['level'] = level
    session['first_name'] = first_name
    return redirect('/')

app.run(debug=True)
