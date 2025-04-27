from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.utils.models.models import GenericImage, GenericDocument
from apps.category.models import Category
from .models import Book, CategoryBook
from django.contrib.auth import get_user_model


User = get_user_model()

class BookSerializer(AbstractBaseSerializer):
    """
    Serializer for the Book model.
    """
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    author_details = serializers.SerializerMethodField()
    
    cover = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    cover_details = serializers.SerializerMethodField()
    
    file = serializers.PrimaryKeyRelatedField(
        queryset=GenericDocument.objects.all(), write_only=True
    )
    file_details = serializers.SerializerMethodField()
    
    category_book = serializers.SerializerMethodField()
    is_discount_active = serializers.SerializerMethodField()
    discount_percentage = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = AbstractBaseSerializer.Meta + [
            "author",
            "author_details",
            "title",
            "cover",
            "cover_details",
            "synopsis",
            "file",
            "file_details",
            "is_published",
            "published_date",
            "number_chapters",
            "number_pages",
            "lenguage",
            "price",
            "is_discount_active",
            "discount_percentage",
            "discount_start_date",
            "discount_end_date"
            "category_book"
        ]
        extra_kwargs = {
            "author": {"required": True},
            "cover": {"required": True},
            "file": {"required": True},
            "category_book": {"required": False},
            "title": {"required": True},
            "synopsis": {"required": True},
            "is_published": {"required": False},
            "published_date": {"required": False},
            "number_chapters": {"required": True},
            "number_pages": {"required": True},
            "lenguage": {"required": True},
            "price": {"required": True},
        }
           
    def get_author_details(self, obj):
        """
        Get the details of the author.
        """
        from apps.user.serializers import UserSerializer
        return UserSerializer(obj.author).data if obj.author else None
    
    def get_cover_details(self, obj):
        """
        Get the details of the cover image.
        """
        from apps.utils.serializers.serializers import ImageSerializer
        return ImageSerializer(obj.cover).data if obj.cover else None
    
    def get_file_details(self, obj):
        """
        Get the details of the file.
        """
        from apps.utils.serializers.serializers import DocumentSerializer
        return DocumentSerializer(obj.file).data if obj.file else None
    
    def get_category_book(self, obj):
        """
        Get the details of the category book.
        """
        from apps.category.serializers import CategorySerializer
        return CategorySerializer(obj.category_book, many=True).data if obj.category_book else None

    def get_is_discount_active(self, obj):
        """
        Check if the discount is active.
        """
        return obj.is_discount_active() if obj else False
    
    def get_discount_percentage(self, obj):
        """
        Get the discount percentage.
        """
        return obj.get_discounted_price()if obj else 0.00

    def create(self, validated_data):
        """
        Create a new Book instance.
        """
        book = Book.objects.create(**validated_data)
        return book
    
    def update(self, instance, validated_data):
        """
        Update an existing Book instance.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
class CategoryBookSerializer(AbstractBaseSerializer):
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    book_details = serializers.SerializerMethodField()
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), write_only=True
    )
    category_details = serializers.SerializerMethodField()
    
    class Meta:
        model = CategoryBook
        fields = AbstractBaseSerializer.Meta.fields + [
            "book",
            "book_details",
            "category",
            "category_details"
        ]
        
    def get_book_details(self, obj):
        from apps.book.serializers import BookSerializer
        return BookSerializer(obj.book).data if obj.book else None
    
    def get_category_details(self, obj):
        from apps.category.serializers import CategorySerializer
        return CategorySerializer(obj.category).data if obj.category else None
    