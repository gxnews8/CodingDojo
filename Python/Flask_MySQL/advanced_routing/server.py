from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/users/<username>')
def show_user_profile(username):
    return render_template("user.html", username=username)

@app.route('/route/with/<vararg>')
def handler_function(vararg):
  # here you can use the variable "vararg"
  # if you want to see what our argument looks like
  print vararg
  # we could do other things with this information from this point on such as:
  # use it to retrieve some records from the database
  # render a particular template
  
app.run(debug=True)
