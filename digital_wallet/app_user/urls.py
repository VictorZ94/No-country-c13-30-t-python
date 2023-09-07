from django.urls import path
from .views_apis.api_userDetail import *

app_name = "user_app"

urlpatterns = [
    path('register', UserRegister.as_view(), name='register'),
    path('login', UserLogin.as_view(), name='login'),
    path('logout', UserLogout.as_view(), name='logout'),
    path('user', Userview.as_view(), name='user')
]
