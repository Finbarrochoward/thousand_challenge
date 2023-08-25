from main.app import lambda_handler


if __name__ == "__main__":

    events = [
        {
            "path": "/getWord",
            "httpMethod": "GET",
            "queryStringParameters": {"word": "chicken"},
        },
        {
            "path": "/checkAnswer",
            "httpMethod": "POST",
            "queryStringParameters": {"word": "chicken"},
            "body": {"givenAnswer": "das Huhn", "correctAnswer": "das Huhn"},
        },
        {
            "path": "/checkAnswer",
            "httpMethod": "POST",
            "queryStringParameters": {"word": "chicken"},
            "body": {"givenAnswer": "der Huhd", "correctAnswer": "das Huhn"},
        },
    ]
    for event in events:
        lambda_handler(event, None)
