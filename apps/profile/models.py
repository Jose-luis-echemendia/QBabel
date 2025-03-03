from django.db import models
from apps.utils.models.models import BaseModel
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from apps.category.models import Category
from .enums import SexType

User = get_user_model()

class Profile(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True)
    age = models.PositiveIntegerField(blank=True, null=True)
    sex = models.CharField(max_length=1, blank=True, null=True, choices=SexType.choices, default=SexType.m)
    country = models.CharField(max_length=50, blank=True, null=True)
    number_phone = models.CharField(max_length=15, blank=True, null=True)
    literary_preferences = models.ManyToManyField(Category, related_name='literary_preferences', blank=True)

    def __str__(self):
        return self.user.username
    
    def get_slug_source_field(self):
        return 'user'
    
    class Meta:
        db_table = 'Profile'
        managed = True
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'
        ordering = ("-created_at",)


class BankAccount(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bank_accounts')
    bank = models.CharField(max_length=50)
    account_number = models.CharField(max_length=20)
    account_type = models.CharField(max_length=20)
    account_name = models.CharField(max_length=50)
    swift_code = models.CharField(max_length=20, blank=True, null=True)
    iban = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=50)
    currency = models.CharField(max_length=3)
    is_default = models.BooleanField(default=False)
    
    def get_slug_source_field(self):
        return 'user'

    def __str__(self):
        return f"{self.user.username} - {self.bank}"
    
    class Meta:
        db_table = 'BankAccount'
        managed = True
        verbose_name = 'Bank Account'
        verbose_name_plural = 'Bank Accounts'
        ordering = ("-created_at",)