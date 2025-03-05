from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.utils.utils import desconvertir_de_snake_case
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.utils.models.models import GenericImage
from .models import Profile

User = get_user_model()


class ProfileSerializer(AbstractBaseSerializer):
    avatar = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    avatar_details = serializers.SerializerMethodField()
    
    class Meta:
        model = Profile
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "avatar",
            "avatar_details",
            "bio",
            "age",
            "sex",
            "country",
            "number_phone",
            "literary_preferences",
        ]
        
    def get_avatar_details(self, obj):
        from apps.utils.serializers.serializers import ImageSerializer
        return ImageSerializer(obj.image).data if obj.image else None

