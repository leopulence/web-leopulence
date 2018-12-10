from django.urls import path
from .views import ColectionListView, ColectionDetailView, ColectionCreate, ColectionUpdate, ColectionDelete

colections_patterns = ([
    path('', ColectionListView.as_view(), name='colections'),
    path('<int:pk>/<slug:slug>/', ColectionDetailView.as_view(), name='singlecolection'),
    path('create/', ColectionCreate.as_view(), name='create'),
    path('update/<int:pk>/', ColectionUpdate.as_view(), name='update'),
    path('delete/<int:pk>/', ColectionDelete.as_view(), name='delete'),
], 'colections')