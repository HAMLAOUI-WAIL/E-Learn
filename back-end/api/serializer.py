from rest_framework import serializers
from . import models
from django.contrib.flatpages.models import FlatPage

class UTILISATEURSSerializer(serializers.ModelSerializer):
    class Meta :
      model = models.UTILISATEURS
      fields =['id','first_name','last_name','email','password','phoneNumber']

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ['description', 'email', 'telephone','categorie','details','theme','lieu','lieu','file','tarif']        

class FlatPagesSerializer(serializers.ModelSerializer):
  class Meta:
    model = FlatPage
    fields=['id','title','content','url']

class CATEGORIESSerializer(serializers.ModelSerializer):
    class Meta :
      model = models.CATEGORIES
      fields =["namecat"]

class ANNONCESSerializer(serializers.ModelSerializer):
    class Meta :
      model = models.ANNONCES
      fields =["id","titre","rel_categorie","rel_wilaya","rel_module","rel_utilisateur",'contenu','tarifs']
      depth=1
      
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UTILISATEURS
        fields = ('id','first_name','last_name','email','password','phoneNumber')
        # extra_kwargs = {'password':{'write_only':True}}
        
    # def create(self,validated_data):
    #     user = models.UTILISATEURS(
    #         first_name = validated_data['first_name'],
    #         last_name = validated_data['last_name'],
    #         email = validated_data['email'],
    #         phoneNumber = validated_data['phoneNumber'],
    #     )    
        
    #     user.set_password(validated_data['password'])
    #     user.save()
       
    #    return user 
    
class CreateUsrSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UTILISATEURS   
        fields = ('first_name','last_name','email','phoneNumber')


class CreateUsrSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UTILISATEURS   
        fields = ('first_name','last_name','email','phoneNumber')
class UTILISATEURSSerializer(serializers.ModelSerializer):
    class Meta :
      model = models.UTILISATEURS
      fields =['id','first_name','last_name','email','password','phoneNumber']
