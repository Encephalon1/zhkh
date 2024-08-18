from django.db import models
from django.contrib.auth.models import User


class Announcement(models.Model):
    an_time = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    text = models.TextField()


class TenantRequest(models.Model):
    author = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField()


class ResponceToRequest(models.Model):
    ten_request = models.OneToOneField(TenantRequest, on_delete=models.CASCADE)
    text = models.TextField()
