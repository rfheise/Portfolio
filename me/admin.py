from django.contrib import admin
from .models import Post, Link, FileUpload
# Register your models here.
admin.site.register(Post)
admin.site.register(Link)
admin.site.register(FileUpload)