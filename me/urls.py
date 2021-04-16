from django.urls import path, include
from . import views
urlpatterns = [
    path("",views.server("index.html"), name = "index"),
    path("construction", views.server("construction.html")),
    path("homburger", views.server("homburger.html"), name = "homburger")
]