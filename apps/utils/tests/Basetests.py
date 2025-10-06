from django.test import TestCase

class BaseTest(TestCase):

    def _get_test_method_name(self, method_name) -> str:
        class_name = self.__class__.__name__
        return f"executing test to the method {method_name} of the class {class_name}"

