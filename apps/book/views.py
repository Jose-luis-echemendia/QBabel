from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.utils.pagination import LargeSetPagination
from apps.utils.views.abstract_views import BaseViewSet
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book
from .mixins import (
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateCoverBookMixin,
    CreateFileBookMixin,
)


class BookViewSet(
    BaseViewSet,
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateCoverBookMixin,
    CreateFileBookMixin,
):
    """
    View to handle book requests.
    """

    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.action == "list":
            return [AllowAny()]

        return super().get_permissions()

    def validate(self, request_data):
        validated_data = self.validate_date(request_data)

    def create(self, request, *args, **kwargs):
        """
        Create a new book.
        """

        file = request.FILES.pop("file", None)
        title = request.data.pop("title", None)
        cover = request.data.pop("cover", None)
        categories = request.data.pop("categories", None)

        if not categories:
            return Response(
                {"error": "Categories are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not title:
            return Response(
                {"error": "Title is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not file:
            return Response(
                {"error": "File is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not cover:
            return Response(
                {"error": "Cover is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        data = {
            "title": title,
            "description": request.data.get("description", None),
            "price": request.data.get("price", None),
        }

        file_object = self.create_file(self, file, title)
        cover_object = self.create_cover(self, cover, title)
        data["author"] = self.request.user.pk
        data["file"] = file_object.pk
        data["cover"] = cover_object.pk

        # CREATE INSTANCE BOOK
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.book = self.perform_create(serializer)

        # CREATE INSTANCES CATEOGRIES BOOKS
        try:
            serializer = CategoryBookSerializer(
                data=self.validate_categories(data.get("categories")), many=True
            )
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {"book": BookSerializer(self.book).data}, status=status.HTTP_201_CREATED
        )

    @action(detail=False, methods=["POST"], url_path="validate-isbn")
    def validate_isbn(self, request, pk=None, *args, **kwargs):

        isb = request.data.get("isbn", None)
        if not isb:
            return Response(
                {"error": "ISBN is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if Book.objects.filter(isbn=isb).exists():
            return Response(
                {"error": "ISBN already exists."}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            {"data": True},
            status=status.HTTP_204_NO_CONTENT,
        )
