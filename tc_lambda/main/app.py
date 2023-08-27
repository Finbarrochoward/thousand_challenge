import json
import boto3
from resources.words import get_random_word, check_answer

# # connect to dynamodb client
# table = boto3.resource("dynamodb").Table("german_words")
# insert some mock data
table = "dummy"

RESOURCE_MAP = {
    "/getWord": {
        "GET": get_random_word,
    },
    "/checkAnswer": {
        "POST": check_answer,
    },
}


def lambda_handler(event, context):

    path = event["path"]
    http_method = event["httpMethod"]
    query_string_parameters = event.get("queryStringParameters", None)
    body = event.get("body", None)
    if body is None and query_string_parameters is not None:
        body = query_string_parameters

    response_body = RESOURCE_MAP[path][http_method](body, table)
    print(response_body)

    return {
        "statusCode": 200,
        "body": json.dumps(response_body),
    }
