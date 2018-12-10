from django.db import models

# Create your models here.
class Colection(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    content = models.CharField(max_length=300, verbose_name="Chamuyo",default="")
    image= models.ImageField(verbose_name="Portada", upload_to="colections")
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

class ColectionImage(models.Model):
    colection = models.ForeignKey(Colection, related_name="images",on_delete=models.CASCADE)
    image = models.ImageField(verbose_name="Fotos",upload_to="colections")

    class Meta:
        verbose_name = "imagen"
        verbose_name_plural = "imagenes"


