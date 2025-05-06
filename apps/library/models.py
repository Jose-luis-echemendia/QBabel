from django.db import models
from apps.utils.models.models import BaseModel
from apps.book.models import Book
from django.contrib.auth import get_user_model


User = get_user_model()


class Library(BaseModel):
    """
    Model representing a library.
    """

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="libraries"
    )
    total_items = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"library from {self.user}"

    def get_slug_source_field(self):
        return "user"

    class Meta:
        db_table = "Library"
        managed = True
        verbose_name = "Library"
        verbose_name_plural = "Libraries"
        ordering = ("-created_at",)


class Item(BaseModel):
    """
    Model representing an item in the library.
    """

    library = models.ForeignKey(Library, on_delete=models.CASCADE, related_name="items")
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="items")
    is_filed = models.BooleanField(default=False)
    is_sold = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.book} in {self.library}"

    def get_slug_source_field(self):
        return "book"

    def save(self, *args, **kwargs):
        library = self.library
        library.total_items += 1
        library.save()
        return super().save(*args, **kwargs)

    class Meta:
        db_table = "Item"
        managed = True
        verbose_name = "Item"
        verbose_name_plural = "Items"
        ordering = ("-created_at",)
        unique_together = ("library", "book")
