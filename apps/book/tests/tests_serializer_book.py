from django.core.files.uploadedfile import SimpleUploadedFile
from apps.book.models import Book, CategoryBook
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from apps.utils.tests.Basetests import BaseTest
from django.contrib.auth import get_user_model
from ..serializers import BookSerializer, CategoryBookSerializer
import inspect

User = get_user_model()

# 8

class BookSerializerTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()

        # Crear usuario autor
        cls.author = User.objects.create_user(
            email="author@test.com", user_name="probando", password="testpass123@"
        )

        # Crear recursos requeridos
        cls.cover_image = GenericImage.objects.create(
            image=SimpleUploadedFile("cover.jpg", b"content")
        )
        cls.document = GenericDocument.objects.create(
            file=SimpleUploadedFile("book.pdf", b"content")
        )

        # Crear categoría
        cls.category = Category.objects.create(
            name="Ficción", description="Categoría de ficción"
        )

        # Crear libro de prueba
        cls.book = Book.objects.create(
            isbn="1234567890123",
            author=cls.author,
            title="Libro de Prueba",
            cover=cls.cover_image,
            synopsis="Sinopsis de prueba",
            file=cls.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=29.99,
        )

        # Crear relación categoría-libro
        cls.category_book = CategoryBook.objects.create(
            book=cls.book, category=cls.category
        )

    def test_serializer_valid_data(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        valid_data = {
            "isbn": "9876543210987",
            "author": self.author.uid,
            "title": "Nuevo Libro",
            "cover": self.cover_image.uid,
            "synopsis": "Nueva sinopsis",
            "file": self.document.uid,
            "number_chapters": 15,
            "number_pages": 300,
            "lenguage": "EN",
            "price": 39.99,
        }

        serializer = BookSerializer(data=valid_data)
        self.assertTrue(serializer.is_valid())

        book = serializer.save()
        self.assertEqual(book.title, "Nuevo Libro")
        self.assertEqual(book.author.uid, self.author.uid)

    def test_serializer_missing_required_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        invalid_data = {"title": "Libro Incompleto", "price": 19.99}

        serializer = BookSerializer(data=invalid_data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("isbn", serializer.errors)
        self.assertIn("author", serializer.errors)
        self.assertIn("cover", serializer.errors)

    def test_serializer_read_only_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        serializer = BookSerializer(self.book)

        data = serializer.data

        # Verificar campos de solo lectura
        self.assertIn("author_details", data)
        self.assertIn("cover_details", data)
        self.assertIn("file_details", data)
        self.assertIn("category_book", data)
        self.assertIn("is_discount_active", data)
        self.assertIn("discount_percentage", data)

        # Verificar que los campos write-only no están presentes
        self.assertNotIn("author", data)
        self.assertNotIn("cover", data)
        self.assertNotIn("file", data)

    def test_method_fields_content(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        serializer = BookSerializer(self.book)

        # Probando get_is_discount_active
        self.assertIsInstance(serializer.data["is_discount_active"], bool)

        # Probando get_discount_percentage
        self.assertIsInstance(serializer.data["discount_percentage"], float)

        # Probando get_category_book
        self.assertIsInstance(serializer.data["category_book"], list)
        self.assertEqual(len(serializer.data["category_book"]), 1)
        self.assertEqual(
            serializer.data["category_book"][0]["name"], self.category.name
        )

    def test_update_method(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        updated_data = {
            "title": "Título Actualizado",
            "price": 49.99,
            "number_pages": 250,
        }

        serializer = BookSerializer(self.book, data=updated_data, partial=True)
        self.assertTrue(serializer.is_valid())

        updated_book = serializer.save()
        self.assertEqual(updated_book.title, "Título Actualizado")
        from decimal import Decimal
        self.assertEqual(updated_book.price, Decimal(49.99))
        self.assertEqual(updated_book.number_pages, 250)


class CategoryBookSerializerTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()

        # Crear libro y categoría
        cls.author = User.objects.create_user(
            email="author@test.com", password="testpass123@"
        )
        cls.book = Book.objects.create(
            isbn="1234567890123",
            author=cls.author,
            title="Libro Test",
            number_pages=100,
            price=19.99,
        )
        cls.category = Category.objects.create(
            name="Terror", description="Categoría de terror"
        )

        # Crear relación categoría-libro
        cls.category_book = CategoryBook.objects.create(
            book=cls.book, category=cls.category
        )

    def test_serializer_valid_data(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        valid_data = {"book": self.book.uid, "category": self.category.uid}

        serializer = CategoryBookSerializer(data=valid_data)
        self.assertTrue(serializer.is_valid())

        category_book = serializer.save()
        self.assertEqual(category_book.book.uid, self.book.uid)
        self.assertEqual(category_book.category.uid, self.category.uid)

    def test_serializer_details_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        serializer = CategoryBookSerializer(self.category_book)

        data = serializer.data

        self.assertIn("book_details", data)
        self.assertIn("category_details", data)

        # Verificar datos del libro
        self.assertEqual(data["book_details"]["title"], self.book.title)
        self.assertEqual(data["book_details"]["price"], str(self.book.price))

        # Verificar datos de la categoría
        self.assertEqual(data["category_details"]["name"], self.category.name)
        self.assertEqual(
            data["category_details"]["description"], self.category.description
        )

    def test_required_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        invalid_data = {"book": self.book.uid}
        serializer = CategoryBookSerializer(data=invalid_data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("category", serializer.errors)
