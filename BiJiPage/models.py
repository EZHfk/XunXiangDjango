from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

CATEGORY_CHOICE = [
    ('facetoface','面对面'),
    ('technology','科技'),
    ('finance','金融'),
    ('consulting','资询'),
    ('art','艺术'),
    ('manufacture','制造'),
    ('insurance','保险'),
    ('health','医疗'),
    ('media','传媒'),
    ('education','教育'),
    ('research','科研'),
    ('law','法律'),
    ('other','其他'),

]

class Post(models.Model):
    title = models.CharField(max_length = 200)
    abstract = models.TextField()
    URL = models.CharField(max_length = 200,default = 'https://')
    category = models.CharField(max_length = 20,choices = CATEGORY_CHOICE,default = 'technology')
    image = models.ImageField(default = 'default.jpg',upload_to='display_pic')
    
    date_publish = models.DateTimeField(default = timezone.now)
    author =models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title+'--'+self.category
    
    def get_tag(self):
        return CATEGORY_CHOICE[self.category]

    def get_absolute_url(self):
        return reverse('BIJI-Home')
    
    def filter_post(self,cat):
        return Post.objects.filter(category=cat)
# Create your models here.
