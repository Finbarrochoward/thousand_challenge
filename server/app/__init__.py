from flask import Flask
from flask_cors import CORS
from app.routes import main


def create_app():
    app = Flask(__name__)
    # Configure CORS with specific options
    allowed_origin = "http://localhost:5001"
    cors = CORS(app, origins=allowed_origin)

    app.register_blueprint(main)

    return app
