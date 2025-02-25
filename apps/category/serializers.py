from rest_framework import serializers
from apps.user.models import UserAccount
from apps.utils.serializers.abstract_serializers import AuditUserChangeSerializer, AbstractBaseSerializer, AbstractImageSerializer
from apps.utils.serializers.serializers import GenericImage
from .models import Category

class CategorySerializer():
    
    class Meta:
        model = Category
        fields = AbstractBaseSerializer.Meta + [
            "name",
            "description",
            "parent"            
            ] + AuditUserChangeSerializer.Meta + AbstractImageSerializer.Meta
        
    