

from django.urls import path
from . import views
from .views import UploadJsonView
from django.conf import settings
from django.conf.urls.static import static
from .views import UserProfile


urlpatterns = [
    path('hello/', views.api_hello, name='api_hello'),
    path('json_upload/', UploadJsonView.as_view(), name="json_upload"),
    path('grabJson/<str:filename>/', views.grab_json, name='grabJson'),
    path('file_list/', views.file_list, name='file_list'),
 	path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout/', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    path('profile/', views.UserProfile.as_view(), name='profile'),
    # path('profile', views.profile_view.as_view(), name='profile'),
    #  path('profile/', ProfileView.as_view(), name='profile'),
    # path('api/profile/', profile_view, name='profile'),
    
]

