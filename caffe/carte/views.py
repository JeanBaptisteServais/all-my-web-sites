from django.shortcuts import render

def carte(request):
    return render(request, "carte/carte.html")
