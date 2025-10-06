from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from django.contrib.auth import get_user_model

from apps.utils.tests.Basetests import BaseTest

import inspect

User = get_user_model()

# 16

class BasicAuthViewTestCase(APITestCase, BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="test@example.com",
            password="password123@",
            user_name="testuser",
            is_active=True,
        )
        cls.inactive_user = User.objects.create_user(
            email="inactive@example.com",
            password="password123@",
            user_name="inactive",
            is_active=False,
        )
        cls.url = reverse("basic-auth")

    def test_valid_credentials_returns_tokens(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "test@example.com", "password": "password123@"}
        response = self.client.post(self.url, data)
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        self.assertEqual(response.data["user_id"], self.user.uid)

    def test_invalid_credentials_returns_401(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "test@example.com", "password": "wrong"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(response.data["error"], "Invalid credentials")

    def test_inactive_user_returns_403(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "inactive@example.com", "password": "password123@"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(response.data["error"], "User account is inactive")

    def test_rate_limit_enforced(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "test@example.com", "password": "wrong"}
        for _ in range(5):
            self.client.post(self.url, data)

        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_429_TOO_MANY_REQUESTS)


class AdminAuthViewTestCase(APITestCase, BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.admin_user = User.objects.create_user(
            email="test1@example.com",
            password="admin123@",
            user_name="test1",
            is_active=True,
            role="admin",
        )
        cls.regular_user = User.objects.create_user(
            email="test2@example.com",
            password="user123@",
            user_name="test2",
            is_active=True,
            role=False,
        )
        cls.url = reverse("admin-auth")

    def test_admin_login_success(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "test1@example.com", "password": "admin123@"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)

    def test_non_admin_login_fails(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"email": "test2@example.com", "password": "user123@"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(response.data["error"], "Invalid credentials or not an admin")

    def test_inactive_admin_fails(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.admin_user.is_active = False
        self.admin_user.save()
        data = {"email": "admin1@example.com", "password": "admin123@"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(response.data["error"], "User account is inactive")


class CustomTokenRefreshViewTestCase(APITestCase, BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="test@example.com", password="password123@", is_active=True
        )
        refresh = RefreshToken.for_user(cls.user)
        cls.valid_refresh = str(refresh)
        cls.url = reverse("token-refresh")

    def test_valid_refresh_token_returns_new_tokens(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"refresh": self.valid_refresh}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)

    def test_invalid_refresh_token_returns_401(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"refresh": "invalid"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIn("error", response.data)

    def test_missing_refresh_token_returns_400(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        response = self.client.post(self.url, {})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["error"], "Refresh token is required")


class CustomJWTVerifyViewTestCase(APITestCase, BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="test@example.com", password="password123@", is_active=True
        )
        refresh = RefreshToken.for_user(cls.user)
        cls.valid_access = str(refresh.access_token)
        cls.valid_refresh = str(refresh)
        cls.url = reverse("token-verify")

    def test_valid_token_returns_valid(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"token": self.valid_access}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["message"], "Token is valid")

    def test_invalid_token_returns_error(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"token": "invalid"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(response.data["detail"], "Invalid token")

    def test_missing_token_returns_400(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        response = self.client.post(self.url, {})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["error"], "Token is required")


class LogoutViewTestCase(APITestCase, BaseTest):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="test@example.com", password="password123@", is_active=True
        )
        refresh = RefreshToken.for_user(cls.user)
        cls.refresh_token = str(refresh)
        cls.access_token = str(refresh.access_token)
        cls.url = reverse("logout")

    def test_logout_blacklists_token(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.client.credentials(HTTP_AUTHORIZATION=f"JWT {self.access_token}")
        data = {"refresh": self.refresh_token}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_205_RESET_CONTENT)

        # Verificar que el token está en la lista negra
        with self.assertRaises(TokenError):
            RefreshToken(self.refresh_token).verify()

    def test_logout_unauthenticated_denied(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {"refresh": self.refresh_token}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_invalid_token_returns_error(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.client.credentials(HTTP_AUTHORIZATION=f"JWT {self.access_token}")
        data = {"refresh": "invalid"}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
