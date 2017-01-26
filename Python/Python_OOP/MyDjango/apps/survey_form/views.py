from django.shortcuts import render

# Create your views here.
def index(request):
    print '*'*50
    request.session
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        results = {
            'name' : request.session['name'],
            'location' : request.session['location'],
            'language' : request.session['language'],
            'comment' : request.session['comment']
        }
        return render(request, 'survey_form/results.html', results)
    else:
        return render(request, 'survey_form/index.html')
