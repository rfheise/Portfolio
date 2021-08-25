from rest_framework import serializers
from ..models import Meme, Link, Project, TechStack

class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme 
        fields = ['id','caption','image']
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link 
        fields = ['short']

class TechStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechStack 
        fields = ['image',"link","name"]
class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ReadOnlyField(source = "logo.url")
    projectStart = serializers.ReadOnlyField(source = "startFormat")
    projectEnd = serializers.ReadOnlyField(source = "endFormat")
    tech = TechStackSerializer(read_only = True, many = True)
    class Meta:
        model = Project 
        fields = ['difficulty','title','image','tagline','coolness',
            'projectStart','projectEnd','link','uuid','route', 'tech']