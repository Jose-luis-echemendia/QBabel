from django.db import models
from apps.utils.models.models import BaseModel
from apps.book.models import Book
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

User = get_user_model()


class Comment(BaseModel):
    """
    Model representing a comment on a book.
    """

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="comments",
        verbose_name="User",
    )
    book = models.ForeignKey(
        Book,
        on_delete=models.CASCADE,
        related_name="comments",
        verbose_name="Book",
    )
    comment = models.TextField(verbose_name="Content")
    rating = models.IntegerField(
        verbose_name="Rating",
        default=0,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(5),  # Asumiendo que el rating máximo es 5
        ],
    )

    like = models.PositiveIntegerField(default=0, verbose_name="Like")
    deslike = models.PositiveIntegerField(default=0, verbose_name="Dislike")

    def __str__(self):
        return f"{self.user.user_name} - {self.book.title} - {self.rating}"

    def get_slug_source_field(self):
        return "comment"

    @property
    def get_absolute_url(self):
        return f"/books/{self.book.uid}/comments/{self.uid}/"

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        ordering = ["-created_at"]
        # unique_together = ("user", "book")
