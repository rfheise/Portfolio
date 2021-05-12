from typing import ContextManager
from django.db import models
from django.contrib.auth.hashers import make_password
# Create your models here.
class Post(models.Model):
    caption = models.TextField(blank = True, default = "")
    date = models.DateTimeField()
    media = models.FileField(blank = True, default = "",upload_to="posts")
    media_type = models.CharField(max_length=10, choices= [
        ("link","link"),
        ("video","video"),
        ("image","image"),
        ("","blank")
    ],blank = True,default = "")
    link = models.TextField(blank = True, default = "")
    link_short = models.TextField(blank = True, default = "")

    def __str__(self):
        return f"{self.media_type}-{self.caption}"

class Link(models.Model):
    link = models.TextField()
    short = models.TextField()
    show = models.BooleanField(default = False)
    def __str__(self):
        return f"https://ryanfheise.com/{self.short}"
class FileManager(models.Manager):
    def delete(self):
        for obj in self.get_queryset():
            obj.delete()
class FileUpload(models.Model):
    media = models.FileField(upload_to="files")
    route = models.TextField()
    def __str__(self):
        return f"https://ryanfheise.com/files/{self.route}"
    def delete(self, using=None, keep_parents=False):
        if self.media:
            self.media.delete()
        super().delete(using=using, keep_parents=keep_parents)

# class HiddenFile(models.Model):
#     media = models.TextField()
#     route = models.TextField()
#     password = models.TextField(default = "",blank = True)
#     self_destruct = models.BooleanField(default = False)
#     objects = FileManager()
#     #on save hash password
#     def save(self):
#         #will hash password everytime so will have to re-enter password
#         #on saves to admin console saves me a few lines of code though
#         self.password = make_password(self.password)
#         super(FileUpload, self).save()
#     #delete file when object is delted
#     def delete(self, using=None, keep_parents=False):
#         self.removeFile()
#         super.delete(using=using, keep_parents=keep_parents)
#     #generates response objects that forces file download
#     def fileResponse(self):
#         response = HttpResponse("An Error Has Occured")
#         response.status_code = 500
#         with open(self.path()) as f:
#             data = f.read()
#             response = HttpResponse(data, content_type = "application/octet-stream")
#             response['Content-Disposition'] = f'attachment; filename="{filed.media}"'
#             response.status_code = 200

def handler404(request, exception, template_name="404.html"):
    response = render_to_response(template_name)
    response.status_code = 404
    return response