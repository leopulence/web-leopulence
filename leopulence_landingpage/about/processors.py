from .models import Pages

def ctx_dict(request):
    ctx = {}
    pages = Pages.objects.all()
    ctx["pages_list"] = pages
    return ctx

