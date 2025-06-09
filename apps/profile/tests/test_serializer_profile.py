from django.db import IntegrityError
from django.contrib.auth import get_user_model
from apps.utils.tests.Basetests import BaseTest
from apps.profile.serializers import ProfileSerializer
from apps.profile.models import Profile
from apps.utils.models.models import GenericImage

import inspect

User = get_user_model()

# 2

class ProfileSerializerTest(BaseTest):

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="testuser@gmail.com", user_name="testuser", password="testing@123"
        )

        cls.profile = Profile.objects.create(
            user=cls.user.uid,
            avatar=GenericImage.objects.get(pk=GenericImage.DEFAULT_AVATAR_IMAGE_UUID),
        )
        
        cls.data = {
            "uid": str(cls.profile.uid),
            "avatar": str(cls.profile.avatar),
            "user": str(cls.profile.user)
        }

    def test_serialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        serializer = ProfileSerializer(self.profile).data
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

        serializer = ProfileSerializer(data=data)

        self.assertTrue(serializer.is_valid(), serializer.errors)

        user_instance = serializer.save()
        self.assertEqual(user_instance.email, data["email"])
        self.assertEqual(user_instance.user_name, data["user_name"])
        self.assertEqual(user_instance.is_premium, data["is_premium"])
        self.assertTrue(user_instance.check_password("juanPrueba@.0.."))


