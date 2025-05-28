from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book
from django.contrib.auth import get_user_model
from django.db import IntegrityError
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from django.core.files.uploadedfile import SimpleUploadedFile
from decimal import Decimal
from ..models import Item, Library


import inspect

User = get_user_model()


class LibraryModelTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="probando@gmail.com", user_name="testuser", password="testpass@123"
        )
        
        cls.library = cls.user.library

        cls.library_test = {
            "str": "library from probando@gmail.com",
            "user": cls.user,
            "total_items": 0,
        }

    def test_assign_library(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertEqual(self.user, self.library_test.get("user"))
        self.assertTrue(isinstance(self.user.library, Library))
        self.assertEqual(str(self.user.library), self.library_test.get("str"))
        self.assertEqual(
            self.user.library.total_items, self.library_test.get("total_items")
        )

    def test_library_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertEqual(self.library.user, self.user)
        self.assertEqual(self.library.total_items, 0)

    def test_library_str_representation(self):
        self.assertEqual(str(self.library), f"library from {self.user}")

    def test_library_meta_options(self):
        meta = Library._meta
        self.assertEqual(meta.db_table, "Library")
        self.assertEqual(meta.verbose_name, "Library")
        self.assertEqual(meta.verbose_name_plural, "Libraries")
        self.assertEqual(meta.ordering, ["-created_at"])


class ItemModelTest(BaseTest):
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
            isbn="1234567890123",
            title="Libro de Prueba",
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

    def test_item_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertEqual(self.item.library, self.library)
        self.assertEqual(self.item.book, self.book)
        self.assertFalse(self.item.is_filed)
        self.assertFalse(self.item.is_sold)

    def test_item_str_representation(self):
        self.assertEqual(str(self.item), f"{self.book} in {self.library}")

    def test_item_save_increments_total(self):
        initial_total = self.library.total_items
        Item.objects.create(
            library=self.library,
            book=Book.objects.create(
                isbn="1234567855123",
                author=self.user,
                title="Nueva Prueba",
                cover=self.cover_image,
                synopsis="Sinopsis de prueba",
                file=self.document,
                number_chapters=10,
                number_pages=200,
                lenguage="ES",
                price=Decimal("29.99"),
            ),
        )
        self.library.refresh_from_db()
        self.assertEqual(self.library.total_items, initial_total + 1)

    def test_item_delete_decrements_total(self):
        initial_total = self.library.total_items
        self.item.delete()
        self.library.refresh_from_db()
        self.assertEqual(self.library.total_items, initial_total - 1)

    def test_unique_together_constraint(self):
        with self.assertRaises(IntegrityError):
            Item.objects.create(library=self.library, book=self.book)

    def test_item_meta_options(self):
        meta = Item._meta
        self.assertEqual(meta.db_table, "Item")
        self.assertEqual(meta.verbose_name, "Item")
        self.assertEqual(meta.verbose_name_plural, "Items")
        self.assertEqual(meta.ordering, ["-created_at"])
        self.assertEqual(meta.unique_together, (("library", "book"),))
