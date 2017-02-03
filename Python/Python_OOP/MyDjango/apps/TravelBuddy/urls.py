from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^main$', views.index, name = 'main'),
    url(r'^register$', views.register, name = 'register'),
    url(r'^login$', views.login, name = 'login'),
    url(r'^add$', views.add, name = 'add'),
    url(r'^travels$', views.travels, name = 'travels'),
    url(r'^remove/(?P<id>\d+)$', views.remove, name = 'remove'),
    url(r'^join/(?P<id>\d+)$', views.join, name = 'join'),
    url(r'^destination/(?P<id>\d+)$', views.destination, name = 'destination'),
    url(r'^logout$', views.logout, name = 'logout'),
]
