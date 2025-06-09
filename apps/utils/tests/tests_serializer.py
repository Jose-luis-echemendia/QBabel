from django.contrib.auth import get_user_model
from django.test import Client
from django.core.files.uploadedfile import SimpleUploadedFile
from apps.utils.enums import ImageTypes
from apps.utils.models.models import GenericImage
from apps.utils.serializers import ImageSerializer
from .Basetests import BaseTest
from PIL import Image

import inspect, tempfile

User = get_user_model()

# 4

class ImageSerializerTest(BaseTest):

    @classmethod
    def setUpTestData(cls) -> None:

        cls.client = Client()
        cls.user = User.objects.create_superuser(
            email="testuser@gmail.com",
            user_name="testuser",
            password="tes.123@",
        )
        cls.client.login(email="testuser", password="tes.123@")

        cls.data = {
            "alt": "test",
            "title": "test",
            "caption": "test",
            "order": 0,
            "type": ImageTypes.category,
            "image": "/home/jose/Escritorio/Work/QBabel/core/media/avatar_default.png",
            "registered_by": cls.user,
        }

        cls.img = GenericImage(**cls.data)
        cls.img.save(user=cls.user)
        cls.data["registered_by"] = str(cls.user.uid)
        cls.data.pop("image")

    def test_serialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        serializer = ImageSerializer(self.img).data
        serializer.pop("uid")
        serializer.pop("created_at")
        serializer.pop("updated_at")
        imgURL = serializer.pop("image")
        slug = serializer.pop("slug")
        self.assertEqual(serializer, self.data)
        self.assertEqual(slug, "test")
        self.assertIn("/media/blog/categories/image", imgURL)

    def test_deserialization(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with tempfile.NamedTemporaryFile(suffix=".jpg") as temp_file:
            image = Image.new("RGB", (100, 100))
            image.save(temp_file, format="JPEG")
            temp_file.seek(0)
            image_file = SimpleUploadedFile(
                temp_file.name, temp_file.read(), content_type="image/jpeg"
            )

        self.data["image"] = image_file
        serializer = ImageSerializer(data=self.data, context={"user": self.user})

        self.assertTrue(serializer.is_valid(), serializer.errors)

        img_instance = serializer.save()
        self.assertEqual(img_instance.alt, self.data["alt"])
        self.assertEqual(img_instance.title, self.data["title"])
        self.assertEqual(img_instance.type, self.data["type"])
        self.assertEqual(img_instance.registered_by, self.user)
        # un test para imagen falta aqui

    def test_missing_required_fields(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        datas = [
            {
                # missing registered_by
                "alt": "test",
                "title": "test",
                "order": 0,
                "type": ImageTypes.category,
                "image": "/home/jose/Escritorio/Work/QBabel/core/media/avatar_default.png",
            }
        ]
        # missing image
        datas.append(self.data)

        serializers = [ImageSerializer(data=data) for data in datas]

        for serializer in serializers:
            self.assertFalse(serializer.is_valid())
            if "registered_by" in serializer.errors:
                self.assertIn("registered_by", serializer.errors)
            if "image" in serializer.errors:
                self.assertIn("image", serializer.errors)

    def test_invalidad_data(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.data["registered_by"] = "any user"

        datas = [
            self.data,
            {
                "alt": "test",
                "title": "test",
                "order": 0,
                "type": "any type",
                "image": "/home/jose/Escritorio/Work/QBabel/core/media/avatar_default.png",
                "registered_by": self.user,
            },
            {
                "alt": 1,
                "title": "test",
                "order": 0,
                "type": ImageTypes.category,
                "image": "/home/jose/Escritorio/Work/QBabel/core/media/avatar_default.png",
                "registered_by": self.user,
            },
        ]

        serializers = [ImageSerializer(data=data) for data in datas]

        for serializer in serializers:
            self.assertFalse(serializer.is_valid())
            if "registered_by" in serializer.errors:
                self.assertIn("registered_by", serializer.errors)
            if "type" in serializer.errors:
                self.assertIn("type", serializer.errors)
            if "alt" in serializer.errors:
                self.assertIn("alt", serializer.errors)
