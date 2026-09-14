from django.contrib import admin
from .models import AuditLog


@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "admin",
        "action",
        "target_user",
        "created_at",
    )

    list_filter = (
        "action",
        "created_at",
    )

    search_fields = (
        "admin__username",
        "target_user__username",
        "description",
    )

    readonly_fields = (
        "admin",
        "action",
        "target_user",
        "description",
        "created_at",
    )

    ordering = ("-created_at",)