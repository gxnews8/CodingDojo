from __future__ import unicode_literals
import re
import bcrypt
from django.db import models
# Create your models here.
class TravelManager(models.Manager):
    def add_user(self, postData):
        errors = []
        if not len(postData['name']) > 2:
            errors.append('Name must be be at least 2 characters!')
        if not len(postData['username']):
            errors.append('User name must be there!')
        if len(postData['password']) < 8:
            errors.append('Password must be at least 8 characters long!')
        if not postData['password'] == postData['confirm_password']:
            errors.append('Passwords must match!')

        user = self.filter(username = postData['username'])

        if user:
            errors.append('User name already exists!')

        modelResponse = {}
        # if failed validations
        if errors:
            modelResponse['status'] = False
            modelResponse['errors'] = errors
        # passed validations, save user
        else:
            hashed_password = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
            user = self.create(name = postData['name'], username = postData['username'], password = hashed_password)

            modelResponse['status'] = True
            modelResponse['user'] = user

        # send modelResponse to views.py
        return modelResponse

    def check_user(self, postData):
        errors = []
        user = self.filter(username = postData['username'])
        # check to see is in db
        modelResponse = {}
        if user[0]:
            # check for passwords
            if not bcrypt.checkpw(postData['password'].encode(), user[0].password.encode()):
                errors.append('No this User name/password combination!')
            # success login
            else:
                modelResponse['status'] = True
                modelResponse['user_id'] = user[0].id
        else:
            errors.append('No this User name')

        if errors:
            modelResponse['status'] = False
            modelResponse['errors'] = errors

        return modelResponse

    def add_plan(self, postData):
        errors = []
        if not len(postData['destination']):
            errors.append('Destination must be there!')
        if not len(postData['describe']):
            errors.append('Describe must be there!')
        if not len(postData['start']):
            errors.append('Travel Start Date must be there!')
        if not len(postData['end']):
            errors.append('Travel End Date must be there!')

        modelResponse = {}
        # if failed validations
        if errors:
            modelResponse['status'] = False
            modelResponse['errors'] = errors
        # passed validations, save user
        else:
            # trip = Travel.objects.get(id = id)
            # user = User.objects.get(id = request.session['user_id'])
            # trip.joined_users.add(user)
            plan = self.create(user_id = postData['user_id'], destination = postData['destination'], describe = postData['describe'], start = postData['start'], end = postData['end'])
            
            modelResponse['status'] = True
            modelResponse['plan'] = plan

        # send modelResponse to views.py
        return modelResponse

class User(models.Model):
    name = models.CharField(max_length = 45)
    username = models.CharField(max_length = 45)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = TravelManager()

class Travel(models.Model):
    user = models.ForeignKey(User, related_name = 'Travel2User')
    joined_users = models.ManyToManyField(User)
    destination = models.CharField(max_length = 45)
    describe = models.TextField()
    start = models.DateTimeField(auto_now_add = True)
    end = models.DateTimeField(auto_now = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = TravelManager()
