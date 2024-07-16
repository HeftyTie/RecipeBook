from django.urls import path
from .views import get_recipes, get_recipe, RecipeAPIView

urlpatterns = [
    path('recipes', get_recipes, name='get_recipes'),
    path('recipe/<int:id>/', get_recipe, name='get_recipe'),
    path('manage-recipe', RecipeAPIView.as_view(), name='manage_recipe_no_id'),
    path('manage-recipe/<int:id>', RecipeAPIView.as_view(), name='manage_recipe_with_id')
]
