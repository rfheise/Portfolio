from django.shortcuts import render,redirect
from .models import Post,Link,FileUpload, MLB, Last, Meme
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, Http404
from random import randint
from django.contrib.auth.models import User

def server(html):
    def func(request):
        return render(request, html)
    return func

def homburger(request):
    posts = Post.objects.all().order_by("-date")
    return render(request, "homburger.html", {"posts":posts})

def link(request,link_name):
    link = get_object_or_404(Link, short__iexact=link_name)
    if link.authenticate and not request.user.is_authenticated:
        raise Http404()
    link.count += 1 
    link.save()
    return redirect(link.link)

def file_server(request,file_route):
    filed = get_object_or_404(FileUpload, route=file_route)
    return redirect(filed.media.url)
def randomizer(arr):
    return arr[randint(0,len(arr) - 1)]

def mlb(request):
    user = get_object_or_404(User,username = request.user)
    if not user:
        return render(request,"message.html",{"message":"account required"})
    team = "You have already picked"
    if not Last.objects.filter(user = user).exists():
        team = randomizer(MLB.objects.filter(out = False).all())
        Last.objects.create(team = team,user = user)  
    total = MLB.objects.filter(out = True).count()
    last = Last.objects.order_by("-date")
    scores = MLB.objects.filter(out = True, winner = user).count()
    return render(request,"mlb.html", {"team":team,"last":last, "score":scores, "total":total})
    
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
        
def reactRoute(request, route):
    react = "http://localhost:3000/"
    return redirect(f"{react}{route}")

