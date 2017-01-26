from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^(?P<place>\w+)$', views.process_money),
    url(r'^reset$', views.reset)
]
