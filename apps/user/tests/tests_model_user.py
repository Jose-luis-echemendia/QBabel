from django.db import IntegrityError
from apps.utils.tests.Basetests import BaseTest
from django.contrib.auth import get_user_model

import inspect

User = get_user_model()


class UserModelTest(BaseTest):

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="testuser@gmail.com", user_name="testuser", password="testing@123"
        )

    def test_user_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        from apps.user.enums import RoleType

        self.assertTrue(self.user.is_user)
        self.assertEqual(self.user.role, RoleType.user)
        self.assertEqual(self.user.email, "testuser@gmail.com")
        self.assertEqual(self.user.is_premium, False)
        self.assertEqual(self.user.user_name, "testuser")
        self.assertTrue(self.user.check_password("testing@123"))
        self.assertTrue(self.user.is_user)
        self.assertFalse(self.user.is_superuser)
        self.assertFalse(self.user.is_staff)

    def test_superuser_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        superuser = User.objects.create_superuser(
            email="superusertest@gmail.com", password="t@03kdkd!"
        )
        self.assertTrue(superuser.is_superuser)
        self.assertTrue(superuser.is_staff)
        self.assertFalse(superuser.is_staff_business)
        self.assertTrue(superuser.check_password("t@03kdkd!"))
        self.assertEqual(superuser.email, "superusertest@gmail.com")

    def test_adminuser_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        superuser = User.objects.create_admin(
            email="superusertest@gmail.com", password="t@03kdkd!"
        )
        self.assertFalse(superuser.is_superuser)
        self.assertFalse(superuser.is_staff)
        self.assertTrue(superuser.is_staff_business)
        self.assertTrue(superuser.check_password("t@03kdkd!"))
        self.assertEqual(superuser.email, "superusertest@gmail.com")

    def test_authoruser_creation(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        from apps.user.enums import RoleType

        author = User.objects.create_user(
            email="author@gmail.com", password="t@03kdkd!", role=RoleType.author
        )

        self.assertTrue(author.is_author)
        self.assertEqual(author.role, RoleType.author)
        self.assertFalse(author.is_superuser)
        self.assertFalse(author.is_staff)
        self.assertTrue(author.check_password("t@03kdkd!"))
        self.assertEqual(author.email, "author@gmail.com")

    def test_user_str(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertEqual(str(self.user), "testuser@gmail.com")

    def test_email_required(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(
                email="", user_name="testuser", password="testuser@123"
            )

    def test_invalidad_email(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(email="juan", password="@pepito213...")

    def test_invalidad_password_less_8_characters(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(email="jua3n@gmail.com", password="@p")

    def test_invalidad_password_missing_special_characters(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(
                email="jua3n@gmail.com", password="123juangarcia234"
            )

    def test_invalidad_password_only_number(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(email="jua3n@gmail.com", password="2333333333")

    def test_invalidad_password_only_character(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(
                email="jua3n@gmail.com", password="pepitoelquepica"
            )

    def test_invalidad_password_similar_username(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(ValueError):
            User.objects.create_user(
                email="jua3n@gmail.com",
                user_name="juanGarcía",
                password="juanGarcía123@...",
            )

    def test_username_equals_email_if_missing(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        user = User.objects.create_user(
            email="testusername@gmail.com", password="testuser@123"
        )
        self.assertEqual(user.get_username(), user.email)

    def test_get_username(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertEqual(self.user.get_username(), "testuser@gmail.com")

    def test_is_premium_property(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertFalse(self.user.is_premium)
        self.user.is_premium = True
        self.user.save()
        self.assertTrue(self.user.is_premium)

    def test_user_update(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.user.email = "newemail@gmail.com"
        self.user.save()
        self.assertEqual(User.objects.get(pk=self.user.uid).email, "newemail@gmail.com")

    def test_user_deletion(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        user_id = self.user.uid
        self.user.delete()
        with self.assertRaises(User.DoesNotExist):
            User.objects.get(pk=user_id)

    def test_user_is_staff(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        self.assertFalse(self.user.is_staff)
        self.user.is_staff = True
        self.user.save()
        self.assertTrue(self.user.is_staff)

    def test_user_is_superuser(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))
        self.assertFalse(self.user.is_superuser)
        self.user.is_superuser = True
        self.user.save()
        self.assertTrue(self.user.is_superuser)

    def test_duplicate_email(self):
        test = inspect.currentframe().f_code.co_name
        print(self._get_test_method_name(test))

        with self.assertRaises(IntegrityError):
            User.objects.create_user(
                email="testuser@gmail.com",
                user_name="anotheruser",
                password="anotherpass@123",
            )
