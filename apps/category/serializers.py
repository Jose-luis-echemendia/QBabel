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
        withparent = self.context.pop('withparent')
        if not withparent:
            return representation
        
        representation["children_categories"] = [
            for category in 
            Category.objects.filter(parent=representation.get("uid")) or instance.children.all()
        ]
        
        return representation