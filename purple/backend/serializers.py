from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Curation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username']

class CurationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Curation
        fields = ['user', 'id', 'image', 'title', 'content', 'created_at']