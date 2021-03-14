from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

IDENTITY_CHOICE=[
    ('LianXiSheng','练习生'),
    ('TechDep','技术部门')
]

class UserRegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email','password1','password2']
    
class ProfileRegisterForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['identity','profile_Image']

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['profile_Image']