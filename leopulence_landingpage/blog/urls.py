from django.urls import path
from .views import PostListView
blog_patterns = ([
    #paths del blog
    path('', PostListView.as_view(), name="blog"),
    #path('category/<int:category_id>/', views.category, name="category")
], 'blog')