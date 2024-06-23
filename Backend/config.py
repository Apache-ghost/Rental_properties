from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# Create the Flask application
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) to allow requests from any origin
CORS(app)

# Configure the SQLite database URI and disable SQLAlchemy track modifications
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///myhousing.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize the SQLAlchemy database instance
db = SQLAlchemy(app)
