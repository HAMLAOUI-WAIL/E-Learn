from django.contrib import admin

# Register your models here.
from .models import WILAYAS
from .models import UTILISATEURS
from .models import MODULES
from .models import CATEGORIES
from .models import MESSAGES
from .models import ANNONCES


admin.site.register(MESSAGES)
admin.site.register(ANNONCES)
admin.site.register(CATEGORIES)
admin.site.register(WILAYAS)
admin.site.register(MODULES)
admin.site.register(UTILISATEURS)