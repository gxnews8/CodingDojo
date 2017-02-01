from __future__ import unicode_literals
import re, bcrypt
from django.db import models
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your models here.
class LoginRegManager(models.Manager):
    def register(self, postData):
        errors = []
        if not len(postData['first_name']) > 2:
            errors.append('First name must be be at least 2 characters!')
        if not len(postData['last_name']):
            errors.append('Last name must be there!')
        if not len(postData['email']):
            errors.append('Email must be there')
        if not EMAIL_REGEX.match(postData['email']):
            errors.append('Must have a valid email')
        if len(postData['password']) < 8:
            errors.append('Password must be at least 8 characters long!')
        if not postData['password'] == postData['confirm_password']:
            errors.append('Passwords must match!')

        user = self.filter(email = postData['email'])

        if user:
            errors.append('Email already exists!')

        modelResponse = {}
        # if failed validations
        if errors:
            modelResponse['status'] = False
            modelResponse['errors'] = errors
        # passed validations, save user
        else:
            hashed_password = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
            user = self.create(first_name = postData['first_name'], last_name = postData['last_name'], email = postData['email'], password = hashed_password)

            modelResponse['status'] = True
            modelResponse['user'] = user

        # send modelResponse to views.py
        return modelResponse

    def check(self, postData):
        errors = []
        user = self.filter(email = postData['email'])
        # check to see is in db
        modelResponse = {}
        if user[0]:
            # check for passwords
            if not bcrypt.checkpw(postData['password'].encode(), user[0].password.encode()):
                errors.append('Invalid email/password combination!')
            # success login
            else:
                modelResponse['status'] = True
                modelResponse['user_id'] = user[0].id
        else:
            errors.append('Invalid email')

        if errors:
            modelResponse['status'] = False
            modelResponse['errors'] = errors

        return modelResponse

class LoginReg(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = LoginRegManager()
