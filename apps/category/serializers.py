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
        print(representation)
        print(withparent)
        if not withparent:
            return representation
        
        results = []

        for category in representation:
            item = {}
            item["uid"] = category.uid
            item["name"] = category.name
            item["image"] = category.image
            item["description"] = category.description
            item["children_categories"] = []
            
            children_categories = Category.objects.filter(parent=category.uid) or category.children.all()
            for cat in children_categories:
                sub_item = {}
                sub_item["uid"] = cat.uid
                sub_item["name"] = cat.name
                sub_item["description"] = cat.description
                sub_item["image"] = cat.image
                item["children_categories"].append(sub_item)
            results.append(item)
            
        return results