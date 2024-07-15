from rest_framework import serializers
from .models import Recipes

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'author', 'header', 'last_update', 'prep_time', 'cook_time', 'total_time', 'servings', 'equipment', 'ingredients', 'recipe']