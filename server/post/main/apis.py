import json

from bson import ObjectId
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from main.models import Post, PostImage
from main.serializers import PostGetSerializer, PostCreateSerializer, LikeUserCreateSerializer


class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PostGetSerializer
        elif self.request.method == 'POST':
            return PostCreateSerializer

    def perform_create(self, serializer):
        serializer.save()


class PostLikeUserCreateAPIView(APIView):
    def post(self, request, post_id):  # get에 header에서 유저 정보 가져오는 것으로 변경
        serializer = LikeUserCreateSerializer(data=request.data)
        if serializer.is_valid():
            post = Post.objects.get(_id=ObjectId(post_id))
            append_like = {'user': request.data.get('user')}
            if append_like in post.likes:
                post.likes.remove(append_like)
            else:
                post.likes.append(append_like)

            post.save()
            serializer = PostGetSerializer(post)
            return Response(serializer.data)

