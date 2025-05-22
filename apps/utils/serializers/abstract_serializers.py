from django.contrib.auth import get_user_model
from rest_framework import serializers
from ..models.models import GenericImage
import logging

# Configurar un logger
logger = logging.getLogger(__name__)
User = get_user_model()

class AbstractBaseSerializer(serializers.ModelSerializer):
    uid = serializers.UUIDField(required=False)
    slug = serializers.SlugField(required=False)
    updated_at = serializers.DateTimeField(required=False)
    created_at = serializers.DateTimeField(required=False)

    class Meta:
        abstract = True
        fields = ["uid", "slug", "created_at", "updated_at"]
        read_only_fields = ("uid", "slug", "created_at", "updated_at")

class AuditUserChangeSerializer(serializers.ModelSerializer):
    registered_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, required=False
    )
    updated_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), required=False, write_only=True
    )
    registered_by_details = serializers.SerializerMethodField()
    updated_by_details = serializers.SerializerMethodField()

    class Meta:
        abstract = True
        fields = [
            "registered_by",
            "updated_by",
            "registered_by_details",
            "updated_by_details",
        ]
        
    def get_registered_by_details(self, obj):
        from apps.user.serializers import UserListSerializer
        return UserListSerializer(obj.registered_by).data if obj.registered_by else None

    def get_updated_by_details(self, obj):
        from apps.user.serializers import UserListSerializer
        return UserListSerializer(obj.updated_by).data if obj.updated_by else None

    def create(self, validated_data):
        if not validated_data.get("registered_by"): 
            user = self.context["request"].user
            validated_data["registered_by"] = user
        return super().create(validated_data)


    def update(self, instance, validated_data):
        if not validated_data.get("updated_by"):
            user = self.context["request"].user
            instance.updated_by = user

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

class AbstractImageSerializer(serializers.ModelSerializer):
    image = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    image_details = serializers.SerializerMethodField()
    
    class Meta:
        abstract = True
        fields = [
            "image",
            "image_details"
        ]
        
    def get_image_details(self, obj):
        from .serializers import ImageSerializer
        return ImageSerializer(obj.image).data if obj.image else None