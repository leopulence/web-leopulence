from .models import Clients

def ctx_dict(request):
    ctx = {}
    clients = Clients.objects.all()
    ctx["clients"] = clients
    return ctx

