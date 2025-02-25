from rest_framework import serializers
from apps.user.models import UserAccount
from apps.utils.serializers import AuditUserChangeSerializer, AbstractBaseSerializer
from apps.utils.serializers import GenericImage, ImageSerializer

class CategorySerializer():
    image = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    class Meta:
        fields = AbstractBaseSerializer.Meta + [
            "name",
            "image",
            "image_details"
            "description",
            "parent"            
            ] + AuditUserChangeSerializer.Meta
        
    def get_image_details(self, obj):
        return ImageSerializer(obj.image).data if obj.image else None