from django.db import models

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

    def __str__(self):
        return f"{self.media_type}-{self.caption}"

class Link(models.Model):
    link = models.TextField()
    short = models.TextField()
    
    def __str__(self):
        return f"https://ryanfheise.com/{self.short}"

class FileUpload(models.Model):
    media = models.FileField(upload_to="files")
    route = models.TextField()
    
    def __str__(self):
        return f"https://ryanfheise.com/files/{self.route}"
    
def handler404(request, exception, template_name="404.html"):
    response = render_to_response(template_name)
    response.status_code = 404
    return response