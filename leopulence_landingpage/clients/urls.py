from django.urls import path
from .views import ClientsDetailView

clients_patterns = ([  
    path('<int:pk>/<slug:slug>/', ClientsDetailView.as_view(), name='singleclient'),
], 'clients')
