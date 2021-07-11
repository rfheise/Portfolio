from django.urls import path, include
from . import views
from . import image
urlpatterns = [
    #api paths
    path("api/",include("me.api.urls")),
    path("",views.server("index.html"), name = "index"),
    path("epicMemes",views.server("template_builder/memer.html"),name = "memer"),
    path("construction", views.server("construction.html")),
    path("homburger", views.homburger, name = "homburger"),
    path("files/<str:file_route>",views.file_server, name = "file_server"),
    path("test",views.server("404.html"), name = "404-test"),
    path("resume", views.server("resume.html"),name = "resume"),
    path("blog", views.server("blog.html"), name = "blog"),
    path("decrypt",image.decrypt, name = "decryptor"),
    path("encrypt",image.encrypt, name = "decryptor"),
    path("decrypt_file", image.decrypt_file, name = "file decrypt"),
    path("choose", views.server("choose.html"), name = "chooser"),
    path("mlb",views.mlb, name = "mlb"),
    path("react/<str:route>",views.reactRoute, name = "react"),
    #must go last as it is a catch all
    path("<str:link_name>",views.link, name = "linker"),
]