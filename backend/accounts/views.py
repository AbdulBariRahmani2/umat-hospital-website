from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import AuditLog
from .serializers import RegisterSerializer, AdminUserCreateSerializer


class RegisterView(APIView):

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            return Response(
                {
                    "message": "User registered successfully.",
                    "user": {
                        "id": user.id,
                        "username": user.username,
                        "email": user.email,
                    },
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class LoginView(TokenObtainPairView):

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == status.HTTP_200_OK:
            username = request.data.get("username")

            try:
                user = User.objects.get(username=username)

                AuditLog.objects.create(
                    admin=user,
                    action="login",
                    target_user=user,
                    description=f"User {user.username} logged in.",
                )

            except User.DoesNotExist:
                pass

        return response


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser,
        })


class LogoutView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]

            token = RefreshToken(refresh_token)
            token.blacklist()

            user = request.user

            AuditLog.objects.create(
                admin=user,
                action="logout",
                target_user=user,
                description=f"User {user.username} logged out.",
            )

            return Response(
                {"message": "Logout successful."},
                status=status.HTTP_200_OK,
            )

        except Exception:
            return Response(
                {"error": "Invalid refresh token."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class AdminUserListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        users = User.objects.all().order_by("id")

        data = [
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "is_active": user.is_active,
                "is_staff": user.is_staff,
                "is_superuser": user.is_superuser,
            }
            for user in users
        ]

        return Response(data)

    def post(self, request):
        serializer = AdminUserCreateSerializer(
            data=request.data,
            context={"request": request},
        )

        if serializer.is_valid():
            user = serializer.save()

            return Response(
                {
                    "message": "User created successfully.",
                    "user": {
                        "id": user.id,
                        "username": user.username,
                        "email": user.email,
                        "is_active": user.is_active,
                        "is_staff": user.is_staff,
                        "is_superuser": user.is_superuser,
                    },
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class AdminUserActionView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, user_id):
        try:
            target_user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "User not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        if target_user.id == request.user.id:
            return Response(
                {"error": "You cannot change your own active status."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        is_active = request.data.get("is_active")

        if not isinstance(is_active, bool):
            return Response(
                {
                    "error": "is_active must be true or false."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        target_user.is_active = is_active
        target_user.save(update_fields=["is_active"])

        action = (
            "activate_user"
            if is_active
            else "deactivate_user"
        )

        action_text = (
            "activated"
            if is_active
            else "deactivated"
        )

        AuditLog.objects.create(
            admin=request.user,
            action=action,
            target_user=target_user,
            description=(
                f"Admin {request.user.username} "
                f"{action_text} user {target_user.username}."
            ),
        )

        return Response(
            {
                "message": (
                    f"User {target_user.username} "
                    f"{action_text} successfully."
                ),
                "user": {
                    "id": target_user.id,
                    "username": target_user.username,
                    "email": target_user.email,
                    "is_active": target_user.is_active,
                    "is_staff": target_user.is_staff,
                    "is_superuser": target_user.is_superuser,
                },
            },
            status=status.HTTP_200_OK,
        )

    def delete(self, request, user_id):
        try:
            target_user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "User not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        if target_user.id == request.user.id:
            return Response(
                {"error": "You cannot delete your own account."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        username = target_user.username

        AuditLog.objects.create(
            admin=request.user,
            action="delete_user",
            target_user=target_user,
            description=(
                f"Admin {request.user.username} "
                f"deleted user {username}."
            ),
        )

        target_user.delete()

        return Response(
            {
                "message": (
                    f"User {username} deleted successfully."
                )
            },
            status=status.HTTP_200_OK,
        )


class AdminAuditLogListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        logs = AuditLog.objects.select_related(
            "admin",
            "target_user",
        ).all()

        data = [
            {
                "id": log.id,
                "admin": log.admin.username if log.admin else None,
                "action": log.action,
                "target_user": (
                    log.target_user.username
                    if log.target_user
                    else None
                ),
                "description": log.description,
                "created_at": log.created_at,
            }
            for log in logs
        ]

        return Response(data)