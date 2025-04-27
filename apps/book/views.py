from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated  
from django_filters.rest_framework import DjangoFilterBackend
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

class SeeBookContent(APIView):
    pass