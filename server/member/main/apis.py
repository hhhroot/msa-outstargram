from django.contrib.auth import authenticate
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from main.serializers import UserSerializer


class CreateUserAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthTokenAPIView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
        else:
            raise AuthenticationFailed()

        data = {
            'token': token.key,
        }
        return Response(data)


class LogoutAPIView(APIView):
    def get(self, request):
        user_token = Token.objects.filter(key=request.auth)
        if user_token:
            user_token.delete()
            return Response(data={"detail": "로그아웃 되었습니다."}, status=status.HTTP_200_OK)
        else:
            return Response(data={"detail": "토큰이 유효하지 않습니다."}, status=status.HTTP_200_OK)


class UserInfoAPIView(APIView):
    def get(self, request):
        user = Token.objects.get(key=request.auth).user
        serializer = UserSerializer(user)
        return Response(serializer.data)
