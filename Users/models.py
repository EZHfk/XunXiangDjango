from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.db.models.signals import post_save
from django.dispatch import receiver

IDENTITY_CHOICE = [
    ('LianXiSheng','练习生'),
    ('TechDep','技术部门')
]
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank = True)
    identity = models.CharField(max_length = 20,choices = IDENTITY_CHOICE,default = 'LianXiSheng')
    profile_Image = models.ImageField(default = 'default_profile.jpg',upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} profile'

    def get_identity(self):
        for pair in IDENTITY_CHOICE:
            if pair[0]==self.identity:
                return pair[1]

@receiver(post_save,sender=User)
def create_profile(sender,instance,created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save,sender=User)
def save_profile(sender,instance,**kwargs):
    instance.profile.save()
# Create your models here.
