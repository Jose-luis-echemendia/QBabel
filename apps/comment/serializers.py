from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from .models import Comment, ReactComment
from django.contrib.auth import get_user_model
from apps.book.models import Book

User = get_user_model()


class CommentSerializer(AbstractBaseSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    profile = serializers.SerializerMethodField()
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    rating = serializers.IntegerField(min_value=0, max_value=5, default=0)
    like = serializers.IntegerField(min_value=0, default=0)
    deslike = serializers.IntegerField(min_value=0, default=0)

    user_reacted = serializers.SerializerMethodField()
    user_react_uid = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "profile",
            "book",
            "comment",
            "rating",
            "user_reacted",
            "user_react_uid",
            "like",
            "deslike",
        ]
        extra_kwargs = {"comment": {"required": True}}

    def get_profile(self, obj):
        from apps.profile.serializers import ProfileSerializer

        return ProfileSerializer(obj.user.profile).data if obj.user.profile else None

    def get_user_reacted(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            return ReactComment.objects.filter(
                comment=obj, user=request.user, is_active=True
            ).exists()
        return False

    def get_user_react_uid(self, obj):
        request = self.context.get("request")
        if (
            request
            and request.user.is_authenticated
            and ReactComment.objects.filter(comment=obj, user=request.user).exists()
        ):
            return (
                ReactComment.objects.filter(comment=obj, user=request.user).first().uid
            )
        return None


class ReactCommentSerializer(AbstractBaseSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    comment = serializers.PrimaryKeyRelatedField(
        queryset=Comment.objects.all(), write_only=True
    )

    class Meta:
        model = ReactComment
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "comment",
        ]
