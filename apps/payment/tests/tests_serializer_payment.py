from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth import get_user_model
from ..models import PurchaseInvoices
from ..serializers import PurchaseInvoicesSerializer
from decimal import Decimal
import inspect

User = get_user_model()


class PurchaseInvoicesSerializerTest(BaseTest):
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

        cls.invoice = PurchaseInvoices.objects.create(
            book=cls.book,
            buyer=cls.user,
            profit=Decimal("5.00"),
            writer_profit=Decimal("3.50"),
            final_payment=Decimal("25.00"),
        )

    def test_serializer_output(self):
        """Test estructura de datos de salida"""
        serializer = PurchaseInvoicesSerializer(self.invoice)
        data = serializer.data

        self.assertIn("book_details", data)
        self.assertIn("buyer_details", data)
        self.assertNotIn("book", data)
        self.assertNotIn("buyer", data)
        self.assertEqual(data["profit"], "5.00")
        self.assertEqual(data["final_payment"], "25.00")

    def test_required_fields(self):
        """Validación de campos obligatorios"""
        serializer = PurchaseInvoicesSerializer(
            data={"profit": "10.00", "writer_profit": "5.00"}
        )
        self.assertFalse(serializer.is_valid())
        self.assertIn("book", serializer.errors)
        self.assertIn("buyer", serializer.errors)

    def test_decimal_validation(self):
        """Test valores negativos en campos decimales"""
        test_cases = [
            {"profit": -1.00},
            {"writer_profit": -5.50},
            {"final_payment": -10.00},
        ]

        for case in test_cases:
            data = {"book": self.book.uid, "buyer": self.user.uid, **case}
            serializer = PurchaseInvoicesSerializer(data=data)
            self.assertFalse(serializer.is_valid())
            self.assertEqual(
                serializer.errors[list(case.keys())[0]][0].code, "min_value"
            )

    def test_create_invoice(self):
        """Test creación de factura válida"""
        user = User.objects.create_user(
            email="proband2o@gmail.com", user_name="test2user", password="testpass@123"
        )

        data = {
            "book": self.book.uid,
            "buyer": user.uid,
            "profit": 7.50,
            "writer_profit": 4.00,
            "final_payment": 30.00,
        }
        serializer = PurchaseInvoicesSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        invoice = serializer.save()

        self.assertEqual(invoice.profit, Decimal(data["profit"]))
        self.assertEqual(invoice.book.uid, data["book"])

    def test_update_invoice(self):
        """Test actualización de campos editables"""
        data = {"profit": "10.00", "final_payment": "35.00"}
        serializer = PurchaseInvoicesSerializer(self.invoice, data=data, partial=True)
        self.assertTrue(serializer.is_valid())
        updated = serializer.save()

        self.assertEqual(updated.profit, Decimal(data["profit"]))
        self.assertEqual(updated.final_payment, Decimal(data["final_payment"]))

    def test_read_only_fields(self):
        """Test campos no editables"""
        data = {
            "created_at": "2023-01-01",
            "book": self.book.uid,
            "buyer": self.user.uid,
        }
        serializer = PurchaseInvoicesSerializer(self.invoice, data=data)
        self.assertTrue(serializer.is_valid())
        instance = serializer.save()

        self.assertEqual(instance.created_at.strftime("%Y-%m-%d"), data["created_at"])

    def test_nested_relationships(self):
        """Test detalles anidados de relaciones"""
        serializer = PurchaseInvoicesSerializer(self.invoice)
        data = serializer.data

        # Verificar book_details
        self.assertEqual(data["book_details"]["title"], self.book.title)
        self.assertEqual(data["book_details"]["uid"], str(self.book.uid))

        # Verificar buyer_details
        self.assertEqual(data["buyer_details"]["email"], self.user.email)
        self.assertEqual(data["buyer_details"]["user_name"], self.user.user_name)
