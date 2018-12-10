from .models import Post

def ctx_dict(request):
    ctx = {}
    try:
        ctx["novedad"] = Post.objects.all().first()
    except:
        pass
    return ctx