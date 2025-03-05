import django_filters
from .models import Category

class CategoryFilter(django_filters.FilterSet):
    withparent = django_filters.BooleanFilter(method='filter_withparent')
    created_at = django_filters.DateFromToRangeFilter(field_name="created_at")

    class Meta:
        model = Category
        fields = ["created_at", "withparent"]

    def filter_withparent(self, queryset, name, value):
        if value:
            return self.queryset.filter(parent=None)
        return queryset
