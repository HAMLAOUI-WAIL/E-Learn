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
from rest_framework import viewsets, status
from django.shortcuts import render
from rest_framework import permissions
from .serializer import UTILISATEURSSerializer,FlatPagesSerializer,UTILISATEURSSerializer,CATEGORIESSerializer,ANNONCESSerializer
from django.http import JsonResponse
from django.contrib.flatpages.models import FlatPage
# from .models import Annonce
from .serializer import ANNONCESSerializer

# def annonces(request):
# 	data = Annonce.objects.all()
# 	serializer = AnnonceSerializer(data, many=True)
# 	return JsonResponse({'annonces': serializer.data})

@api_view(['GET', 'POST'])
def annonce_list(request, format=None):

    if request.method == 'GET':
        annonces = models.ANNONCES.objects.all()
        serializer = ANNONCESSerializer(annonces, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ANNONCESSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def annonce_detail(request, id, format=None):

    try:
        annonce = models.ANNONCES.objects.get(pk=id)
    except models.ANNONCES.DoesNotExist:
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


# Create your views here.
def getRoutes(request):
    routes=[   
#         {
#             'Endpoint':'/contact',
#             'methode':'GET'
#         },
#         {
#             'Endpoint':'/annonce/create/',
#             'methode':'POST'
#         },
#         {
#             'Endpoint':'/profile',
#             'methode':'POST'
#         },
#         {
#             'Endpoint':'/AjouterAnnonce',
#             'methode':'GET'
#         },
    ]
    return JsonResponse(routes ,safe=False)

class UserList(generics.ListCreateAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UserSerializer
    
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
    

class UTILISATEURSList(generics.ListCreateAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UTILISATEURSSerializer
    

class UTILISATEURSDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UTILISATEURSSerializer
    
    
@csrf_exempt
def utilisateur_login(request):
    email=request.POST['email']
    password=request.POST['password']
    utilisateurData=models.UTILISATEURS.objects.get(email=email,password=password)
    if utilisateurData :
        return JsonResponse({'bool':True})
    else :
        return JsonResponse({'bool':False})

class UTILISATEURSList(generics.ListCreateAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UTILISATEURSSerializer
    

class UTILISATEURSDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.UTILISATEURS.objects.all()
    serializer_class = UTILISATEURSSerializer
    
@csrf_exempt
def utilisateur_login(request):
    email=request.POST['email']
    password=request.POST['password']
    utilisateurData=models.UTILISATEURS.objects.get(email=email,password=password)
    if utilisateurData :
        return JsonResponse({'bool':True})
    else :
        return JsonResponse({'bool':False})

class FlatPagesList(generics.ListAPIView):
    queryset =FlatPage.objects.all()
    serializer_class = FlatPagesSerializer

class FlatPagesDetail(generics.RetrieveAPIView):
    queryset =FlatPage.objects.all()
    serializer_class = FlatPagesSerializer

class CATEGORIESList(generics.ListCreateAPIView):
    queryset = models.CATEGORIES.objects.all()
    serializer_class = CATEGORIESSerializer

class ANNONCESList(generics.ListCreateAPIView):
    queryset = models.ANNONCES.objects.all()
    serializer_class = ANNONCESSerializer

    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=self.request.GET['result']
            qs=models.ANNONCES.objects.all().order_by('-id')[:limit]
        
        
        if 'categorie' in self.request.GET:
            categorie=self.request.GET['categorie']
            qs= models.ANNONCES.objects.filter(modul_icontains = categorie) 
