// src/components/PredictionResult.js
import React from "react";
import "./PredictionResult.css";

const PredictionResult = ({ result }) => {
  if (result === null) return null;

  return (
    <div className={`result-box ${result === "FAKE" ? "fake" : "real"}`}>
      <h3>Prediction Result:</h3>
      <p>{result === "FAKE" ? "🚨 This account is likely FAKE!" : "✅ This account seems REAL!"}</p>
    </div>
  );
};

export default PredictionResult;
