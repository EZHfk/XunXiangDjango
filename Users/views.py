from django.shortcuts import render,redirect
from django.contrib import messages
from Users.forms import UserRegisterForm
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm,UserUpdateForm,ProfileUpdateForm,ProfileRegisterForm

def register(request):
    if request.method == 'POST':
        u_form  = UserRegisterForm(request.POST)
        p_form = ProfileRegisterForm(request.POST,request.FILES)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            username = u_form.cleaned_data.get('username')
            messages.success(request,f'Account created for {username}!')
            return redirect('Login')
    else:
        u_form  = UserRegisterForm()
        p_form = ProfileRegisterForm()
    context = {
        'u_form':u_form,
        'p_form':p_form
    }
    return render(request,'Users/register.html',context)


@login_required
def profile(request):
    return render(request, 'Users/profile.html')

@login_required
def update_profile(request):
    if request.method=='POST':
        u_form = UserUpdateForm(request.POST,instance=request.user)
        p_form = ProfileUpdateForm(request.POST,request.FILES,instance=request.user.profile)
        
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request,'Profile updated!')
            return redirect('Profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)
    context ={
        'u_form': u_form,
        'p_form': p_form
    }
    return render(request, 'Users/update_profile.html',context)
# Create your views here.
