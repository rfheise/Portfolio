from django.urls import path
from . import api
urlpatterns = [ 
    path("harambe",api.memeApi, name = "dankest"),
    path("links",api.linkApi, name = "links")
]