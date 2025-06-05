from rest_framework.pagination import PageNumberPagination


class SmallSetPagination(PageNumberPagination):
    page_query_param = "p"
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 10


class MediumSetPagination(PageNumberPagination):
    page_query_param = "p"
    page_size = 15
    page_size_query_param = "page_size"
    max_page_size = 15


class LargeSetPagination(PageNumberPagination):
    page_query_param = "p"
    page_size = 32
    page_size_query_param = "page_size"
    max_page_size = 32


class ExtraLargeSetPagination(PageNumberPagination):
    page_query_param = "p"
    page_size = 54
    page_size_query_param = "page_size"
    max_page_size = 54
