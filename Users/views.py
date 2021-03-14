from django.shortcuts import render,redirect
from django.contrib import messages
from Users.forms import UserRegisterFrom
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterFrom,UserUpdateForm,ProfileUpdateForm

def register(request):
    if request.method == 'POST':
        form  = UserRegisterFrom(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request,f'Account created for {username}!')
            return redirect('Login')
    else:
        form = UserRegisterFrom()
    return render(request,'Users/register.html',{'form': form})


@login_required
def profile(request):
    return render(request, 'Users/profile.html')
# Create your views here.
