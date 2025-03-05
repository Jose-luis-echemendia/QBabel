from .serializers import ProfileSerializer
from .models import Profile
from .filters import ProfileFilter
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from apps.utils.pagination import MediumSetPagination
from django.shortcuts import get_object_or_404

               
class ProfileView(APIView):
    """
    view to handle profiles requested by the user
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProfileFilter
    ordering_fields = ["created_at"]  
    ordering = ["created_at"]

    def get_queryset(self):
        queryset = Profile.objects.all()
        if not self.request.user.is_superuser:
            queryset = queryset.filter(gallery__user=self.request.user)
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset
    
    def get_object(self):
        """
        Retrieve the profile instance based on the provided ID.
        """
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, pk=self.kwargs.get("pk"))
        self.check_object_permissions(self.request, obj)
        return obj

    def perform_create(self, serializer):
        return serializer.save()

    def filter_queryset(self, queryset):
        filterset = self.filterset_class(self.request.GET, queryset=queryset, request=self.request)
        if not filterset.is_valid():
            raise ValueError(f"Invalid filter data: {filterset.errors}")
        queryset = filterset.qs
        return queryset
    
    def order_queryset(self, queryset):
        ordering = self.request.GET.get("ordering", None)
        if ordering:
            queryset = queryset.order_by(*ordering.split(","))
        return queryset

    def get(self, request, *args, **kwargs):
        """
        endpoint to get all profiles of the authenticated user
        """
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"details": "not profile found"}, status=status.HTTP_404_NOT_FOUND
            )
            
        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(ordered_queryset, request)
        profiles_data = self.serializer_class(results, many=True).data
        return paginator.get_paginated_response({"profiles": profiles_data})
            
    def put(self, request, *args, **kwargs):
        """
        Endpoint to update an profile (full update).
        """
        instance = self.get_object()  # Obtén la instancia que se va a actualizar
        serializer = self.serializer_class(instance, data=request.data, partial=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, *args, **kwargs):
        """
        Endpoint to partially update an profile.
        """
        instance = self.get_object()  # Obtén la instancia que se va a actualizar
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileDetailsView(APIView):
    def get(self, request, *args, **kwargs):
        def get_object(self):
            """
            Retrieve the profile instance based on the provided ID.
            """
            queryset = self.get_queryset()
            obj = get_object_or_404(queryset, pk=self.kwargs.get("pk"))
            self.check_object_permissions(self.request, obj)
            return obj
    
        """
        endpoint to get all profiles of the authenticated user
        """
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"details": "not profile found"}, status=status.HTTP_404_NOT_FOUND
            )
            
        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(ordered_queryset, request)
        profiles_data = self.serializer_class(results, many=True).data
        return paginator.get_paginated_response({"profiles": profiles_data})
            