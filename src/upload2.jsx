import React, { useState } from "react";
import './form.css';
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
    <form onSubmit={handleSubmit} className="form-container">
      <h2>LinkedIn Fake Account Detection</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="number" name="connections" placeholder="Connections Count" onChange={handleChange} required />
      <input type="number" name="endorsements" placeholder="Endorsements Received" onChange={handleChange} required />
      <select name="profileComplete" onChange={handleChange}>
        <option value="yes">Profile Complete</option>
        <option value="no">Incomplete Profile</option>
      </select>
      <select name="workExperience" onChange={handleChange}>
        <option value="yes">Work Experience Listed</option>
        <option value="no">No Work Experience</option>
      </select>
      <button type="submit">Check Fake ID</button>
    </form>
  );
};

export default LinkedInForm;
