from __future__ import unicode_literals

from django.db import models

# Create your models here.
class BookManager(models.Model):
    def add_book(self, postData):
        print postData
        author = Author.objects.get(id=postData['author_id'])
        book = self.objects.create(title = postData['title'], author = author)
        print book

    def validate_book(self, postData):
        pass

class Author(models.Model):
    name = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

class Book(models.Model):
    title = models.CharField(max_length = 45)
    author = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    objects = BookManager()
