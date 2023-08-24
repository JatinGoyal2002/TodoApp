from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import status
# Create your views here.

@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def CRUDItem(request, pk = None):
    if request.method == 'GET':
        if pk is not None:
            category = Item.objects.get(pk=pk)
            serializer = ItemSerializer(category)
            return Response(serializer.data)

        categories = Item.objects.all()
        serializer = ItemSerializer(categories, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = ItemSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data Created'}, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    if request.method == 'PUT':
        cat = Item.objects.get(pk=pk)
        serializer = ItemSerializer(cat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Complete Data Updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PATCH':
        cat = Item.objects.get(pk=pk)
        serializer = ItemSerializer(cat, data=request.data, partial= True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Partial Data Updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
      cat = Item.objects.get(pk=pk)
      cat.delete()
      return Response({'msg':'Data Deleted'})