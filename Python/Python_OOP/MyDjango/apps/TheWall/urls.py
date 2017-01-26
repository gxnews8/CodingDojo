from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^signUp$', views.signUp, name='signUp'),
    url(r'^signIn$', views.signIn, name='signIn'),
    url(r'^add_message$', views.add_message, name='add_message'),
    url(r'^add_comment$', views.add_comment, name='add_comment'),
    url(r'^logOut$', views.logOut, name='logOut'),
]
