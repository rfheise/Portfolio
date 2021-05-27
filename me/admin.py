from django.contrib import admin
from .models import Last, Post, Link, FileUpload, MLB
# Register your models here.
admin.site.register(Post)
admin.site.register(Link)
admin.site.register(FileUpload)
class MLBAdmin(admin.ModelAdmin):
    list_filter = ("out",)
admin.site.register(MLB, MLBAdmin)
admin.site.register(Last)