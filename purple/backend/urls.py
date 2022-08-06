from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CurationList, CurationDetail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', CurationList.as_view()),
    path('curation/<int:pk>', CurationDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)