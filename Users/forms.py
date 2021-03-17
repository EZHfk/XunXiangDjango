from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from django.forms import ModelForm, HiddenInput
from crispy_forms.layout import Fieldset,Layout,Field
from crispy_forms.helper import FormHelper
IDENTITY_CHOICE=[
    ('LianXiSheng','练习生'),
    ('TechDep','技术部门')
]

class UserRegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email','password1','password2']
    
class ProfileRegisterForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(ProfileRegisterForm, self).__init__(*args, **kwargs)
        self.fields['authentication_Token'].widget = HiddenInput()
    class Meta:
        model = Profile
        fields = ['identity','authentication_Token','profile_Image']

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['profile_Image']