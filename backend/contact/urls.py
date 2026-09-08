from django.urls import path
from .views import contact_info

urlpatterns = [
    path("", contact_info, name="contact-info"),
]