from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'', views.home, name="home"),
    path(r'about', views.about, name="about"),
    path(r'equipe', views.equipe, name="equipe"),
    path(r'carte/', include('carte.urls')),
    path(r'reservation/', include('reservation.urls')),
]+  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
