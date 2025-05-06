from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class LibraryView(APIView):
    """
    View to manage the library.
    """

    def get(self, request):
        # Logic to retrieve library information
        return Response(
            {"message": "Library retrieved successfully"}, status=status.HTTP_200_OK
        )


class AddBookView(APIView):
    """
    View to add a book to the library.
    """

    def post(self, request):
        # Logic to add a book
        return Response(
            {"message": "Book added successfully"}, status=status.HTTP_201_CREATED
        )


class DisaggregateBookView(APIView):
    """
    View to disaggregate a book from the library.
    """

    def post(self, request):
        # Logic to disaggregate a book
        return Response(
            {"message": "Book disaggregated successfully"}, status=status.HTTP_200_OK
        )
