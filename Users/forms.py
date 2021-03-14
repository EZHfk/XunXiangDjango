from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from .models import UserInfo

IDENTITY_CHOICE=[
    ('LianXiSheng','练习生'),
    ('TechDep','技术部门')
]

class UserRegisterFrom(UserCreationForm):
    class Meta:
        model = UserInfo
        fields = ['username', 'email','password1','password2','identity','profile_Image']

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['image']