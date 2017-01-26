from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjias$', views.ninjias),
    url(r'^ninjias/(?P<color>\w+)$', views.oneninjias),
]
