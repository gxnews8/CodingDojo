#1/19/17 by King
from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^/randomworld$', views.randomworld)
]
