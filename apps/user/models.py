from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
    Group, 
    Permission
)
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from apps.utils.models.abstract_models import BaseModel
from django.utils.translation import gettext_lazy as _
from .validators import validate_password_strength
from .enums import RoleType

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("users must hace an email address")

        email = self.normalize_email(email)

        try:
            validate_email(email)
        except ValidationError:
            raise ValueError("Invalid email format")

        try:
            validate_password_strength(
                password, user_name=extra_fields.get("user_name", email)
            )
        except ValidationError as e:
            raise ValueError(e.messages)

        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)

        user.is_superuser = True
        user.is_staff = True

        user.save()
        return user
    
    def create_admin(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.role = RoleType.admin
        user.save()
        return user

class UserAccount(BaseModel, AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(Group, related_name="useraccount_groups", verbose_name=_("Groups"))
    user_permissions = models.ManyToManyField(Permission, related_name="useraccount_permissions", verbose_name=_("User Permissions"))
    email = models.EmailField(max_length=255, unique=True, verbose_name=_("Email"))
    user_name = models.CharField(max_length=255, unique=True, verbose_name=_("User Name"))
    is_premium = models.BooleanField(default=False, verbose_name=_("Is Premium"))
    is_active = models.BooleanField(default=True, verbose_name=_("Is Active"))
    is_superuser = models.BooleanField(default=False, verbose_name=_("Is Superuser"))
    is_staff = models.BooleanField(default=False, verbose_name=_("Is Staff"))
    role = models.CharField(verbose_name=_("Role"), max_length=20, choices=RoleType.choices, default=RoleType.user)
    
    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'User'
        managed = True
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        ordering = ("-created_at",)