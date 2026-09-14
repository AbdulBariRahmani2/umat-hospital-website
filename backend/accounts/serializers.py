from django.contrib.auth.models import User
from rest_framework import serializers
from .models import AuditLog


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )

        return user


class AdminUserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    role = serializers.ChoiceField(
        choices=["user", "staff", "superuser"],
        write_only=True
    )

    class Meta:
        model = User
        fields = ["username", "email", "password", "role"]

    def create(self, validated_data):
        role = validated_data.pop("role")

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email", ""),
            password=validated_data["password"],
        )

        if role == "staff":
            user.is_staff = True

        elif role == "superuser":
            user.is_staff = True
            user.is_superuser = True

        user.save()

        admin_user = self.context["request"].user

        AuditLog.objects.create(
            admin=admin_user,
            action="create_user",
            target_user=user,
            description=f"Created user {user.username} with role {role}.",
        )

        return user