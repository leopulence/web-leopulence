from .models import Colection, ColectionImage
from django.utils import timezone
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse, reverse_lazy
# Create your views here.

class ColectionListView(ListView):

    model = Colection

class ColectionDetailView(DetailView):

    model = Colection

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

class ColectionCreate(CreateView):
    model = Colection
    fields = ['title','content','order']
    success_url = reverse_lazy('colections:colections')

class ColectionUpdate(UpdateView):
    model = Colection
    fields = ['title','image','order']
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('colections:colections')
    def get_success_url(self):
        return reverse_lazy('colections:update',args=[self.object.id]) + "?ok"

class ColectionDelete(DeleteView):
    model = Colection
    success_url = reverse_lazy('colections:colections')
