from django.contrib import admin

# Register your models here.
from main.models import User


@admin.register(User)
class User(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['username']}),
        (None, {'fields': ['name']}),
        (None, {'fields': ['email']}),
        (None, {'fields': ['img_profile']}),
        (None, {'fields': ['phone']}),
        (None, {'fields': ['password']}),
    ]