from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Nombre", required=True, widget=forms.TextInput(
        attrs={'placeholder':'Escribe tu nombre', 'id':'contactinputname'}
    ))
    telefono = forms.IntegerField(label="Telefono", required=True, widget=forms.NumberInput(
        attrs={'placeholder':'Escribe tu telefono'}
    ))
    email = forms.EmailField(label="Email", required=True, widget=forms.EmailInput(
        attrs={'placeholder':'Escribe tu email'}
    ))
    content = forms.CharField(label="Contenido", required=True, widget=forms.Textarea(
        attrs={'rows':5,'placeholder':'Escribe tu mensaje'}
    ))