# 💻 Fake Social Media Account Detection

---

## 📖 Overview

This project focuses on detecting fake social media accounts using machine learning techniques. A **Random Forest Classifier** is trained on a dataset containing various user features (e.g., profile picture, username, number of posts, etc.) to predict whether an account is real or fake. The model is integrated into a **web-based UI** for easy interaction and real-time predictions.

---

## 🚀 Features

* **🧠 ML Model**: Utilizes a Random Forest Classifier for robust prediction.
* **📊 Feature Scaling**: Employs `StandardScaler` for effective data preprocessing.
* **📁 CSV Dataset Processing**: Handles and processes `.csv` datasets efficiently.
* **🌐 User-Friendly Frontend**: Built with HTML, CSS (Gradient UI), and JavaScript for an intuitive experience.
* **🔍 Real-time Prediction**: Provides immediate predictions with a clear visual result box.
* **📈 Accuracy Visualization**: Displays model accuracy over training data for performance insights.
* **💾 Model Persistence**: `joblib` is used to save and load the trained model and scaler.

---

## 🧪 Tech Stack

| Layer          | Tools Used                                   |
| :------------- | :------------------------------------------- |
| ML Backend     | Python, Pandas, Scikit-Learn, Joblib         |
| Frontend UI    | HTML, CSS (Gradient UI), JS                  |
| Data           | CSV dataset with user metrics                |
| Visualization  | Matplotlib, Accuracy Graphs                  |

---

## 🗃️ Dataset Features

The following features are used to train the model:

* `profile pic`
* `nums/length username`
* `fullname words`
* `nums/length fullname`
* `name==username`
* `description length`
* `external URL`
* `private`
* `#posts`
* `#followers`
* `#follows`

**Target**: `fake` (`0` = real, `1` = fake)

---

## ⚙️ How It Works

1.  **Preprocess Data**:
    * Load CSV dataset.
    * Apply `StandardScaler` for normalization.
    * Split data into training and testing sets.
2.  **Train Model**:
    * Utilize `RandomForestClassifier`.
    * Evaluate model accuracy and save the trained model.
3.  **Build UI**:
    * Collect user input through the web interface.
    * Format input into features suitable for the model.
    * Load the saved model using `joblib` and generate a prediction.
4.  **Display Prediction**:
    * Show the result as **REAL** or **FAKE** with appropriate styling.

---

## 📊 Visualization

A graph is included to show how model accuracy improves with the amount of training data. This helps understand the robustness and performance of the model.

---

## 📂 Folder Structure
