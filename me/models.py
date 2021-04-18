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
    # def format_media(self):
    #     return f"""<video height="400" controls>
    #             <source src="{self.media.url}" type="video/mp4">
    #             An Error Has Occured Loading Video
    #             </video>"""