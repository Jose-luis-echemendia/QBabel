import django_filters
from .models import Book


class BookFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name="title")
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name="price", lookup_expr="gt")
    price__lt = django_filters.NumberFilter(field_name="price", lookup_expr="lt")
    is_published = django_filters.BooleanFilter(field_name="is_published")

    class Meta:
        model = Book
        fields = ["title", "price", "is_published"]
