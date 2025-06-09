from apps.utils.tests.Basetests import BaseTest
from apps.book.models import Book
from apps.category.models import Category
from apps.utils.models.models import GenericImage, GenericDocument
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth import get_user_model
from decimal import Decimal
from ..models import Comment
from ..serializers import CommentSerializer

import inspect

User = get_user_model()

# 7

class CommentSerializerTest(BaseTest):
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

        cls.comment = Comment.objects.create(
            user=cls.user,
            book=cls.book,
            comment="Comentario inicial",
            rating=4,
            like=2,
            deslike=1,
        )

    def test_serializer_validation(self):
        """Test validación de campos requeridos"""
        required_fields = ["user", "book", "comment"]
        data = {
            "user": self.user.uid,
            "book": self.book.uid,
            "comment": "Test requeridos",
            "rating": 3,
        }

        # Verificar campos obligatorios
        for field in required_fields:
            test_data = data.copy()
            del test_data[field]
            serializer = CommentSerializer(data=test_data)
            self.assertFalse(serializer.is_valid())
            self.assertIn(field, serializer.errors)

    def test_rating_validation(self):
        """Test validación de rango de rating"""
        test_cases = [(-1, "min_value"), (6, "max_value")]

        for value, error_code in test_cases:
            data = {
                "user": self.user.uid,
                "book": self.book.uid,
                "comment": "Test rating",
                "rating": value,
            }
            serializer = CommentSerializer(data=data)
            self.assertFalse(serializer.is_valid())
            self.assertIn("rating", serializer.errors)
            self.assertEqual(serializer.errors["rating"][0].code, error_code)

    def test_like_dislike_validation(self):
        """Test valores negativos en likes/dislikes"""
        test_cases = [("like", -1), ("deslike", -1)]

        for field, value in test_cases:
            data = {
                "user": self.user.uid,
                "book": self.book.uid,
                "comment": "Test validación",
                "rating": 3,
                field: value,
            }
            serializer = CommentSerializer(data=data)
            self.assertFalse(serializer.is_valid())
            self.assertIn(field, serializer.errors)
            self.assertEqual(serializer.errors[field][0].code, "min_value")

    def test_write_only_fields(self):
        """Test campos write_only (user y book)"""
        serializer = CommentSerializer(self.comment)
        serialized_data = serializer.data

        self.assertNotIn("user", serialized_data)
        self.assertNotIn("book", serialized_data)

    def test_create_comment(self):
        """Test creación de comentario válido"""
        data = {
            "user": self.user.uid,
            "book": self.book.uid,
            "comment": "Nuevo comentario",
            "rating": 5,
            "like": 3,
            "deslike": 0,
        }
        serializer = CommentSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        comment = serializer.save()

        self.assertEqual(comment.comment, data["comment"])
        self.assertEqual(comment.rating, data["rating"])

    def test_update_comment(self):
        """Test actualización de comentario"""
        data = {
            "comment": "Comentario actualizado",
            "rating": 2,
            "like": 5,
            "deslike": 2,
        }
        serializer = CommentSerializer(self.comment, data=data, partial=True)
        self.assertTrue(serializer.is_valid())
        updated_comment = serializer.save()

        self.assertEqual(updated_comment.comment, data["comment"])
        self.assertEqual(updated_comment.like, data["like"])

    def test_read_only_fields(self):
        """Test campos read-only (id, fechas)"""
        data = {
            "id": "nuevo-id",
            "created_at": "2023-01-01",
            "user": self.user.uid,
            "book": self.book.uid,
            "comment": "Test campos read-only",
        }
        serializer = CommentSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        comment = serializer.save()

        self.assertNotEqual(comment.uid, data["id"])
        self.assertNotEqual(comment.created_at.strftime("%Y-%m-%d"), data["created_at"])
