from django.db import models


class Service(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    short_description = models.TextField()
    overview = models.TextField()

    seo_title = models.CharField(max_length=200)
    seo_description = models.TextField()

    conditions = models.JSONField(default=list)
    treatments = models.JSONField(default=list)

    image = models.ImageField(upload_to="services/", blank=True, null=True)
    image_alt = models.CharField(max_length=255, blank=True)

    featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    ordering = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["ordering", "id"]

    def __str__(self):
        return self.title