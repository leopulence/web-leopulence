from django.db import models

# Create your models here.
class Carrusel(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    image= models.ImageField(verbose_name="Imagen", upload_to="carrusel")
    order = models.SmallIntegerField(verbose_name="Orden",default=0)
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Carrusel"
        verbose_name_plural = "Carrusel"
        ordering = ['order']

    def __str__(self):
        return self.title