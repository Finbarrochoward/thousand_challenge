from config.secrets import IT_PROJECT_MONGO_PASSWORD, IT_PROJECT_MONGO_USERNAME

DATABASE_URI = f"mongodb+srv://{IT_PROJECT_MONGO_USERNAME}:{IT_PROJECT_MONGO_PASSWORD}@cluster0.c1418is.mongodb.net/?retryWrites=true&w=majority"
DATABASE_NAME = "it_project"
