import datetime
from django.db import models
from django.utils import timezone

class Recipes(models.Model):
    author = models.CharField(max_length=50)
    passkey = models.CharField(max_length=50)
    header = models.CharField(max_length=100)
    last_update = models.DateTimeField("Date published", default=timezone.now)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    total_time = models.IntegerField()
    servings = models.IntegerField()
    equipment = models.JSONField()
    ingredients = models.JSONField()
    recipe = models.JSONField()

    def __str__(self):
        return self.header
