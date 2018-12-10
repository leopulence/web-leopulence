from django.shortcuts import render
from carrusel.models import Carrusel
# Create your views here.
def home(request):
    carrusel = Carrusel.objects.all()
    return render(request, "core/home.html",{'carrusel':carrusel})

