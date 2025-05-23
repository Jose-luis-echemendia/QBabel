from django.db import models
from django.contrib.auth import get_user_model
from apps.utils.models.models import BaseModel
from apps.book.models import Book

User = get_user_model()


class PurchaseInvoices(BaseModel):
    """
    Model representing purchase invoices.
    """

    book = models.ForeignKey(
        Book,
        on_delete=models.PROTECT,
        related_name="purchase_invoices",
        verbose_name="Book",
    )
    buyer = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        related_name="purchase_invoices",
        verbose_name="Buyer",
    )

    profit = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00,
        verbose_name="Profit",
    )

    writer_profit = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00,
        verbose_name="Writer Profit",
    )

    final_payment = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00,
        verbose_name="Final Payment",
    )

    def __str__(self):
        return f"{self.invoice_number} - {self.supplier_name}"

    class Meta:
        db_table = "PurchaseInvoices"
        managed = True
        verbose_name = "PurchaseInvoices"
        verbose_name_plural = "PurchasesInvoices"
        ordering = ("-created_at",)
