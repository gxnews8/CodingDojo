from django.shortcuts import render

# Create your views here.
def index(request):
    if request.method == 'POST':
        print request.method

        return render(request, 'authorAndBook/index.html')

    else:
        print '*'*50
        index = {
            'all_authors' : Author.objects.all(),
            'all_books' : Book.objects.all(),
            'all_publishers' : Publisher.objects.all(),
        }
        return render(request, 'authorAndBook/index.html', index)

def Add_author(request):
    print '*'*50
    if request.method == 'POST':
        pass

def Add_book(request):
    pass
