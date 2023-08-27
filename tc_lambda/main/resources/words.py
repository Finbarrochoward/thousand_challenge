import boto3
import random
import json


def get_random_word(body, dynamodb_table):

    # get random word
    response = dynamodb_table.scan()
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


def get_random_word(body, dynamodb_table):
    return {"word": "chicken", "translation": "das Huhn"}


def check_answer(body, dynamodb_table):
    body = json.loads(body)
    correct = False
    print(body)
    if body["givenAnswer"] == body["correctAnswer"]:
        correct = True

    return {"response": correct}
