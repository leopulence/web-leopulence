from .models import Clients
from django.utils import timezone
from django.views.generic.detail import DetailView
from django.urls import reverse, reverse_lazy
# Create your views here.



class ClientsDetailView(DetailView):

    model = Clients

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context


