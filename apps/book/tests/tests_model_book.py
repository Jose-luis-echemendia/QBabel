from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from django.core.files.uploadedfile import SimpleUploadedFile
from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book, CategoryBook
from django.contrib.auth import get_user_model
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument

import inspect

User = get_user_model()


class BookModelTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.author = User.objects.create_user(
            email="author@test.com", user_name="probando", password="testpass123@"
        )

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
            author=cls.author,
            title="Libro de Prueba",
            cover=cls.cover_image,
            synopsis="Sinopsis de prueba",
            file=cls.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=Decimal("29.99"),
        )

        cls.category_book = CategoryBook.objects.create(
            book=cls.book, category=cls.category
        )

    def test_book_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertEqual(self.book.title, "Libro de Prueba")
        self.assertEqual(self.book.author.email, "author@test.com")
        self.assertEqual(self.book.price, Decimal("29.99"))
        self.assertEqual(self.book.lenguage, "ES")

    def test_book_string_representation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertEqual(str(self.book), "Libro de Prueba")

    def test_is_free_property(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.book.price = Decimal("0.00")
        self.assertTrue(self.book.is_free)
        self.assertFalse(self.book.is_paid)

    def test_is_paid_property(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.book.price = Decimal("15.00")
        self.assertTrue(self.book.is_paid)
        self.assertFalse(self.book.is_free)

    def test_discount_inactive(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.book.discount_percentage = Decimal("10.00")
        self.book.discount_start_date = timezone.now() + timedelta(days=1)
        self.book.discount_end_date = timezone.now() + timedelta(days=10)
        self.book.save()
        self.assertFalse(self.book.is_discount_active())
        self.assertEqual(self.book.get_discounted_price(), self.book.price)

    def test_discount_active(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.book.discount_percentage = Decimal("20.00")
        self.book.discount_start_date = timezone.now() - timedelta(days=1)
        self.book.discount_end_date = timezone.now() + timedelta(days=1)
        self.book.save()
        self.assertTrue(self.book.is_discount_active())
        expected_price = self.book.price - (Decimal("20.00") / 100 * self.book.price)
        self.assertEqual(self.book.get_discounted_price(), expected_price)

    def test_categorybook_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertEqual(str(self.category_book), "Libro de Prueba - Ficción")
        self.assertEqual(self.category_book.book, self.book)
        self.assertEqual(self.category_book.category, self.category)

    def test_unique_category_book(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        with self.assertRaises(Exception):
            CategoryBook.objects.create(book=self.book, category=self.category)

    def test_book_get_slug_source_field(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertEqual(self.book.get_slug_source_field(), "title")

    def test_categorybook_get_slug_source_field(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertEqual(self.category_book.get_slug_source_field(), "book")



class CategoryBookModelTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.author = User.objects.create_user(
            email="author@test.com", user_name="autor", password="testpass123@"
        )

        cls.cover = GenericImage.objects.create(
            image=SimpleUploadedFile("cover.jpg", b"image content")
        )
        cls.document = GenericDocument.objects.create(
            file=SimpleUploadedFile("book.pdf", b"pdf content")
        )

        cls.category = Category.objects.create(
            name="Terror", description="Categoría de terror"
        )

        cls.book = Book.objects.create(
            isbn="9876543210987",
            author=cls.author,
            title="El libro del terror",
            cover=cls.cover,
            synopsis="Una historia espeluznante",
            file=cls.document,
            number_chapters=5,
            number_pages=150,
            lenguage="ES",
            price=Decimal("9.99"),
        )

        cls.category_book = CategoryBook.objects.create(
            book=cls.book,
            category=cls.category,
        )

    def test_categorybook_creation(self):
        self.assertEqual(self.category_book.book.title, "El libro del terror")
        self.assertEqual(self.category_book.category.name, "Terror")

    def test_categorybook_str_representation(self):
        expected_str = "El libro del terror - Terror"
        self.assertEqual(str(self.category_book), expected_str)

    def test_categorybook_get_slug_source_field(self):
        self.assertEqual(self.category_book.get_slug_source_field(), "book")

    def test_unique_categorybook_constraint(self):
        with self.assertRaises(Exception):
            CategoryBook.objects.create(
                book=self.book,
                category=self.category,
            )