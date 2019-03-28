from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver

def custom_upload_to_portada(instance, filename, **kwargs):
    try:    
        old_instance = Colection.objects.get(pk=instance.pk)
        old_instance.image.delete()
        return 'colections/'+ filename
    except:
        return 'colections/'+ filename


# Create your models here.
class Colection(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    content = models.CharField(max_length=300, verbose_name="Chamuyo",default="")
    image= models.ImageField(verbose_name="Portada", upload_to=custom_upload_to_portada, null=True, blank=True)
    order = models.SmallIntegerField(verbose_name="Orden",default=0)
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    def get_all_images(self):
        return self.images.all()


    class Meta:
        verbose_name = "coleccion"
        verbose_name_plural = "colecciones"
        ordering = ['order','title']

    def __str__(self):
        return self.title

@receiver(post_delete, sender=Colection)
def submission_delete(sender, instance, **kwargs):
    instance.image.delete(False)

def custom_upload_to(instance, filename, **kwargs):
    try:
        old_instance = ColectionImage.objects.get(pk=instance.pk)
        old_instance.image.delete()
        return 'colections/'+ filename
    except:
        return 'colections/'+ filename      

class ColectionImage(models.Model):
    colection = models.ForeignKey(Colection, related_name="images",on_delete=models.CASCADE)
    image = models.ImageField(verbose_name="Fotos",upload_to=custom_upload_to, null=True, blank=True)

    class Meta:
        verbose_name = "imagen"
        verbose_name_plural = "imagenes"

@receiver(post_delete, sender=ColectionImage)
def submission_delete2(sender, instance, **kwargs):
    instance.image.delete(False)
