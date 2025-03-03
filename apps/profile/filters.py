import django_filters
from .models import Profile

class ProfileFilter(django_filters.FilterSet):
    me = django_filters.BooleanFilter(method='filter_me')
    created_at = django_filters.DateFromToRangeFilter(field_name="created_at")

    class Meta:
        model = Profile
        fields = ["created_at", "me"]

    def filter_me(self, queryset, name, value):
        if value:
            return queryset.filter(user=self.request.user)
        return queryset
