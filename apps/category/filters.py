import django_filters
from .models import Category
from .enums import TypeCategory


class CategoryFilter(django_filters.FilterSet):
    withparent = django_filters.BooleanFilter(method="filter_withparent")
    created_at = django_filters.DateFromToRangeFilter(field_name="created_at")
    type = django_filters.ChoiceFilter(choices=TypeCategory.choices)

    class Meta:
        model = Category
        fields = ["created_at", "withparent", "type"]

    def filter_withparent(self, queryset, name, value):
        if value:
            return queryset.filter(parent=None)
        return queryset
