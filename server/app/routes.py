
from flask import Blueprint, render_template, request, jsonify
import random
import app.models as models
import boto3
# Create a Blueprint for your routes
main = Blueprint('main', __name__)

#### ROUTES START HERE ####


@main.route('/')
def index():
    return "Hello, World!"

@main.route('/test', methods=['GET'])
def test():
    # get random number
    random_number = random.randint(0, 100)
    return f'Test {random_number}!'
