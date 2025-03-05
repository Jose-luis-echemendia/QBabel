from apps.utils.serializers.abstract_serializers import AuditUserChangeSerializer, AbstractBaseSerializer, AbstractImageSerializer
from .models import Category

class CategorySerializer(AbstractBaseSerializer, AuditUserChangeSerializer, AbstractImageSerializer):
    
    class Meta:
        model = Category
        fields = AbstractBaseSerializer.Meta.fields + [
            "name",
            "description",
            "parent"            
            ] + AuditUserChangeSerializer.Meta.fields + AbstractImageSerializer.Meta.fields
        
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        withparent = self.context.get('withparent', False)
        
        if not withparent:
            return representation
        
        result = []

        for category in representation:
            print(category)
            if not category.parent:
                item = {}
                item["id"] = category.id
                item["name"] = category.name
                item["thumbnail"] = category.thumbnail.url
                item["sub_categories"] = []
                for cat in representation:
                    sub_item = {}
                    if cat.parent and cat.parent.id == category.id:
                        sub_item["id"] = cat.id
                        sub_item["name"] = cat.name
                        sub_item["thumbnail"] = cat.thumbnail.url
                        item["sub_categories"].append(sub_item)
                result.append(item)