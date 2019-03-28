from django.contrib import admin
from .models import Clients

# Register your models here..


class ClientsAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('title',)

admin.site.register(Clients, ClientsAdmin)