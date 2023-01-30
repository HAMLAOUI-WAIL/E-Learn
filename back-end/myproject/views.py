from django.http import JsonResponse
from .models import Annonce
from .serializers import AnnonceSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def annonces(request):
	data = Annonce.objects.all()
	serializer = AnnonceSerializer(data, many=True)
	return JsonResponse({'annonces': serializer.data})


@api_view(['GET', 'POST'])
def annonce_list(request, format=None):

    if request.method == 'GET':
        annonces = Annonce.objects.all()
        serializer = AnnonceSerializer(annonces, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = AnnonceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def annonce_detail(request, id, format=None):

    try:
        annonce = Annonce.objects.get(pk=id)
    except Annonce.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AnnonceSerializer(annonce)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AnnonceSerializer(annonce, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        annonce.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)