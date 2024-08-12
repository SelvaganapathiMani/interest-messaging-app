from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, InterestViewSet, ChatMessageViewSet, UserRegistrationView
from rest_framework.authtoken.views import obtain_auth_token


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'interests', InterestViewSet)
router.register(r'chat', ChatMessageViewSet)

urlpatterns = [
    path('auth/login/', obtain_auth_token, name='api_token_auth'),
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('api/', include(router.urls)),


]
