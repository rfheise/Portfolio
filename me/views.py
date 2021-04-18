from django.shortcuts import render
from .models import Post

def server(html):
    def func(request):
        return render(request, html)
    return func

def homburger(request):
    posts = Post.objects.all()
    return render(request, "homburger.html", {"posts":posts})