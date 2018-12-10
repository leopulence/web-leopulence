from .models import Colection

def ctx_dict(request):
    ctx = {}
    colections = Colection.objects.all()
    ctx["colections"] = colections
    colections = Colection.objects.first()
    ctx["last_colection"] = colections
    return ctx

