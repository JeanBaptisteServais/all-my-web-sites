from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def site_web(request):
    return render(request, "site_web.html")

def projets(request):
    return render(request, "projets.html")

def conception(request):
    return render(request, "conception.html")

def visualisation(request):

    path = "/static/document/"
    dico = {"cv": path + "JeanBaptisteServais.pdf", 
            "motivation": path + "lettre-de-motivation.pdf", 
            "soluce": path + "Jb Servais produit final.pdf", 
            "zooning": path + "Zooning à fournir au client (document pour le client, n_est pas un document de présentation).pdf"}

    context = {"document" : dico["cv"]}

    if request.method == "POST":

        cv = request.POST.get("cv")
        motivation = request.POST.get("motivation")
        zooning = request.POST.get("zooning")
        soluce = request.POST.get("soluce")

        if cv:
            context["document"] = dico["cv"]
        elif motivation:
            context["document"] = dico["motivation"]
        elif zooning:
            context["document"] = dico["zooning"]
        elif soluce:
            context["document"] = dico["soluce"]

    return render(request, "visualisation.html", context)