from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book
from django.contrib.auth import get_user_model
from django.db import IntegrityError
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from django.core.files.uploadedfile import SimpleUploadedFile
from decimal import Decimal
from django.core.exceptions import ValidationError
from django.db import models
from ..models import PurchaseInvoices

# 7

import inspect

User = get_user_model()


class PurchaseInvoicesModelTest(BaseTest):
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

    def test_invoice_creation(self):
        """Test creación básica de factura"""
        invoice = PurchaseInvoices.objects.create(
            book=self.book,
            buyer=self.user,
            profit=Decimal("5.00"),
            writer_profit=Decimal("3.50"),
            final_payment=Decimal("15.00"),
        )

        self.assertEqual(invoice.book.price, Decimal("29.99"))
        self.assertEqual(invoice.buyer.email, "probando@gmail.com")

    def test_foreign_key_protection(self):
        """Test protección de relaciones"""
        invoice = PurchaseInvoices.objects.create(book=self.book, buyer=self.user)

        # Intentar eliminar libro con factura relacionada
        with self.assertRaises(models.ProtectedError):
            self.book.delete()

        # Intentar eliminar usuario comprador
        with self.assertRaises(models.ProtectedError):
            self.user.delete()

    def test_unique_constraint(self):
        """Test unicidad de compra por libro/usuario"""
        PurchaseInvoices.objects.create(book=self.book, buyer=self.user)

        with self.assertRaises(IntegrityError):
            PurchaseInvoices.objects.create(book=self.book, buyer=self.user)

    def test_decimal_fields_validation(self):
        """Test valores decimales negativos"""
        invoice = PurchaseInvoices(
            book=self.book,
            buyer=self.user,
            profit=Decimal("-1.00"),
            writer_profit=Decimal("-0.50"),
            final_payment=Decimal("-5.00"),
        )

        with self.assertRaises(ValidationError):
            invoice.full_clean()

    def test_meta_options(self):
        """Test configuración de metadatos"""
        self.assertEqual(PurchaseInvoices._meta.db_table, "PurchaseInvoices")
        self.assertEqual(PurchaseInvoices._meta.ordering[0], "-created_at")
        self.assertEqual(
            PurchaseInvoices._meta.verbose_name_plural, "PurchasesInvoices"
        )

    def test_string_representation(self):
        """Test representación en string"""
        invoice = PurchaseInvoices.objects.create(book=self.book, buyer=self.user)
        expected_str = f"{self.book.title} - {self.user.email} for 0.0 USD"
        self.assertEqual(str(invoice), expected_str)

    def test_default_values(self):
        """Test valores por defecto"""
        invoice = PurchaseInvoices.objects.create(book=self.book, buyer=self.user)
        self.assertEqual(invoice.profit, Decimal("0.00"))
        self.assertEqual(invoice.writer_profit, Decimal("0.00"))
