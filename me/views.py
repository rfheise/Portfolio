from django.shortcuts import render,redirect
from .models import Post,Link,FileUpload
from django.shortcuts import get_object_or_404

def server(html):
    def func(request):
        return render(request, html)
    return func

def homburger(request):
    posts = Post.objects.all()
    return render(request, "homburger.html", {"posts":posts})

def link(request,link_name):
    link = get_object_or_404(Link, short=link_name)
    return redirect(link.link)

def file_server(request,file_route):
    filed = get_object_or_404(FileUpload, route=file_route)
    return redirect(filed.media.url)