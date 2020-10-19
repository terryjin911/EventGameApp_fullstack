
from django.urls import path
from entry import views


urlpatterns = [
    # /api/entry/ 전체 데이터를 가져오고, 얘가 등록처리를 함
    path('', views.EntryList.as_view()),

    # # /api/entry/5
    path('<int:pk>/', views.EntryList.as_view),
    path('<int>/', views.EntryScore.as_view),
]
