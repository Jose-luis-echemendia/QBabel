from apps.utils.tests.Basetests import BaseTest
from django.utils.text import slugify
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from apps.book.models import GenericImage, Category, Book
from ..models import Comment
from decimal import Decimal
from django.contrib.auth import get_user_model
from apps.category.models import Category
from django.core.files.uploadedfile import SimpleUploadedFile
from apps.utils.models.models import GenericImage, GenericDocument

import inspect

User = get_user_model()


class CommentModelTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        # Crear usuario
        cls.user = User.objects.create_user(
            username="testuser", email="test@example.com", password="password"
        )

        # Crear categoría
        cls.cover_image = GenericImage.objects.create(
            image=SimpleUploadedFile("cover.jpg", b"content")
        )

        cls.document = GenericDocument.objects.create(
            file=SimpleUploadedFile("book.pdf", b"content")
        )

        cls.category = Category.objects.create(
            name="Ficción", description="Categoría de ficción"
        )

        # Crear libro
        cls.book = Book.objects.create(
            isbn="1234567890123",
            author=cls.user,
            title="Libro de Prueba",
            cover=cls.cover_image,
            synopsis="Sinopsis de prueba",
            file=cls.document,
            number_chapters=10,
            number_pages=200,
            lenguage="ES",
            price=Decimal("29.99"),
        )

    def test_comment_creation_with_required_fields(self):
        """Test creación básica de comentario"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Excelente libro!", rating=5
        )
        self.assertEqual(comment.user, self.user)
        self.assertEqual(comment.book, self.book)
        self.assertEqual(comment.rating, 5)
        self.assertTrue(comment.slug)

    def test_foreign_key_cascade_deletion(self):
        """Test eliminación en cascada de relaciones"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Test cascade"
        )

        # Eliminar usuario
        self.user.delete()
        with self.assertRaises(Comment.DoesNotExist):
            Comment.objects.get(id=comment.id)

        # Eliminar libro
        comment = Comment.objects.create(
            user=User.objects.create_user(username="newuser"),
            book=self.book,
            comment="Otro comentario",
        )
        self.book.delete()
        with self.assertRaises(Comment.DoesNotExist):
            Comment.objects.get(id=comment.id)

    def test_unique_together_constraint(self):
        """Test usuario no puede comentar mismo libro dos veces"""
        Comment.objects.create(
            user=self.user, book=self.book, comment="Primer comentario"
        )
        with self.assertRaises(IntegrityError):
            Comment.objects.create(
                user=self.user, book=self.book, comment="Segundo comentario"
            )

    def test_str_representation(self):
        """Test representación en string"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Test str", rating=4
        )
        expected_str = f"{self.user.username} - {self.book.title} - 4"
        self.assertEqual(str(comment), expected_str)

    def test_get_absolute_url(self):
        """Test URL absoluto"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Test url"
        )
        expected_url = f"/books/{self.book.id}/comments/{comment.id}/"
        self.assertEqual(comment.get_absolute_url, expected_url)

    def test_default_values(self):
        """Test valores por defecto"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Test defaults"
        )
        self.assertEqual(comment.rating, 0)
        self.assertEqual(comment.like, 0)
        self.assertEqual(comment.deslike, 0)

    def test_ordering(self):
        """Test ordenamiento por fecha de creación"""
        comment1 = Comment.objects.create(
            user=self.user, book=self.book, comment="Primero"
        )
        comment2 = Comment.objects.create(
            user=self.user, book=self.book, comment="Segundo"
        )
        comments = Comment.objects.all()
        self.assertEqual(list(comments), [comment2, comment1])

    def test_slug_generation(self):
        """Test generación automática de slug"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Este es un comentario con slug"
        )
        self.assertEqual(comment.slug, slugify(comment.comment))

    def test_verbose_names(self):
        """Test nombres legibles"""
        self.assertEqual(Comment._meta.verbose_name, "Comment")
        self.assertEqual(Comment._meta.verbose_name_plural, "Comments")
        self.assertEqual(Comment._meta.get_field("user").verbose_name, "User")

    def test_rating_validation(self):
        """Test valores permitidos en rating"""
        comment = Comment(
            user=self.user, book=self.book, comment="Test rating", rating=-5
        )
        with self.assertRaises(ValidationError):
            comment.full_clean()

    def test_like_dislike_constraints(self):
        """Test valores negativos en likes/dislikes"""
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment="Test constraints"
        )

        comment.like = -1
        with self.assertRaises(ValidationError):
            comment.full_clean()

        comment.deslike = -1
        with self.assertRaises(ValidationError):
            comment.full_clean()

    def test_long_comment(self):
        """Test comentario extenso"""
        long_text = "a" * 5000
        comment = Comment.objects.create(
            user=self.user, book=self.book, comment=long_text
        )
        self.assertEqual(comment.comment, long_text)
