from django.urls import path

from main.apis import CreateUserAPIView, AuthTokenAPIView, LogoutAPIView, UserInfoAPIView

urlpatterns = [
    path('create/', CreateUserAPIView.as_view()),
    path('login/', AuthTokenAPIView.as_view()),
    path('logout/', LogoutAPIView.as_view()),
    path('info/', UserInfoAPIView.as_view()),
]
