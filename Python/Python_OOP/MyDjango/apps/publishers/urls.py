from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.create, name = 'create'),
    url(r'^book_to_publisher', views.book_to_publisher, name= 'book_to_publisher'),
]
