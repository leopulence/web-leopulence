from django.contrib import admin
from .models import Colection, ColectionImage

# Register your models here..
class ColectionImageInline(admin.TabularInline):
    model = ColectionImage
    extra = 1

class ColectionAdmin(admin.ModelAdmin):
    inlines = [ ColectionImageInline,]
    readonly_fields = ('created', 'updated')
    list_display = ('title',)

admin.site.register(Colection, ColectionAdmin)