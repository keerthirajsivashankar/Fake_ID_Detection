import joblib
import numpy as np

# Load saved model and scaler
model = joblib.load("models/random_forest_model.pkl")
scaler = joblib.load("models/scaler.pkl")

def predict_user():
    """Take user input and predict if the account is fake."""
    username = input("Enter username: ")
    fullname = input("Enter full name: ")
    profile_pic = int(input("Profile Picture? (1 for Yes, 0 for No): "))
    name_equals_username = int(username.lower() == fullname.lower())
    description_length = int(input("Enter Bio Length: "))
    external_url = int(input("External URL? (1 for Yes, 0 for No): "))
    private = int(input("Private Account? (1 for Yes, 0 for No): "))
    num_posts = int(input("Number of Posts: "))
    num_followers = int(input("Followers Count: "))
    num_follows = int(input("Following Count: "))

    # Process input
    nums_length_username = sum(c.isdigit() for c in username) / len(username) if len(username) > 0 else 0
    fullname_words = len(fullname.split())
    nums_length_fullname = sum(c.isdigit() for c in fullname) / len(fullname) if len(fullname) > 0 else 0

    new_data = np.array([[
        profile_pic, nums_length_username, fullname_words, nums_length_fullname,
        name_equals_username, description_length, external_url, private,
        num_posts, num_followers, num_follows
    ]])

    # Scale and predict
    new_data_scaled = scaler.transform(new_data)
    prediction = model.predict(new_data_scaled)

    # Show result
    result = "FAKE" if prediction[0] == 1 else "REAL"
    print(f"🚀 Prediction: The account is {result}")

# Run the function
predict_user()
