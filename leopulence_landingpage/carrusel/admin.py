from django.contrib import admin
from .models import Carrusel

# Register your models here.
class CarruselAdmin(admin.ModelAdmin):
    readonly_fields = ('created','updated')

admin.site.register(Carrusel, CarruselAdmin)