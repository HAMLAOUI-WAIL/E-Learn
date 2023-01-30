from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class CATEGORIES(models.Model): 
    namecat = models.CharField(max_length=50)


class WILAYAS(models.Model):    
    wilaya = models.CharField(max_length=50)
    img = models.ImageField(upload_to='wilaya',null=True,blank=True)


class MODULES(models.Model):
    module = models.CharField(max_length=50)

class UTILISATEURS(models.Model):
    # id = models.IntegerField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(default=False) 
    password = models.CharField(max_length=100)
    phoneNumberRegex = RegexValidator(regex = r"^\+?1?\d{8,15}$")
    phoneNumber = models.CharField(validators = [phoneNumberRegex], max_length = 16, unique = True)

class ANNONCES(models.Model):
     titre = models.CharField(max_length=20,null=True)
     
     rel_utilisateur =models.ForeignKey(UTILISATEURS, null=True, on_delete=models.SET_NULL)

    #  primaire college lycee
     rel_categorie = models.ForeignKey(CATEGORIES, null=True, on_delete=models.SET_NULL)

    #  Lieu de l'annonce
     rel_wilaya = models.ForeignKey(WILAYAS, null=True, on_delete=models.SET_NULL)

     rel_module = models.ForeignKey(MODULES, null=True, on_delete=models.SET_NULL)
    #  description
     contenu = models.TextField()
    #  tarif
     tarif = models.IntegerField()
        

class MESSAGES(models.Model):
    
    objet = models.CharField(max_length=20)
   
    rel_utilisateur =models.ForeignKey(UTILISATEURS, null=True, on_delete=models.SET_NULL)
    contenu = models.TextField()
    
    
 
