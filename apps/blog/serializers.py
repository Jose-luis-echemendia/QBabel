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

    image = serializers.PrimaryKeyRelatedField(
        queryser=GenericImage.objects.all(), write_only=True
    )

    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.category_objects.get_queryset(type=TypeCategory.blog), write_only=True
    )

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
        ]
