import django_filters
from .models import PurchaseInvoices


class PurchaseInvoicesFilter(django_filters.FilterSet):
    me = django_filters.BooleanFilter(method="filter_me")
    created_at = django_filters.DateFromToRangeFilter(field_name="created_at")

    class Meta:
        model = PurchaseInvoices
        fields = ["created_at", "me"]

    def filter_me(self, queryset, name, value):
        if value:
            return queryset.filter(buyer=self.request.user)
        return queryset
