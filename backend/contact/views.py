from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import ContactInfo
from .serializers import ContactInfoSerializer


@api_view(["GET"])
def contact_info(request):
    contact = ContactInfo.objects.first()

    if not contact:
        return Response(
            {"detail": "Contact information not found."},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = ContactInfoSerializer(contact)
    return Response(serializer.data)