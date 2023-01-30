from rest_framework import serializers
from . import models

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
