from django.db import models

class Annonce(models.Model):
	description = models.TextField()
	email = models.EmailField()
	telephone = models.CharField(max_length=20)
	Date = models.DateField("", auto_now_add=True)
	categorie = models.CharField(max_length=50)
	details = models.CharField(max_length=50)
	theme = models.CharField(max_length=50)
	lieu = models.CharField(max_length=200)
	File = models.ImageField(upload_to=None, null=True, blank=True)
	tarif=models.CharField(max_length=50)

	def __str__(self):
		return self.name