from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
]

@app.route('/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')
