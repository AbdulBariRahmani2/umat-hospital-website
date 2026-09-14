from django.urls import path

from .views import (
    RegisterView,
    LoginView,
    MeView,
    LogoutView,
    AdminUserListView,
    AdminUserActionView,
    AdminAuditLogListView,
)

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path(
        "register/",
        RegisterView.as_view(),
        name="register",
    ),

    path(
        "login/",
        LoginView.as_view(),
        name="login",
    ),

    path(
        "refresh/",
        TokenRefreshView.as_view(),
        name="token-refresh",
    ),

    path(
        "me/",
        MeView.as_view(),
        name="me",
    ),

    path(
        "logout/",
        LogoutView.as_view(),
        name="logout",
    ),

    path(
        "admin/users/",
        AdminUserListView.as_view(),
        name="admin-users",
    ),

    path(
        "admin/users/<int:user_id>/",
        AdminUserActionView.as_view(),
        name="admin-user-action",
    ),

    path(
        "admin/logs/",
        AdminAuditLogListView.as_view(),
        name="admin-logs",
    ),
]