# 💻 Fake Social Media Account Detection

---

## 📖 Overview

This project aims to detect fake social media accounts using machine learning. A **Random Forest Classifier** is trained on a dataset containing various user attributes (e.g., presence of profile picture, username length, follower count, etc.) to predict whether an account is **real or fake**. The trained model is integrated into a **web-based UI** that allows users to input account data and get instant predictions.

---

## 🚀 Features

- **🧠 Machine Learning Model**: Uses a Random Forest Classifier for accurate and reliable classification.
- **📊 Data Preprocessing**: Applies `StandardScaler` for feature normalization.
- **📁 CSV Data Handling**: Loads and processes structured `.csv` datasets efficiently.
- **🌐 User Interface**: Built with HTML, CSS (gradient UI), and JavaScript for an intuitive and clean frontend.
- **🔍 Real-Time Predictions**: Instantly predicts and displays whether an account is fake or real.
- **📈 Accuracy Visualization**: Includes a graph showing model accuracy vs. training dataset size.
- **💾 Persistent Model Storage**: Uses `joblib` to save and reload both the model and the scaler.

---

## 🧪 Tech Stack

| Layer         | Tools Used                            |
|---------------|----------------------------------------|
| ML Backend    | Python, Pandas, Scikit-learn, Joblib   |
| Frontend UI   | HTML, CSS (Gradient UI), JavaScript    |
| Data Format   | CSV with user account features         |
| Visualization | Matplotlib (for accuracy plots)        |

---

## 🗃️ Dataset Features

The following features are used for training:

- `profile pic`
- `nums/length username`
- `fullname words`
- `nums/length fullname`
- `name==username`
- `description length`
- `external URL`
- `private`
- `#posts`
- `#followers`
- `#follows`

**Target Variable**:  
- `fake`: `0` = Real, `1` = Fake

---

## ⚙️ How It Works

1. **Data Preprocessing**  
   - Load the `.csv` dataset using Pandas.  
   - Normalize numerical features using `StandardScaler`.  
   - Split the data into training and test sets.

2. **Model Training**  
   - Train a `RandomForestClassifier` on the scaled data.  
   - Evaluate the model using accuracy and classification reports.  
   - Save the trained model and scaler using `joblib`.

3. **Web Application**  
   - Collect user input via a responsive HTML form.  
   - Process and scale the input features.  
   - Load the saved model and predict using real-time data.  
   - Display prediction visually as **REAL** or **FAKE**.

4. **Accuracy Visualization**  
   - A dynamic plot shows model accuracy based on different training data sizes.

---

## 📊 Visualization

The project includes a line graph that plots **model accuracy against the amount of training data used**. This helps demonstrate the model's scalability and performance improvements as data size increases.

---

## 📂 Folder Structure

```
project-root/
├── data/
│   └── mydata.csv
├── models/
│   ├── random_forest_model.pkl
│   └── scaler.pkl
├── static/
│   └── form.css
├── templates/
│   └── index.html
├── app.py               # Flask backend
├── predict.py           # Handles input and prediction logic
├── accuracy_plot.py     # Script for accuracy vs. data size plot
└── README.md
```

---

## ✅ Conclusion

This project demonstrates how machine learning can be leveraged to detect potentially fake social media accounts by analyzing user behavior and profile metrics. The solution is scalable, easy to use, and highly adaptable for various social media datasets.
