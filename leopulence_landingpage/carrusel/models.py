from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver

def custom_upload_to(instance, filename):
    try:
        old_instance = Carrusel.objects.get(pk=instance.pk)
        old_instance.image.delete()
        return 'carrusel/'+ filename
    except:
        return 'carrusel/'+ filename
# Create your models here.
class Carrusel(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    image= models.ImageField(verbose_name="Imagen", upload_to=custom_upload_to)
    order = models.SmallIntegerField(verbose_name="Orden",default=0)
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Carrusel"
        verbose_name_plural = "Carrusel"
        ordering = ['order']

    def __str__(self):
        return self.title

@receiver(post_delete, sender=Carrusel)
def submission_delete(sender, instance, **kwargs):
    instance.image.delete(False)