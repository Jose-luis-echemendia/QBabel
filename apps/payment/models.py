from django.db import models
from apps.utils.models.models import BaseModel
from apps.book.models import Book

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

    def __str__(self):
        return f"{self.invoice_number} - {self.supplier_name}"

    class Meta:
        db_table = "PurchaseInvoices"
        managed = True
        verbose_name = "PurchaseInvoices"
        verbose_name_plural = "PurchasesInvoices"
        ordering = ("-created_at",)
