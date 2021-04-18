from django.urls import path, include
from . import views
urlpatterns = [
    path("",views.server("index.html"), name = "index"),
    path("construction", views.server("construction.html")),
    path("homburger", views.homburger, name = "homburger"),
    path("files/<str:file_route>",views.file_server, name = "file_server"),
    path("test",views.server("404.html"), name = "404-test"),
    #must go last as it is a catch all
    path("<str:link_name>",views.link, name = "linker"),
]