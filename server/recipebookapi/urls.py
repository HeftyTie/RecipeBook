from django.urls import path
from .views import get_recipes, get_recipe

urlpatterns = [
    path('recipes', get_recipes, name='get_recipes'),
    path('recipe/<int:id>/', get_recipe, name='get_recipe')
]
