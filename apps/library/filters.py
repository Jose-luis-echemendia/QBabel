import django_filters
from django.db.models import Q
from .models import Item


class ItemFilter(django_filters.FilterSet):
    is_sold = django_filters.BooleanFilter(method="filter_is_sold")
    is_filed = django_filters.BooleanFilter()
    is_active = django_filters.BooleanFilter()
    me = django_filters.BooleanFilter(field_name="me", method="filter_me")

    class Meta:
        model = Item
        fields = ["is_sold", "is_filed", "is_active"]

    def filter_is_sold(self, queryset, name, value):
        """
        Si `value` es True, devuelve ítems que:
        - tienen `is_sold=True`, o
        - tienen un libro con `price == 0`

        Si `value` es False, devuelve ítems que:
        - tienen `is_sold=False` y
        - tienen un libro con `price > 0`
        """
        if value:
            return queryset.filter(Q(is_sold=True) | Q(book__price=0))
        else:
            return queryset.filter(is_sold=False, book__price__gt=0)

    def filter_me(self, queryset, name, value):
        if value:
            return queryset.filter(book__author=self.request.user)
        return queryset
