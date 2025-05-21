from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.utils.serializers.serializers import AbstractBaseSerializer
from apps.utils.models.models import GenericImage
from apps.category.models import Category
from apps.category.enums import TypeCategory
from .models import Post

User = get_user_model()


class PostSerializer(AbstractBaseSerializer):

    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    author_details = serializers.SerializerMethodField()

    image = serializers.PrimaryKeyRelatedField(
        queryser=GenericImage.objects.all(), write_only=True
    )
    image_details = serializers.SerializerMethodField()

    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.category_objects.get_queryset(type=TypeCategory.blog),
        write_only=True,
    )
    category_details = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = AbstractBaseSerializer.Meta.fields + [
            "title",
            "author",
            "image",
            "content",
            "category",
            "publication_date",
            "status",
            "author_details",
            "image_details",
            "category_details",
        ]

    def get_author_details(self, obj):
        """
        Get the details of the author.
        """
        from apps.user.serializers import UserSerializer

        return UserSerializer(obj.author).data if obj.author else None

    def get_image_details(self, obj):
        """
        Get the details of the author.
        """
        from apps.utils.serializers.serializers import ImageSerializer

        return ImageSerializer(obj.image).data if obj.image else None

    def get_category_details(self, obj):
        """
        Get the details of the author.
        """
        from apps.category.serializers import CategorySerializer

        return CategorySerializer(obj.category).data if obj.category else None
