import React, { useState } from "react";
import './form.css';
const TwitterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    handle: "",
    tweets: "",
    retweets: "",
    followers: "",
    following: "",
    verified: "no",
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
      <h2>X (Twitter) Fake Account Detection</h2>
      <input type="text" name="handle" placeholder="Twitter Handle (@username)" onChange={handleChange} required />
      <input type="number" name="tweets" placeholder="Total Tweets" onChange={handleChange} required />
      <input type="number" name="retweets" placeholder="Retweets Count" onChange={handleChange} required />
      <input type="number" name="followers" placeholder="Followers" onChange={handleChange} required />
      <input type="number" name="following" placeholder="Following" onChange={handleChange} required />
      <select name="verified" onChange={handleChange}>
        <option value="no">Not Verified</option>
        <option value="yes">Verified</option>
      </select>
      <button type="submit">Check Fake ID</button>
    </form>
  );
};

export default TwitterForm;
