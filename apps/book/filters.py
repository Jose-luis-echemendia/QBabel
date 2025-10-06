import django_filters
from .models import Book
from apps.category.models import Category


class BookFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name="title", lookup_expr="icontains")
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name="price", lookup_expr="gt")
    price__lt = django_filters.NumberFilter(field_name="price", lookup_expr="lt")
    is_published = django_filters.BooleanFilter(field_name="is_published")
    me = django_filters.BooleanFilter(field_name="me", method="filter_me")
    category = django_filters.CharFilter(
        method="filter_by_category_names", label="Category (comma-separated names)"
    )
    top_selling = django_filters.CharFilter(
        method="filter_top_selling_by_category",
        label="Top 8 best-selling books in a category (use category name)",
    )

    class Meta:
        model = Book
        fields = ["title", "price", "is_published", "category", "top_selling"]

    def filter_top_selling_by_category(self, queryset, name, value):
        if not value:
            return queryset.none()  # Retorna vacío si no se proporciona categoría

        from django.db.models import Count

        # 1. Filtra libros de la categoría especificada
        books_in_category = queryset.filter(category_book__category__name=value.strip())

        # 2. Anota con el conteo de compras y ordena descendente
        top_books = books_in_category.annotate(
            purchase_count=Count("purchase_invoices")
        ).order_by("-purchase_count")[
            :8
        ]  # Limita a 8 resultados

        return top_books

    def filter_by_category_names(self, queryset, name, value):
        if not value:
            return queryset
        category_names = [name.strip() for name in value.split(",")]
        return queryset.filter(category_book__category__name__in=category_names)

    def filter_me(self, queryset, name, value):
        if value:
            return queryset.filter(author=self.request.user)
        return queryset
