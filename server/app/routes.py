from flask import Blueprint, render_template, request, jsonify
import random
import app.models as models
import boto3
import json

# Create a Blueprint for your routes
main = Blueprint("main", __name__)

session = boto3.Session(profile_name="ja")
dynamodb = session.resource("dynamodb", region_name="ap-southeast-2")

# word: word and translation: translation = false
# word: translation and translation: word = true

TABLE_MAP = {
    "de_en": {"table_name": "german_words", "direction": False},
    "en_de": {"table_name": "german_words", "direction": True},
}
# table = dynamodb.Table("german_words")

#### ROUTES START HERE ####


@main.route("/")
def index():
    return "Hello, World!"


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
    # decide direction and correct table

    # TODO: find a way to make this more extensible when more languages
    # Maybe a map?

    answerLang = request.args.get("answer_language")
    questionLang = request.args.get("question_language")
    table_name = TABLE_MAP[f"{questionLang}_{answerLang}"]["table_name"]
    direction = TABLE_MAP[f"{questionLang}_{answerLang}"]["direction"]
    table = dynamodb.Table(table_name)

    # get random word
    response = table.scan()
    random_word = random.choice(response["Items"])

    if random_word["gender"] is not None:
        word = f"{random_word['gender']} {random_word['word']}"
        translation = random_word["translation"]
    else:
        word = random_word["word"]
        translation = random_word["translation"]

    if direction:
        # if swapping langs
        temp = word
        word = translation
        translation = temp

    response_obj = {
        "word": word,
        "translation": translation,
    }
    return response_obj
