from django.conf import settings
from django.db import models
class Car(models.Model):
    'Generated Model'
    brand = models.CharField(max_length=100,)
    model = models.CharField(max_length=100,)
    year = models.IntegerField()
    price = models.IntegerField()
    description = models.TextField()
