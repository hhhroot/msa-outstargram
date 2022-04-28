from django.urls import path
from main import apis

urlpatterns = [
    path('', apis.PostListCreateAPIView.as_view()),
    path('like/<str:post_id>/', apis.PostLikeUserCreateAPIView.as_view()),
]
