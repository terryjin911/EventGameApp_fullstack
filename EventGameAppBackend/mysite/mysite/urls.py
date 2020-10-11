"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include, re_path

from entry.views import EntryList

# drf ( django rest framework )
from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from rest_framework.authtoken import views

schema_view = get_schema_view(
    openapi.Info(
        title="허걱스 swagger jagger 명세서까지는 열렸다^_^ㅋ",
        default_version='version 1',
        description="이벤트 응모리스트 어플리케이션 관리 OPEN API입니다.",
        terms_of_service="https://www.github.com/terryjin911",
        contact=openapi.Contact(email="kukukthang1@outlook.com"),
        license=openapi.License(name="라이센스는 또 뭐람^ㅇ^;"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny), #이쉐끼때문에 swagger 안들어가졌어ㅠ
)

# http://localhost:8000/swagger/
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/entry/', include('entry.urls')),
    
    # path('api/get_token/', views.obtain_auth_token),

    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger',
                                    cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/#', schema_view.with_ui('redoc',
                                        cache_timeout=0), name='schema-redoc'),
]
