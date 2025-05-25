from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.book.models import Book
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import PurchaseInvoices

User = get_user_model()


class PurchaseInvoicesSerializer(AbstractBaseSerializer):
    """
    Serializer for PurchaseInvoices model.
    """

    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    book_details = serializers.SerializerMethodField()
    buyer = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    buyer_details = serializers.SerializerMethodField()

    class Meta:
        model = PurchaseInvoices
        fields = AbstractBaseSerializer.Meta.fields + [
            "book",
            "book_details",
            "buyer",
            "buyer_details",
            "profit",
            "writer_profit",
            "final_payment",
        ]
        read_only_fields = ("id", "created_at", "updated_at")

    def get_book_details(self, obj):
        from apps.book.serializers import BookSerializer

        return BookSerializer(obj.book).data if obj.book else None

    def get_buyer_details(self, obj):
        from apps.user.serializers import UserListSerializer

        return UserListSerializer(obj.buyer).data if obj.buyer else None
