from rest_framework import serializers
from ..models import Meme, Link

class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme 
        fields = ['id','caption','image']
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link 
        fields = ['short']