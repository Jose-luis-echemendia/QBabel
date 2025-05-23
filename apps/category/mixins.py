
class CreateImageCategoryMixin:
    
    def create_image(self, data, *args, **kwargs):
        from apps.utils.serializers.serializers import ImageSerializer

        serializer = ImageSerializer(data=data, context={"user": self.request.user})
        serializer.is_valid(raise_exception=True)
        return self.perform_create(serializer)
