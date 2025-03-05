import React, { useState } from "react";
import "./form1.css";

const TwitterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    handle: "",
    tweets: "",
    retweets: "",
    followers: "",
    following: "",
    verified: "no",
  });

  const [result, setResult] = useState(null); // State to store the result

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const processedData = { ...formData };
    const prediction = onSubmit(processedData); // Call parent function for prediction
    setResult(prediction); // Update result
  };

  return (
    <div className="form-container1">
      <form onSubmit={handleSubmit} className="twitter-form">
        <h2 className="form-title">X (Twitter) Fake Account Detection</h2>
        <div className="form-grid">
          <div className="form-group">
            <input type="text" name="handle" className="form-input" placeholder="Twitter Handle (@username)" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="tweets" className="form-input" placeholder="Total Tweets" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="retweets" className="form-input" placeholder="Retweets Count" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="followers" className="form-input" placeholder="Followers" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="following" className="form-input" placeholder="Following" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <select name="verified" className="form-select" onChange={handleChange}>
              <option value="no">Not Verified</option>
              <option value="yes">Verified</option>
            </select>
          </div>
        </div>
        <button type="submit" className="form-button1">Check Fake ID</button>
      </form>

      {/* Result Box */}
      {result !== null && (
        <div className={`result-box ${result === "FAKE" ? "fake" : "real"}`}>
          <h3>Prediction Result:</h3>
          <p>{result === "FAKE" ? "🚨 This account is likely FAKE!" : "✅ This account seems REAL!"}</p>
        </div>
      )}
    </div>
  );
};

export default TwitterForm;
