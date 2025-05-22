from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.utils.utils import desconvertir_de_snake_case
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.utils.models.models import GenericImage
from apps.category.serializers import CategorySerializer
from .models import Profile, Follower

User = get_user_model()


class ProfileSerializer(AbstractBaseSerializer):
    avatar = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    avatar_details = serializers.SerializerMethodField()
    literary_preferences_details = serializers.SerializerMethodField()
    
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
            "literary_preferences_details",
        ]
        extra_kwargs = {
            "user": {"read_only": True},
            "literary_preferences": {"required": False, "write_only": True},
        }
        
    def get_avatar_details(self, obj):
        from apps.utils.serializers.serializers import ImageSerializer
        return ImageSerializer(obj.avatar).data if obj.avatar else None

    def get_literary_preferences_details(self, obj):
        return CategorySerializer(obj.literary_preferences, many=True).data
    
    def to_representation(self, instance):
        return super().to_representation(instance)
    
class FollowerSerializer(AbstractBaseSerializer):
    follower = serializers.PrimaryKeyRelatedField(
        queryset=Profile.objects.all(), write_only=True
    )
    follower_details = serializers.SerializerMethodField()
    writer = serializers.PrimaryKeyRelatedField(
        queryset=Profile.objects.all(), write_only=True
    )
    writer_details = serializers.SerializerMethodField()
    
    class Meta:
        model = Follower
        fields = AbstractBaseSerializer.Meta.fields + [
            "follower",
            "follower_details",
            "writer",
            "writer_details"
        ]
        
    def get_follower_details(self, obj):
        from apps.profile.serializers import ProfileSerializer
        return ProfileSerializer(obj.follower).data if obj.follower else None
    
    def get_writer_details(self, obj):
        from apps.profile.serializers import ProfileSerializer
        return ProfileSerializer(obj.writer).data if obj.writer else None
    
    def validate(self, attrs):
        """
        Validate that the follower and writer are not the same.
        """
        if attrs.get("follower") == attrs.get("writer"):
            raise ValidationError("Follower and writer cannot be the same.")
        return super().validate(attrs)
    
    def create(self, validated_data):
        """
        Create a new Follower instance.
        """
        follower = validated_data.pop("follower")
        writer = validated_data.pop("writer")
        
        # Check if the follower already follows the writer
        if Follower.objects.filter(follower=follower, writer=writer).exists():
            raise ValidationError("Follower already exists.")
        
        return super().create(validated_data)
    
    