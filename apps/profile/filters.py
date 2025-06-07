import django_filters
from .models import Profile


class ProfileFilter(django_filters.FilterSet):
    me = django_filters.BooleanFilter(method="filter_me")
    created_at = django_filters.DateFromToRangeFilter(field_name="created_at")
    user_name = django_filters.CharFilter(
        method="filter_by_user_name", label="user_name"
    )

    class Meta:
        model = Profile
        fields = ["created_at", "me", "user_name"]

    def filter_me(self, queryset, name, value):
        if value:
            return queryset.filter(user=self.request.user)
        return queryset

    def filter_by_user_name(self, queryset, name, value):
        if value:
            return queryset.filter(user__user_name__icontains=value)
        return queryset
