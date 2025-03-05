import React, { useState } from "react";
import "./form2.css";

const LinkedInForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    connections: "",
    endorsements: "",
    profileComplete: "yes",
    workExperience: "yes",
  });

  const [result, setResult] = useState(null); // State to store the result

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prediction = onSubmit(formData); // Call the parent function
    setResult(prediction); // Set the result after processing
  };

  return (
    <div className="linkedin-container">
      <form onSubmit={handleSubmit} className="linkedin-form">
        <h2 className="form-title">LinkedIn Fake Account Detection</h2>
        <div className="form-grid">
          <div className="form-group">
            <input type="text" name="name" className="form-input" placeholder="Full Name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="connections" className="form-input" placeholder="Connections Count" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="number" name="endorsements" className="form-input" placeholder="Endorsements Received" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <select name="profileComplete" className="form-select" onChange={handleChange}>
              <option value="yes">Profile Complete</option>
              <option value="no">Incomplete Profile</option>
            </select>
          </div>
          <div className="form-group">
            <select name="workExperience" className="form-select" onChange={handleChange}>
              <option value="yes">Work Experience Listed</option>
              <option value="no">No Work Experience</option>
            </select>
          </div>
        </div>
        <button type="submit" className="form-button">Check Fake ID</button>
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

export default LinkedInForm;
