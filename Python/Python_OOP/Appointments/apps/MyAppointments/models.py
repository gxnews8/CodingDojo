from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    First_Name = models.CharField(max_length = 255)
    Last_Name = models.CharField(max_length = 255)
    Email = models.EmailField(max_length = 255)
    Created_at = models.DateTimeField(auto_now_add = True)
    Updated_at = models.DateTimeField(auto_now_add = True)

class Appointment(models.Model):
    User = models.ForeignKey(User)
    Task = models.CharField(max_length = 255)
    Status = models.BooleanField()
    Created_at = models.DateTimeField(auto_now_add = True)
    Updated_at = models.DateTimeField(auto_now_add = True)
