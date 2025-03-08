from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load trained model and scaler
model = joblib.load("models/random_forest_model.pkl")  
scaler = joblib.load("models/scaler.pkl")  

@app.route("/")
def home():
    return jsonify({"message": "Fake Social Media Detection API is running!"})

@app.route("/predict/instagram", methods=["POST"])
def predict_instagram():
    try:
        data = request.json  # Receive JSON data from frontend
        print("Received Data:", data)  # Debugging

        processed_data = preprocess_input(data)  # Convert input into model format
        print("Processed Data:", processed_data)  # Debugging

        prediction = model.predict(processed_data)  # Make prediction
        print("Prediction:", prediction)  # Debugging

        result = "FAKE" if prediction[0] == 1 else "REAL"
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def preprocess_input(data):
    """Convert JSON input to a format suitable for model prediction."""
    nums_length_username = sum(c.isdigit() for c in data["username"]) / len(data["username"]) if len(data["username"]) > 0 else 0
    fullname_words = len(data["fullname"].split())
    nums_length_fullname = sum(c.isdigit() for c in data["fullname"]) / len(data["fullname"]) if len(data["fullname"]) > 0 else 0
    name_equals_username = int(data["username"].lower() == data["fullname"].lower())

    new_data = np.array([[
        int(data["profilePic"]), nums_length_username, fullname_words, nums_length_fullname,
        name_equals_username, int(data["descriptionLength"]), int(data["externalURL"]),
        int(data["private"]), int(data["numPosts"]), int(data["numFollowers"]),
        int(data["numFollows"])
    ]])

    return scaler.transform(new_data)  # Scale the data

if __name__ == "__main__":
    app.run(debug=True, port=5000)
