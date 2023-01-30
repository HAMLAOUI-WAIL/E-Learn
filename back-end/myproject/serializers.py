from rest_framework import serializers
from .models import Annonce

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ['description', 'email', 'telephone','categorie','details','theme','lieu','lieu','file','tarif']