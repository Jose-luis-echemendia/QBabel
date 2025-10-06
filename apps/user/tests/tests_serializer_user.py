from apps.utils.tests.Basetests import BaseTest
from django.contrib.auth import get_user_model
from apps.user.serializers import UserCreateSerializer

import inspect

User = get_user_model()

# 5

class UserSerializerTest(BaseTest):

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="testuser@gmail.com", user_name="testuser", password="testing@123"
        )

        cls.data = {
            "uid": str(cls.user.uid),
            "email": "testuser@gmail.com",
            "user_name": "testuser",
            "is_premium": False,
        }

    def test_serialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        serializer = UserCreateSerializer(self.user).data
        self.assertEqual(serializer, self.data)

    def test_deserialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        data = {
            "email": "testuser1@gmail.com",
            "user_name": "testuser1",
            "password": "juanPrueba@.0..",
            "is_premium": True,
        }

        serializer = UserCreateSerializer(data=data)

        self.assertTrue(serializer.is_valid(), serializer.errors)

        user_instance = serializer.save()
        self.assertEqual(user_instance.email, data["email"])
        self.assertEqual(user_instance.user_name, data["user_name"])
        self.assertEqual(user_instance.is_premium, data["is_premium"])
        self.assertTrue(user_instance.check_password("juanPrueba@.0.."))

    def test_missing_required_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        datas = [
            {
                # missing email field
                "user_name": "testuser1",
                "password": "juanPrueba@...",
                "is_premium": True,
            },
            {
                # missing password field
                "email": "testuser1@gmail.com",
                "user_name": "testuser1",
                "is_premium": True,
            },
        ]

        serializers = [UserCreateSerializer(data=data) for data in datas]

        for serializer in serializers:
            self.assertFalse(serializer.is_valid())
            if 'email' in serializer.errors:
                self.assertIn("email", serializer.errors)
            if 'password' in serializer.errors:
                self.assertIn("password", serializer.errors)

    def test_invalidad_data(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        
        datas = [
            {
                "email": "juan",
                "user_name": "testuser1",
                "password": "juanPrueba@...",
                "is_premium": True,
            },
            {
                "email": "testuser1@gmail.com",
                "user_name": "testuser1",
                "password": 1,
                "is_premium": True,
            },
        ]        
        
        serializers = [UserCreateSerializer(data=data) for data in datas]
        
        for serializer in serializers:
            self.assertFalse(serializer.is_valid())
            if "email" in serializer.errors:
                self.assertIn("email", serializer.errors)
            if "password" in serializer.errors:
                self.assertIn("password", serializer.errors)
        
    def test_invalidad_data_types(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        
        datas = [
            {
                "email": "juan",
                "user_name": 24,
                "password": "juanPrueba@...",
                "is_premium": True,
            },
            {
                "email": "testuser1@gmail.com",
                "user_name": "testuser1",
                "password": "dkd@!03...",
                "is_premium": "is premium",
            },
        ]        
        
        serializers = [UserCreateSerializer(data=data) for data in datas]
        
        for serializer in serializers:
            self.assertFalse(serializer.is_valid())
            if "user_name" in serializer.errors:
                self.assertIn("email", serializer.errors)
            if "is_premium" in serializer.errors:
                self.assertIn("is_premium", serializer.errors)
