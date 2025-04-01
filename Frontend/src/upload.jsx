import React, { useState } from "react";
import "./form.css";
import { predictInstagram } from "./api";

const Upload = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    profilePic: "1", // Default: Has profile pic (1 = Yes, 0 = No)
    descriptionLength: "",
    externalURL: "0", // Default: No external URL (1 = Yes, 0 = No)
    private: "0", // Default: Public account (1 = Private, 0 = Public)
    numPosts: "",
    numFollowers: "",
    numFollows: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const processedData = {
      ...formData,
      numsLengthUsername:
        formData.username.replace(/\D/g, "").length / formData.username.length || 0,
      fullnameWords: formData.fullname.trim().split(/\s+/).length,
      numsLengthFullname:
        formData.fullname.replace(/\D/g, "").length / formData.fullname.length || 0,
      nameEqualsUsername:
        formData.username.toLowerCase() === formData.fullname.toLowerCase() ? 1 : 0,
      profilePic: parseInt(formData.profilePic),
      externalURL: parseInt(formData.externalURL),
      private: parseInt(formData.private),
      numPosts: parseInt(formData.numPosts),
      numFollowers: parseInt(formData.numFollowers),
      numFollows: parseInt(formData.numFollows),
      descriptionLength: parseInt(formData.descriptionLength),
    };

    console.log("Processed Data Sent to API:", processedData); // Debugging

    try {
      const prediction = await predictInstagram(processedData);
      setResult(prediction);
    } catch (error) {
      console.error("Error getting prediction:", error);
      setResult("Error fetching prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="instagram-form">
        <h2>Instagram Fake Account Detection</h2>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} required />
        <input type="number" name="descriptionLength" placeholder="Bio Length" onChange={handleChange} required />
        <input type="number" name="numPosts" placeholder="Number of Posts" onChange={handleChange} required />
        <input type="number" name="numFollowers" placeholder="Followers" onChange={handleChange} required />
        <input type="number" name="numFollows" placeholder="Following" onChange={handleChange} required />

        <select name="profilePic" onChange={handleChange} required>
          <option value="1">Has Profie Pic</option>
          <option value="0">Doesn't Has Profile Pic</option>
        </select>

        <select name="externalURL" onChange={handleChange} required>
          <option value="0">Has External URL</option>
          <option value="1">No Has External URL</option>
        </select>

        <select name="private" onChange={handleChange} required>
          <option value="0">Public</option>
          <option value="1">Private</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check Fake ID"}
        </button>
      </form>

      {result !== null && (
        <div className={`result-box ${result === "FAKE" ? "fake" : "real"}`}>
          <h3>Prediction Result:</h3>
          <p>{result === "FAKE" ? "🚨 This account is FAKE!" : "✅ This account is REAL!"}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
