from ..models import Meme, Link, Project
from .apiModels import LinkSerializer, MemeSerializer, ProjectSerializer 

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


@api_view(["GET"])
def memeApi(request):
    memes = MemeSerializer(Meme.objects.order_by("-date"),many=True)
    return Response(memes.data)

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
    project = get_object_or_404(Project, route = route)
    projectData = ProjectSerializer(project)
    return Response(projectData.data)

@api_view(["GET"])
def projectsApi(request):
        query = []
        #santatizing filter 
        #appropriate filters
        filters = ["coolness","difficulty","projectStart","projectEnd"]
        if "filter" in request.GET.keys() and request.GET['filter'] in filters: 
            query.append("-"+request.GET["filter"])
        projects = ProjectSerializer(Project.objects.order_by(*query), many = True)
        return Response(projects.data)
