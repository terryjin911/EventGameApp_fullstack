from django.shortcuts import render

from rest_framework import generics
from .models import Entry, Score
from .serializers import EntrySerializer

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# 전체 응모리스트 데이터 제공 API 서비스 뷰


class EntryList(generics.ListCreateAPIView):
    queryset = Entry.objects.all()

    # 모델에 담긴 조회결과를 하기 설정한 직렬화 클래스를 통해 JSON포멧으로 변환한다.
    serializer_class = EntrySerializer


# # Detail View는 단일 건 조회하고 업데이트하고 삭제함
class EntryDetail(generics.RetrieveUpdateAPIView):
    queryset = Entry.objects.all()

    serializer_class = EntrySerializer



class EntryScore(generics.ListCreateAPIView):
    model = Entry

    serializer_class = EntrySerializer
    

    
