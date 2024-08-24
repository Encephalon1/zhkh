from django.urls import path
from .views import *


urlpatterns = [
    path('api/', AnnouncementListAPI.as_view(), name='api')
]
