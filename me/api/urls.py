from django.urls import path
from . import api
urlpatterns = [ 
    #returns meme data
    path("harambe",api.memeApi, name = "dankest"),
    #returns list of links for dyanamic link rendering
    path("links",api.linkApi, name = "links"),
    #returns data for a specific project
    path("project/<str:route>", api.projectApi),
    #returns list of all projects
    path("projects", api.projectsApi),
    #returns blog attributes
    path("quick_blog/<str:id>", api.blogApi)
]