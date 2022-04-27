from django.shortcuts import render
from pymongo import MongoClient

db = client.outstargram
posts = db.post

test_post = {
	"auther": "hg",
	"content": "hihi",
}

posts.insert_one(test_post)


# Create your views here.
