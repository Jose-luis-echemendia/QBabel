from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated  
from apps.utils.pagination import LargeSetPagination
from apps.category.models import Category
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book

class BookViewSet(viewsets.ModelViewSet):
    """
    View to handle book requests.
    """
    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination

    def get_queryset(self):
        queryset = Book.objects.all()
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset

    def perform_create(self, serializer):
        return serializer.save()
    
    def validate_categories(self, categories):
        if not categories:
            raise ValidationError(
                {"categories": "This field is required."}  
            )

        if not isinstance(categories, list):
            raise ValidationError(
                {"categories": "This field must be a list of strings"}
            )
            
        non_existent_categories = [category_uid for category_uid in categories if not Category.objects.filter(pk=category_uid).exists()]
        if non_existent_categories:
            raise ValidationError({"categories": f"Invalid categories: {non_existent_categories}"})
        
        return [ 
                {
                    'category': category,
                    'book': self.book.pk
                }
                for category in categories
            ]
    
    def create(self, request, *args, **kwargs):
        """
        Create a new book.
        """
        def create_cover(self, cover, title):
            from apps.utils.serializers.serializers import ImageSerializer
            from apps.utils.enums import ImageTypes
            serializer = ImageSerializer(data={
                "image": cover,
                "type": ImageTypes.cover,
                "title": title,
                "registered_by": self.request.user.pk,
            })
            serializer.is_valid(raise_exception=True)
            return self.perform_create(serializer)
            
        def create_file(self, file, title):
            from apps.utils.serializers.serializers import DocumentSerializer
            from apps.utils.enums import DocumentTypes
            serializer = DocumentSerializer(data={
                "file": file,
                "type": DocumentTypes.PDF,
                "title": str(title),
                "registered_by": self.request.user.pk,
            })
            serializer.is_valid(raise_exception=True)
            return self.perform_create(serializer)
        
        file = request.FILES.pop("file", None)
        title = request.data.pop("title", None)
        cover = request.data.pop("cover", None)
        categories = request.data.pop("categories", None)
        
        if not categories:
            return Response({"error": "Categories are required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not title:
            return Response({"error": "Title is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not file:
            return Response({"error": "File is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not cover:
            return Response({"error": "Cover is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        data = {
            "title": title,
            "description": request.data.get("description", None),
            "price": request.data.get("price", None),
        }
        
        file_object = create_file(self, file, title)
        cover_object = create_cover(self, cover, title)
        data["author"] = self.request.user.pk
        data["file"] = file_object.pk
        data["cover"] = cover_object.pk
        
        # CREATE INSTANCE BOOK
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.book = self.perform_create(serializer)
        
        # CREATE INSTANCES CATEOGRIES BOOKS
        try:
            serializer = CategoryBookSerializer(data=self.validate_categories(data.get('categories')), many=True)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

