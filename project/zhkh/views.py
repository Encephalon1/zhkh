from rest_framework import generics
from .serializers import *
from .models import *


class AnnouncementListAPI(generics.ListCreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
