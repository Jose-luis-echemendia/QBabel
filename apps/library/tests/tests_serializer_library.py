from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book
from apps.library.models import Library, Item
from apps.library.serializers import LibrarySerializer, ItemSerializer
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth import get_user_model
from decimal import Decimal
import inspect

User = get_user_model()


class LibrarySerializerTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="probando@gmail.com", user_name="testuser", password="testpass@123"
        )
        cls.library = cls.user.library

        cls.cover_image = GenericImage.objects.create(
            image=SimpleUploadedFile("cover.jpg", b"content")
        )

        cls.document = GenericDocument.objects.create(
            file=SimpleUploadedFile("book.pdf", b"content")
        )

        cls.category = Category.objects.create(
            name="Ficción", description="Categoría de ficción"
        )

        cls.book = Book.objects.create(
            isbn="030567890123",
            title="Test Book",
            author=cls.user,
            cover=cls.cover_image,
            synopsis="Sinopsis de prueba",
            file=cls.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=Decimal("29.99"),
        )
        cls.item = Item.objects.create(library=cls.library, book=cls.book)

    def test_library_serialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        serializer = LibrarySerializer(instance=self.library)
        data = serializer.data

        self.assertEqual(data["user_details"]["user_name"], self.user.user_name)
        self.assertEqual(data["total_items"], 1)
        self.assertEqual(len(data["items"]), 1)
        self.assertNotIn("user", data)

    def test_read_only_fields(self):
        data = {"user": self.user.uid, "total_items": 10}  # Intento de actualización

        serializer = LibrarySerializer(instance=self.library, data=data)
        self.assertTrue(serializer.is_valid())
        updated_library = serializer.save()

        self.assertEqual(updated_library.total_items, 1)  # No debería cambiar


class ItemSerializerTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="probando@gmail.com", user_name="testuser", password="testpass@123"
        )
        cls.library = cls.user.library
        cls.cover_image = GenericImage.objects.create(
            image=SimpleUploadedFile("cover.jpg", b"content")
        )

        cls.document = GenericDocument.objects.create(
            file=SimpleUploadedFile("book.pdf", b"content")
        )

        cls.category = Category.objects.create(
            name="Ficción", description="Categoría de ficción"
        )
        cls.book = Book.objects.create(
            isbn="1234599890123",
            title="Test Book",
            author=cls.user,
            cover=cls.cover_image,
            synopsis="Sinopsis de prueba",
            file=cls.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=Decimal("29.99"),
        )
        cls.item = Item.objects.create(library=cls.library, book=cls.book)

    def test_item_serialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        serializer = ItemSerializer(instance=self.item)
        data = serializer.data

        self.assertEqual(data["book_details"]["title"], self.book.title)
        self.assertFalse(data["is_filed"])
        self.assertFalse(data["is_sold"])
        self.assertNotIn("library", data)
        self.assertNotIn("book", data)

    def test_item_deserialization(self):
        new_book = Book.objects.create(
            isbn="1234567890993",
            title="Test Book",
            author=self.user,
            cover=self.cover_image,
            synopsis="Sinopsis de prueba",
            file=self.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=Decimal("29.99"),
        )
        data = {
            "library": self.library.uid,
            "book": new_book.uid,
        }

        serializer = ItemSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        item = serializer.save()

        self.assertEqual(item.library, self.library)
        self.assertEqual(item.book, new_book)
        self.assertEqual(self.library.total_items, 2)

    def test_unique_together_validation(self):
        data = {
            "library": self.library.uid,
            "book": self.book.uid,
        }

        serializer = ItemSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_update_boolean_fields(self):
        data = {
            "library": self.library.uid,
            "book": self.book.uid,
            "is_filed": True,
            "is_sold": True,
        }

        serializer = ItemSerializer(instance=self.item, data=data)
        self.assertTrue(serializer.is_valid())
        updated_item = serializer.save()

        self.assertTrue(updated_item.is_filed)
        self.assertTrue(updated_item.is_sold)

    def test_invalid_relations(self):
        data = {
            "library": 9999,  # ID inexistente
            "book": self.book.uid,
        }

        serializer = ItemSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("library", serializer.errors)
