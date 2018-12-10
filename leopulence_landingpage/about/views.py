from django.shortcuts import render
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from .models import Pages, About
from django.utils import timezone
# Create your views here.
def about(request):
    return render(request, "about/about.html")

class PagesDetailView(DetailView):

    model = Pages

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context


class AboutDetailView(ListView):

    model = About