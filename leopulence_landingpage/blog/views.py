from .models import Post
from django.views.generic.list import ListView
from django.urls import reverse, reverse_lazy
# Create your views here.

class PostListView(ListView):

    model = Post