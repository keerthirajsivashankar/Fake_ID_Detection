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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
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
  );
};

export default LinkedInForm;
