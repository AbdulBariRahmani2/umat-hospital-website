from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "slug",
        "featured",
        "is_active",
        "ordering",
        "updated_at",
    )

    list_filter = (
        "featured",
        "is_active",
    )

    search_fields = (
        "title",
        "slug",
    )

    ordering = (
        "ordering",
        "id",
    )