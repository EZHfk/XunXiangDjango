# XunXiangDjango
XunXiang Process with BackEnd

## Dev setup

### Clone git repo

First-time install (on Terminal or Git Bash):

```
$ virtualenv env
# or: python3 -m venv env
$ source env/bin/activate
# windows: source env/Scripts/activate
$ pip install Django
$ pip install django-crispy-forms
$ pip install Pillow
$ python3 manage.py migrate
$ python3 manage.py create_test_data
```

To start the server:

```
$ python3 manage.py runserver
```

To create a superuser account (after you're done, go to http://127.0.0.1:8000/admin and sign in with your newly created superuser account):

```
$ python3 manage.py createsuperuser
# windows: winpty python3 manage.py createsuperuser
```
