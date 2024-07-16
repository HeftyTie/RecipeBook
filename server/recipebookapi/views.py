# views.py
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Recipes as Recipe
from .serializers import RecipeSerializer, DeleteRecipeSerializer, ModifyRecipeSerializer

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

class RecipeAPIView(APIView):
    def post(self, request):
        serializer = ModifyRecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Recipe added successfully."}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        recipe = Recipe.objects.get(id=id)
        serializer = ModifyRecipeSerializer(recipe, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Recipe updated successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        serializer = DeleteRecipeSerializer(data=request.data)
        if serializer.is_valid():
            passkey = serializer.validated_data.get('passkey')

            recipe = Recipe.objects.get(id=id)

            if recipe.passkey != passkey:
                return Response({"message": "Unauthorized. Incorrect passkey."}, status=status.HTTP_401_UNAUTHORIZED)

            recipe.delete()
            return Response({"message": "Recipe deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)