from django.http.response import Http404
from ..models import Meme, Link, Project, QuickBlog, QuickSection
from .apiModels import LinkSerializer, MemeSerializer, ProjectSerializer, QuickBlogSerializer, QuickBlogShortSerializer 

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


@api_view(["GET"])
def memeApi(request):
    memes = MemeSerializer(Meme.objects.order_by("-date"),many=True)
    return Response(memes.data)

@api_view(["GET"])
def blogQueryApi(request):
    blogs = QuickBlogShortSerializer(QuickBlog.objects.filter(show=True).order_by("-date"),many = True)
    return Response(blogs.data)

@api_view(["GET"])
def linkApi(request):
    links = None
    if request.user.is_authenticated:
        links = LinkSerializer(Link.objects.filter(show = True).all(),many = True)
    else:
        links = LinkSerializer(Link.objects.filter(show = True,authenticate =False).all(), many = True)
    return Response(links.data)
@api_view(["GET"])
def projectApi(request,route):
    #gets a project and sends the json value via the api
    # 404's if project is not found
    project = get_object_or_404(Project, route = route)
    projectData = ProjectSerializer(project)
    return Response(projectData.data)

@api_view(["GET"])
def projectsApi(request):
        query = []
        #santatizing filter 
        #appropriate filters
        filters = ["coolness","difficulty","projectStart","projectEnd"]
        #checks to make sure filter is valid and won't cause an error
        if "filter" in request.GET.keys() and request.GET['filter'] in filters: 
            filt = request.GET['filter']
            #if filter should be in decending prepend a -
            if filt == "coolness" or filt == "projectEnd":
                filt = "-" + filt
            #add to order by list
            query.append(filt)
        projects = ProjectSerializer(Project.objects.order_by(*query), many = True)
        return Response(projects.data)
    
@api_view(["GET"])
def blogApi(request, id):
    try:
         blog = get_object_or_404(QuickBlog, link = id)
    except:
        raise Http404
    blog.views += 1
    blog.save()
    blogData = QuickBlogSerializer(blog)
    return Response(blogData.data)