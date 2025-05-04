from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated  
from apps.utils.pagination import LargeSetPagination
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book, CategoryBook


class BookViewSet(viewsets.ModelViewSet):
    """
    View to handle book requests.
    """

    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination

    def get_queryset(self):
        queryset = Book.objects.all()
        if not self.request.user.is_superuser:
            queryset = queryset.filter(gallery__user=self.request.user)
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset

    def perform_create(self, serializer):
        return serializer.save()
    
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
                "title": title,
                "registered_by": self.request.user.pk,
            })
            serializer.is_valid(raise_exception=True)
            return self.perform_create(serializer)
        
        data = request.data.copy()
        title = data.get("title", None)
        file = data.pop("file", None)
        cover = data.pop("cover", None)
        
        if not title:
            return Response({"error": "Title is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not file:
            return Response({"error": "File is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not cover:
            return Response({"error": "Cover is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        file_object = create_file(self, file, title)
        cover_object = create_cover(self, cover, title)
        data["author"] = self.request.user.pk
        data["file"] = file_object.pk
        data["cover"] = cover_object.pk
        
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

