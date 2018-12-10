from django.contrib import admin
from .models import Pages, About
# Register your models here.
# Register your models here.
class PagesAdmin(admin.ModelAdmin):
    readonly_fields = ('created','updated')
class AboutAdmin(admin.ModelAdmin):
    readonly_fields = ('created','updated')

admin.site.register(Pages, PagesAdmin)
admin.site.register(About, AboutAdmin)