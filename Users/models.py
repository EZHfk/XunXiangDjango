from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

IDENTITY_CHOICE = [
    ('LianXiSheng','练习生'),
    ('TechDep','技术部门')
]
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image = models.ImageField(default = 'default.jpg',upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} profile'
        
class UserInfo(User):
    identity = models.CharField(max_length = 20,choices = IDENTITY_CHOICE,default = 'LianXiSheng')
    profile_Image = models.ImageField(default = 'default_profile.jpg',upload_to='profile_pics')

    def get_absolute_url(self):
        return reverse('XUNXIANG-Home')
# Create your models here.
