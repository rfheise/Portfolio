from django.shortcuts import render,redirect
from .models import Post,Link,FileUpload
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

def server(html):
    def func(request):
        return render(request, html)
    return func

def homburger(request):
    posts = Post.objects.all().order_by("-date")
    return render(request, "homburger.html", {"posts":posts})

def link(request,link_name):
    link = get_object_or_404(Link, short__iexact=link_name)
    return redirect(link.link)

def file_server(request,file_route):
    filed = get_object_or_404(FileUpload, route=file_route)
    return redirect(filed.media.url)

# def file_server_password(request,file_route):
#     if request.method == "POST":
#         filed = get_object_or_404(HiddenUpload, route=file_route)
#         response = HttpResponse("An Error Has Occured")
#         if filed.password:
#             if filed.self_destruct:
#                 os.remove(filed.path())
#         return response
#     elif request.method
#     else:
#         return render(request,"pfile.html")
        


    