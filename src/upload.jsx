import React, { useState } from "react";
import './form.css';
const InstagramForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    followers: "",
    following: "",
    posts: "",
    profilePicture: "yes",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent or backend
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Instagram Fake Account Detection</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="number" name="followers" placeholder="Followers" onChange={handleChange} required />
      <input type="number" name="following" placeholder="Following" onChange={handleChange} required />
      <input type="number" name="posts" placeholder="Total Posts" onChange={handleChange} required />
      <select name="profilePicture" onChange={handleChange}>
        <option value="yes">Has Profile Picture</option>
        <option value="no">No Profile Picture</option>
      </select>
      <textarea name="bio" placeholder="Bio Text" onChange={handleChange}></textarea>
      <button type="submit">Check Fake ID</button>
    </form>
  );
};

export default InstagramForm;
