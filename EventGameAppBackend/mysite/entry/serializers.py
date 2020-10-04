from rest_framework import serializers

from .models import Entry

# Entry 모델에 대한 직렬화 클래스 정의
class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        # 전부^_^
        fields = '__all__'