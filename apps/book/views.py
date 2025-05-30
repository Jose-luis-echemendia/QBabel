from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from apps.utils.pagination import LargeSetPagination
from apps.utils.views.abstract_views import BaseViewSet, BaseCustomAPIView
from apps.utils.mixins import CreateImageMixin
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book
from .filters import BookFilter
from .mixins import (
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateFileBookMixin,
    PrepareDataForCategoryBookMixin,
)


from django.http import FileResponse
from google.cloud import storage
from django.conf import settings
import mimetypes


class BookViewSet(
    BaseViewSet,
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateImageMixin,
    CreateFileBookMixin,
    PrepareDataForCategoryBookMixin,
):
    """
    View to handle book requests.
    """

    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination
    filterset_class = BookFilter
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [AllowAny()]

        return super().get_permissions()

    def validate(self, request_data):
        validated_data = self.validate_data(request_data)

        self.validate_categories(validated_data.get("categories"))

        return validated_data

    def create(self, request, *args, **kwargs):
        """
        Create a new book.
        """

        file = request.FILES.get("file", None)

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"error": e.detail}, status=status.HTTP_400_BAD_REQUEST)

        file_object = self.create_file(file, validated_data.get("title"))

        from apps.utils.enums import ImageTypes

        cover_object = self.create_image(
            data={
                "image": validated_data.get("cover"),
                "name": validated_data.get("title"),
                "caption": validated_data.get("title"),
                "registered_by": self.request.user.pk,
                "type": ImageTypes.cover,
            }
        )
        # validated_data["author"] = self.request.user.pk
        validated_data["file"] = file_object.pk
        validated_data["cover"] = cover_object.pk
        categories = validated_data.pop("categories")

        # CREATE INSTANCE BOOK
        serializer = self.get_serializer(data=validated_data)
        serializer.is_valid(raise_exception=True)
        self.book = self.perform_create(serializer)

        # CREATE INSTANCES CATEOGRIES BOOKS
        try:
            serializer = CategoryBookSerializer(
                data=self.prepare_data_for_category_book(categories), many=True
            )
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {"book": self.get_serializer(self.book).data},
            status=status.HTTP_201_CREATED,
        )

    def delete(self, request, *args, **kwargs):
        return self.desactive_object(request, *args, **kwargs)

    @action(detail=False, methods=["POST"], url_path="validate-isbn")
    def validate_isbn(self, request, pk=None, *args, **kwargs):

        isbn = request.data.get("isbn", None)
        if not isbn:
            return Response(
                {"error": "ISBN is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if Book.objects.filter(isbn=isbn).exists():
            return Response(
                {"error": "ISBN already exists."}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            {"data": True},
            status=status.HTTP_204_NO_CONTENT,
        )


class ReadBookView(BaseCustomAPIView):
    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [AllowAny]
    pagination_class = LargeSetPagination
    filterset_class = BookFilter
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        book = self.get_object(*args, **kwargs)
        client = storage.Client()

        bucket = client.bucket(settings.GS_BUCKET_NAME)
        blob = bucket.blob(book.file.url)

        if not blob.exists():
            return Response(
                {"detail": "Archivo no encontrado"}, status=status.HTTP_404_NOT_FOUND
            )

        file_stream = blob.open("rb")
        content_type, _ = mimetypes.guess_type(blob.name)
        return FileResponse(file_stream, content_type=content_type)
