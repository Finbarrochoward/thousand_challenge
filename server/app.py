from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run()



######## ALL THE OLD CODE IS BELOW HERE OR YOU CAN LOOK AT PREVIOUS GIT COMMITS ########


# # Initialize the app
# app = Flask(__name__)

# # Configure CORS with specific options
# allowed_origin = "http://localhost:3000"
# cors = CORS(app, origins=allowed_origin)

# # Configure the database
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/testBase'
# client = MongoClient(app.config['MONGO_URI'])
# db = client.testBase



# @app.route('/')
# def hello():
#     return 'Hello, World!'
    
# @app.route('/add', methods=['POST'])
# def add_document():
#     data = request.json
#     collection = db.testCollection
#     inserted_id = collection.insert_one(data).inserted_id
#     return jsonify({'inserted_id': str(inserted_id)})

# # Anything inside `static` folder can be served directly, try `http://localhost:12345/static/hello.html/`

# @app.route('/test', methods=['GET'])
# def test():
#     # get random number
#     random_number = random.randint(0, 100)
#     return f'Test {random_number}!'