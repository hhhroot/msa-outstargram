from django.contrib import admin

# Register your models here.
from main.models import User


@admin.register(User)
class User(admin.ModelAdmin):
    pass
