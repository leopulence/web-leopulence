from django.urls import path
from .views import PagesDetailView, AboutDetailView

pages_patterns = ([
    path('', AboutDetailView.as_view(), name='about'),
    path('<int:pk>/<slug:slug>/', PagesDetailView.as_view(), name='page'),
], 'pages')