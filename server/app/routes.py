from flask import Blueprint, render_template, request, jsonify
import random
import app.models as models
import boto3
import json

# Create a Blueprint for your routes
main = Blueprint("main", __name__)

session = boto3.Session(profile_name="ja")
dynamodb = session.resource("dynamodb", region_name="ap-southeast-2")
table = dynamodb.Table("german_words")

#### ROUTES START HERE ####


@main.route("/")
def index():
    return "Hello, World!"


@main.route("/test", methods=["GET"])
def test():
    # get random number
    random_number = random.randint(0, 100)
    return f"Test {random_number}!"


@main.route("/checkAnswer", methods=["POST"])
def check_answer():
    body = request.json
    correct = False
    correctAnswer = body["correctAnswer"]
    print(body)
    if body["givenAnswer"] == body["correctAnswer"]:
        correct = True
        correctAnswer = None

    return {"isCorrect": correct, "correctAnswer": correctAnswer}


@main.route("/getWord", methods=["GET"])
def get_random_word():
    # get random word
    response = table.scan()
    random_word = random.choice(response["Items"])
    if random_word["gender"] is not None:
        response_obj = {
            "word": f"{random_word['gender']} {random_word['word']}",
            "translation": random_word["translation"],
        }
    else:
        response_obj = {
            "word": random_word["word"],
            "translation": random_word["translation"],
        }
    return response_obj
