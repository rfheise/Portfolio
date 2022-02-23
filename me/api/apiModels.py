from rest_framework import serializers
from ..models import Meme, Link, Project, QuickBlog, TechStack, QuickBlog, QuickSection

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
class QuickBlogSectionSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source="section_id")
    class Meta:
        model = QuickSection 
        fields = ['type','value','header','id']
class QuickBlogShortSerializer(serializers.ModelSerializer):
    date = serializers.ReadOnlyField(source = "readableDate")
    class Meta:
        model = QuickBlog
        fields = ['title','image','date','uuid']
class QuickBlogSerializer(serializers.HyperlinkedModelSerializer):
    sections = QuickBlogSectionSerializer(read_only = True, many = True)
    class Meta:
        model = QuickBlog
        fields = ['title','date','image','sections']
class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ReadOnlyField(source = "logo.url")
    projectStart = serializers.ReadOnlyField(source = "startFormat")
    projectEnd = serializers.ReadOnlyField(source = "endFormat")
    tech = TechStackSerializer(read_only = True, many = True)
    class Meta:
        model = Project 
        fields = ['difficulty','title','image','tagline','coolness',
            'projectStart','projectEnd','link','uuid','route', 'tech']