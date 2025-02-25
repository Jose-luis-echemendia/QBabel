from apps.utils.serializers.abstract_serializers import AuditUserChangeSerializer, AbstractBaseSerializer, AbstractImageSerializer
from .models import Category

class CategorySerializer(AbstractBaseSerializer, AuditUserChangeSerializer, AbstractImageSerializer):
    
    class Meta:
        model = Category
        fields = AbstractBaseSerializer.Meta + [
            "name",
            "description",
            "parent"            
            ] + AuditUserChangeSerializer.Meta + AbstractImageSerializer.Meta
        
    