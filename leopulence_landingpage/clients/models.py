from django.db import models
from ckeditor.fields import RichTextField
from django.db.models.signals import post_delete
from django.dispatch import receiver

def custom_upload_to_portada(instance, filename, **kwargs):
    try:    
        old_instance = Clients.objects.get(pk=instance.pk)
        old_instance.image.delete()
        return 'clients/'+ filename
    except:
        return 'clients/'+ filename


# Create your models here.
class Clients(models.Model):
    title = models.CharField(max_length=200, verbose_name="Nombre")
    description = models.CharField(max_length=300, verbose_name="Descripción",default="")
    content = RichTextField(verbose_name="Contenido")
    image= models.ImageField(verbose_name="Portada", upload_to=custom_upload_to_portada, null=True, blank=True)
    order = models.SmallIntegerField(verbose_name="Orden",default=0)
    created= models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated= models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")
    

    def get_all_images(self):
        return self.images.all()


    class Meta:
        verbose_name = "cliente"
        verbose_name_plural = "clientes"
        ordering = ['order','title']

    def __str__(self):
        return self.title

@receiver(post_delete, sender=Clients)
def submission_delete(sender, instance, **kwargs):
    instance.image.delete(False)


