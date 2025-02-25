from rest_framework import serializers
from apps.user.models import UserAccount
from apps.utils.serializers import AuditUserChangeSerializer, AbstractBaseSerializer, AbstractImageSerializer
from apps.utils.serializers import GenericImage, ImageSerializer

class CategorySerializer():
    
    class Meta:
        fields = AbstractBaseSerializer.Meta + [
            "name",
            "description",
            "parent"            
            ] + AuditUserChangeSerializer.Meta + AbstractImageSerializer.Meta
        
    