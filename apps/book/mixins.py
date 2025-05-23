from rest_framework.exceptions import ValidationError
from apps.category.models import Category


class ValidateCategoryForBookMixin:
    def validate_categories(self, categories):
        if not categories:
            raise ValidationError({"categories": "This field is required."})

        if not isinstance(categories, list):
            raise ValidationError(
                {"categories": "This field must be a list of strings"}
            )

        from apps.category.enums import TypeCategory

        non_existent_categories = [
            category_uid
            for category_uid in categories
            if not Category.objects.filter(
                pk=category_uid, type=TypeCategory.book
            ).exists()
        ]
        if non_existent_categories:
            raise ValidationError(
                {"categories": f"Invalid categories: {non_existent_categories}"}
            )


class ValidateRegisterBookMixin:
    def validate_data(self, data):
        title = data.get("title", None)
        synopsis = data.get("synopsis", None)
        categories = data.get("categories", None)
        cover = data.get("cover", None)
        number_chapters = data.get("number_chapters", None)
        number_pages = data.get("number_pages", None)
        lenguage = data.get("lenguage", None)
        price = data.get("price", None)
        is_published = data.get("is_published", False)

        if not title:
            raise ValidationError({"title": "Title is required."})

        if not synopsis:
            raise ValidationError({"description": "Description is required."})
        if not categories:
            raise ValidationError({"categories": "Categories are required."})
        if not cover:
            raise ValidationError({"cover": "Cover is required."})
        if not number_chapters:
            raise ValidationError(
                {"number_chapters": "Number of chapters is required."}
            )
        if not number_pages:
            raise ValidationError({"number_pages": "Number of pages is required."})
        if not lenguage:
            raise ValidationError({"lenguage": "Lenguage is required."})
        if not price:
            raise ValidationError({"price": "Price is required."})
        if not isinstance(categories, list):
            raise ValidationError(
                {"categories": "This field must be a list of strings"}
            )

        return {
            "title": title,
            "author": self.request.user.pk,
            "synopsis": synopsis,
            "categories": categories,
            "cover": cover,
            "number_chapters": number_chapters,
            "number_pages": number_pages,
            "lenguage": lenguage,
            "price": price,
            "is_published": is_published,
        }


class CreateCoverBookMixin:
    def create_cover(self, cover, title):
        from apps.utils.serializers.serializers import ImageSerializer
        from apps.utils.enums import ImageTypes

        serializer = ImageSerializer(
            data={
                "image": cover,
                "type": ImageTypes.cover,
                "title": title,
                "registered_by": self.request.user.pk,
            }
        )
        serializer.is_valid(raise_exception=True)
        return self.perform_create(serializer)


class CreateFileBookMixin:
    def create_file(self, file, title):
        from apps.utils.serializers.serializers import DocumentSerializer
        from apps.utils.enums import DocumentTypes

        serializer = DocumentSerializer(
            data={
                "file": file,
                "type": DocumentTypes.PDF,
                "title": str(title),
                "registered_by": self.request.user.pk,
            }
        )
        serializer.is_valid(raise_exception=True)
        return self.perform_create(serializer)


class PrepareDataForCategoryBookMixin:
    def prepare_data_for_category_book(self, categories):
        return [{"category": category, "book": self.book.pk} for category in categories]
