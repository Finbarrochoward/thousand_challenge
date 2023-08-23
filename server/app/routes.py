
from flask import Blueprint, render_template, request, jsonify
import random
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from config.config import DATABASE_URI, DATABASE_NAME
import app.models as models

# Create a new client and connect to the server
client = MongoClient(DATABASE_URI, server_api=ServerApi('1'))
db = client[DATABASE_NAME]

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

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

@main.route('/rooms', methods=['POST'])
def add_room():
    '''Add a room to the database
    TODO: Add validation, make the schema
    This is pretty much just a test'''
    data = request.json        
    collection = db.rooms
    new_room = models.Room(data['room_name'], data['size'], data['room_desc'])
    inserted_id = collection.insert_one(new_room.__dict__).inserted_id
    return jsonify({'inserted_id': str(inserted_id)})


@main.route('/rooms', methods=['GET'])
def get_rooms():
    '''Get all rooms from the database'''
    collection = db.rooms
    rooms = []
    for room in collection.find():
        rooms.append(room)
    return jsonify({'rooms': rooms})

def add_booking():
    '''Add a booking to the database'''
    data = request.json
    collection = db.bookings
    new_booking = models.Booking(data['booking_datetime'], data['customer_phone'], data['customer_email'], data['customer_name'], data['customer_dob'], data['booking_duration'])
    inserted_id = collection.insert_one(new_booking.__dict__).inserted_id
    return jsonify({'inserted_id': str(inserted_id)})

def get_bookings():
    '''Get all bookings from the database'''
    collection = db.bookings
    bookings = []
    for booking in collection.find():
        bookings.append(booking)
    return jsonify({'bookings': bookings})

def add_donation():
    '''Add a donation to the database'''
    data = request.json
    collection = db.donations
    new_donation = models.Donation(data['donation_datetime'], data['customer_phone'], data['customer_email'], data['customer_name'], data['customer_dob'], data['donation_amount'])
    inserted_id = collection.insert_one(new_donation.__dict__).inserted_id
    return jsonify({'inserted_id': str(inserted_id)})


