import django_filters
from .models import Comment


class CommentFilter(django_filters.FilterSet):
    like = django_filters.NumberFilter()
    like__gt = django_filters.NumberFilter(field_name="price", lookup_expr="gt")
    like__lt = django_filters.NumberFilter(field_name="price", lookup_expr="lt")
    deslike = django_filters.NumberFilter()
    deslike__gt = django_filters.NumberFilter(field_name="price", lookup_expr="gt")
    deslike__lt = django_filters.NumberFilter(field_name="price", lookup_expr="lt")

    class Meta:
        model = Comment
        fields = ["like", "deslike"]
