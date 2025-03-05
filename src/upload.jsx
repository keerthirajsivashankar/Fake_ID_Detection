import React, { useState } from "react";
import "./form.css";

const InstagramForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    profilePic: "1", // 1 for Yes, 0 for No
    descriptionLength: "",
    externalURL: "0", // 1 for Yes, 0 for No
    private: "0", // 1 for Yes, 0 for No
    numPosts: "",
    numFollowers: "",
    numFollows: "",
  });

  const [result, setResult] = useState(null); // State to store the result

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Derived features
    const numsLengthUsername = formData.username.replace(/\D/g, "").length / formData.username.length || 0;
    const fullnameWords = formData.fullname.trim().split(/\s+/).length;
    const numsLengthFullname = formData.fullname.replace(/\D/g, "").length / formData.fullname.length || 0;
    const nameEqualsUsername = formData.username.toLowerCase() === formData.fullname.toLowerCase() ? 1 : 0;

    const processedData = {
      ...formData,
      numsLengthUsername,
      fullnameWords,
      numsLengthFullname,
      nameEqualsUsername,
    };

    const prediction = onSubmit(processedData); // Call parent function for prediction
    setResult(prediction); // Update result
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="instagram-form">
        <h2>Instagram Fake Account Detection</h2>
        <div className="form-grid">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} required />
          <select name="profilePic" onChange={handleChange}>
            <option value="1">Has Profile Picture</option>
            <option value="0">No Profile Picture</option>
          </select>
          <input type="number" name="descriptionLength" placeholder="Bio Length" onChange={handleChange} required />
          <select name="externalURL" onChange={handleChange}>
            <option value="0">No External URL</option>
            <option value="1">Has External URL</option>
          </select>
          <select name="private" onChange={handleChange}>
            <option value="0">Public Account</option>
            <option value="1">Private Account</option>
          </select>
          <input type="number" name="numPosts" placeholder="Number of Posts" onChange={handleChange} required />
          <input type="number" name="numFollowers" placeholder="Followers" onChange={handleChange} required />
          <input type="number" name="numFollows" placeholder="Following" onChange={handleChange} required />
        </div>
        <button type="submit">Check Fake ID</button>
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

export default InstagramForm;
