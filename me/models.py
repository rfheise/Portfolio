from typing import ContextManager
from django.db import models
from django.contrib.auth.hashers import make_password
from django.db.models.fields import related
from django.utils import timezone
from django.contrib.auth.models import User
from uuid import uuid4
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
    count = models.IntegerField(default = 0)
    authenticate = models.BooleanField(default = False)
    def __str__(self):
        return f"https://ryanfheise.com/{self.short}"
class FileManager(models.Manager):
    def delete(self):
        for obj in self.get_queryset():
            obj.delete()
class FileUpload(models.Model):
    media = models.FileField(upload_to="files")
    route = models.TextField()
    objects = FileManager()
    def __str__(self):
        return f"https://ryanfheise.com/files/{self.route}"
    def delete(self, using=None, keep_parents=False):
        if self.media:
            self.media.delete()
        super().delete(using=using, keep_parents=keep_parents)
class MLB(models.Model):
    team = models.TextField()
    out = models.BooleanField(default = False)
    winner = models.ForeignKey(User, on_delete = models.CASCADE, blank = True, null = True, default = "")
    def __str__(self):
        return self.team
class Last(models.Model):
    team = models.ForeignKey(MLB,on_delete=models.CASCADE)
    date = models.DateTimeField(default = timezone.now)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    def __str__(self):
        return f"{self.user} {self.team}"
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

class Meme(models.Model):
    image = models.ImageField(upload_to="memes")
    caption = models.TextField(blank = True, default = "")
    date = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.caption

class Blog(models.Model):
    title = models.CharField(max_length=100)
    route = models.CharField(max_length=256, unique = True)
    uuid = models.UUIDField(default = uuid4, unique = True)
    logo = models.ImageField(upload_to = "projects")
    tagline = models.CharField(max_length = 256)

class Project(Blog):
    difficulty = models.TextField(choices = [
        ("Large","Large"),
        ("Medium","Medium"),
        ("Short","Short")
    ])
    coolness = models.FloatField()
    projectStart = models.DateField()
    projectEnd = models.DateField()
    link = models.TextField(default = "", blank = True)
    tech = models.ManyToManyField("TechStack")
    def __str__(self):
        return self.title
    def dateFormat(date):
        return date.strftime("%B %Y")
    #format for start date
    def startFormat(self):
        return Project.dateFormat(self.projectStart)
    #format for end date
    def endFormat(self):
        now = timezone.now().date()
        #sets end date to present if start date has occured
        # and end date is in the future
        if self.projectEnd > now and self.projectStart < now:
            return "Present"
        return Project.dateFormat(self.projectEnd)


class TechStack(models.Model):
    image = models.ImageField(upload_to = "tech_stack")
    name = models.TextField()
    link = models.TextField()
    def __str__(self):
        return self.name

class Comments(models.Model):
    blog = models.ForeignKey(Blog, on_delete = models.CASCADE)
    name = models.CharField(max_length = 256)
    comment = models.TextField()

#for nft christmas gift with giftcard
class Christmas(models.Model):
    identifier = models.TextField()
    password = models.TextField()
    code = models.TextField()

class QuickBlog(models.Model):
    uuid = models.UUIDField(default = uuid4)
    title = models.TextField()
    image = models.ImageField(upload_to = "quick_blog")
    views = models.IntegerField(default = 0)
    date = models.DateTimeField(default = timezone.now)
    show = models.BooleanField(default = True)
    def readableDate(self):
        return self.date.strftime("%B %d, %Y")
    def __str__(self):
        return self.title
    def url(self):
        return f"https://ryanfheise.com/react/quick_blog/{self.uuid}"
    def sections(self):
        return self.section.all().order_by("section_id")
        
class QuickSection(models.Model):
    blog = models.ForeignKey(QuickBlog, on_delete=models.CASCADE, related_name = "section")
    type = models.CharField(max_length = 256, choices = [
        ("image","image"),
        ("link","link"),
        ("text","text")
    ])
    value = models.TextField()
    header = models.CharField(max_length=256, blank = True)
    section_id = models.IntegerField(default = 0)
    def __str__(self):
        return f"{self.blog.title} {self.type} {self.section_id}"