from django.contrib import admin
from .models import PurchaseInvoices

class PurchaseInvoicesAdmin(admin.ModelAdmin):
    list_display = (
        "book",
        "buyer",
        "profit",
        "writer_profit",
        "final_payment",
        "created_at",
    )
    search_fields = ("book__title", "buyer__username")
    

admin.site.register(PurchaseInvoices, PurchaseInvoicesAdmin)