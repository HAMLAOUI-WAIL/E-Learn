from django.shortcuts import render
from django.http import JsonResponse
from django.views import generic
from django.views.decorators.csrf import csrf_exempt 
from rest_framework import generics
from rest_framework.generics import CreateAPIView,UpdateAPIView
from django.contrib.auth.forms import UserChangeForm
from rest_framework.views import APIView

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer,CreateUsrSerializer
from . import models
from django.shortcuts import get_object_or_404
# from django.contrib.auth.models import User
from rest_framework import viewsets, status

# Create your views here.
def getRoutes(request):
    routes=[   
        {
            'Endpoint':'/contact',
            'methode':'GET'
        },
        {
            'Endpoint':'/annonce/create/',
            'methode':'POST'
        },
        {
            'Endpoint':'/profile',
            'methode':'POST'
        },
        {
            'Endpoint':'/AjouterAnnonce',
            'methode':'GET'
        },
    ]
    return JsonResponse(routes ,safe=False)

class UserList(generics.ListCreateAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UserSerializer
    # def get(self,request):
    #     users = models.UTILISATEURS.objects.all()
    #     serializer = UserSerializer(users,many=True)
    #     return Response(serializer.data)
    
   
# class DataUserList(generics.ListCreateAPIView):
#     queryset = models.UTILISATEURS.objects.all()
#     serializer_class = UserSerializer
#     # def get(self):
#     #     users_id = self.kwargs['profile_id']
#     #     user=models.UTILISATEURS.objects.get(pk=users_id)
#     #     return models.UTILISATEURS.objects.filter(user=user)
       
    
class UserListDtail(generics.RetrieveUpdateAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UserSerializer
    
@api_view(['POST'])
def update_user(request, pk):
    item = models.UTILISATEURS.objects.get(pk=pk)
    data = UserSerializer(instance=item, data=request.data)
    print(item)
    print(data)
    if data.is_valid():
        data.save()
        print('the new object was saved')
        return Response(data.data)
    else:
        print('an error occured')
        return Response(status=status.HTTP_404_NOT_FOUND)

    
@api_view(['PATCH'])
def UserModifiy(request,pk):
    usr = models.UTILISATEURS.objects.filter(pk=pk)
    print(request)
    return Response()
    
# class UserCreateView(CreateAPIView):    
#     queryset = models.UTILISATEURS.objects.all()
#     serializer_class = UserSerializer

@csrf_exempt
def UserUpdateView(request):    
    first_name=request.POST('first_name')
    last_name=request.POST('last_name')
    email=request.POST('email')
    phoneNumber=request.POST('phoneNumber')
        






class CreateUsrView(APIView):
    serializer_class = CreateUsrSerializer
    
    def post(self,request,format=None):
        # user = get_object_or_404(models.UTILISATEURS, pk=pk)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.first_name
            last_name = serializer.data.last_name
            email = serializer.data.email
            phoneNumber = serializer.data.phoneNumber
            queryset = models.UTILISATEURS.objects.all()
            
            if queryset.exists():
                user = queryset[0]
                user.first_name = first_name
                user.last_name = last_name
                user.email = email
                user.phoneNumber = phoneNumber
                
                user.save(update_fields=['first_name','last_name','email','phoneNumber'])
            
            return Response(UserSerializer(user).data,status=status.HTTP_400_BAD_REQUEST)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
        



       
       
       
       
class UserEdirView(generic.CreateView):
    def get(self,request):
        users = models.UTILISATEURS.objects.all()
        serializer = UserSerializer(users,many=True)
        return Response(serializer.data)    
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UserSerializer

    def update(self, request, pk=None):
        user = get_object_or_404(models.UTILISATEURS, pk=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    