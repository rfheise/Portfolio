from django.contrib import admin
from .models import Last, Post, Link, FileUpload, MLB, Meme, Project, TechStack, QuickBlog, QuickSection, Christmas
# Register your models here.
admin.site.register(Post)
admin.site.register(Link)
admin.site.register(FileUpload)
class MLBAdmin(admin.ModelAdmin):
    list_filter = ("out",)
admin.site.register(MLB, MLBAdmin)
admin.site.register(Last)
admin.site.register(Meme)
admin.site.register(Project)
admin.site.register(TechStack)
admin.site.register(Christmas)
class QuickBlogAdmin(admin.ModelAdmin):
    list_display = ("__str__","url")
admin.site.register(QuickBlog, QuickBlogAdmin)
class QuickSectionAdmin(admin.ModelAdmin):
    list_filter = ("blog__title",)
    ordering = ('section_id',)
admin.site.register(QuickSection, QuickSectionAdmin)