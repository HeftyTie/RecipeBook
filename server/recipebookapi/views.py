# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Recipes as Recipe
from .serializers import RecipeSerializer

@api_view(['GET'])
def get_recipes(request):
    recipes = Recipe.objects.order_by('-last_update')[:60]
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_recipe(request, id=None):
    if id is not None:
        try:
            recipe = Recipe.objects.get(id=id)
            serializer = RecipeSerializer(recipe)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Recipe.DoesNotExist:
            return Response({'message': 'Recipe not found.'}, status=status.HTTP_404_NOT_FOUND)
    else:
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    