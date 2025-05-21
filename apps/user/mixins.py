from rest_framework.exceptions import ValidationError


class ValidateRegisterUser:
    """
    Validates the data for user registration.
    """

    def validate_data(self, data):
        email = data.get("email", None)
        user_name = data.get("user_name", None)
        password = data.get("password", None)
        re_password = data.get("re_password", None)

        if not email:
            raise ValidationError("Email is required.")
        if not user_name:
            raise ValidationError("User name is required.")
        if not password:
            raise ValidationError("Password is required.")
        if not re_password:
            raise ValidationError("Re-password is required.")
        if not isinstance(email, str):
            raise ValidationError("Email must be a string.")
        if not isinstance(user_name, str):
            raise ValidationError("User name must be a string.")
        if not isinstance(password, str):
            raise ValidationError("Password must be a string.")
        if not isinstance(re_password, str):
            raise ValidationError("Re-password must be a string.")

        self.validate_email(email)
        self.validate_user_name(user_name)
        self.validate_password(password, re_password)
        self.validate_unique_user_name(user_name)

        return {
            "email": email,
            "user_name": user_name,
            "password": password,
            "re_password": re_password,
        }

    def validate_email(self, email):
        if not email:
            raise ValidationError("Email is required.")

        if "@" not in email or "." not in email.split("@")[-1]:
            raise ValidationError("Invalid email format.")

    def validate_password(self, password, re_password):
        if password != re_password:
            raise ValidationError("Passwords do not match.")

    def validate_user_name(self, user_name):
        if len(user_name) < 3:
            raise ValidationError("User name must be at least 3 characters long.")
        if len(user_name) > 20:
            raise ValidationError("User name must be at most 20 characters long.")
        if not user_name.isalnum():
            raise ValidationError("User name must be alphanumeric.")

    def validate_unique_user_name(self, user_name):
        from django.contrib.auth import get_user_model

        User = get_user_model()
        if User.objects.filter(user_name=user_name).exists():
            raise ValidationError("User name already exists.")
