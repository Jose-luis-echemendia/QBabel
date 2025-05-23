class CreateImagePublicationMixin:
    def create_image(self, image, title):
        from apps.utils.serializers.serializers import ImageSerializer
        from apps.utils.enums import ImageTypes

        serializer = ImageSerializer(
            data={
                "image": image,
                "type": ImageTypes.blog,
                "title": title,
                "registered_by": self.request.user.pk,
            }
        )
        serializer.is_valid(raise_exception=True)
        return self.perform_create(serializer)
