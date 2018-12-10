from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class Pages(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    subtitle = models.CharField(max_length=200, verbose_name="Subtítulo")
    content = RichTextField(verbose_name="Contenido")
    image= models.ImageField(verbose_name="Imagen", upload_to="pages")
    order = models.SmallIntegerField(verbose_name="Orden",default=0)
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Pagina"
        verbose_name_plural = "Paginas"
        ordering = ['order','title']

    def __str__(self):
        return self.title


class About(models.Model):
    content = RichTextField(verbose_name="Contenido")
    image= models.ImageField(verbose_name="Imagen", upload_to="pages")
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Principal"
        verbose_name_plural = "Principal"

    def __str__(self):
        return "Nosotros"
