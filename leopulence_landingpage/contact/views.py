from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ContactForm
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def contact(request):
    
    contact_form = ContactForm()
    if request.method == "POST":
        contact_form = ContactForm(data=request.POST)
        if contact_form.is_valid():
            name = request.POST.get('name','')
            telefono = request.POST.get('telefono','')
            email = request.POST.get('email','')
            content = request.POST.get('content','')
            #si salio bien redireccionamos


            try:
                #email.send()
                send_mail(
                'Nuevo mensaje de contacto',
                'De {} <{}>\n\nEscribió:\n\n{}\n\nTelefono:{}'.format(name,email,content,telefono),
                'no-contestar@gmail.com',
                ['opulence.altacostura@gmail.com'],
                fail_silently=False
                )
                return redirect(reverse('contact')+"?ok")
            except:
                return redirect(reverse('contact')+"?fail")
            

    return render(request, "contact/contact.html",{'form':contact_form})