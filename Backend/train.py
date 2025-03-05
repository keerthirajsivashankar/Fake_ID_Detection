import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import os

# Ensure models directory exists
os.makedirs("models", exist_ok=True)

# Load dataset
df = pd.read_csv("data/mydata.csv")

# Define features and target
features = [
    "profile pic", "nums/length username", "fullname words", "nums/length fullname",
    "name==username", "description length", "external URL", "private",
    "#posts", "#followers", "#follows"
]
target = "fake"

X = df[features]
y = df[target]

# Preprocessing
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model and scaler
joblib.dump(model, "models/random_forest_model.pkl")
joblib.dump(scaler, "models/scaler.pkl")

# Evaluate model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"✅ Model trained and saved! Accuracy: {accuracy:.2f}")
