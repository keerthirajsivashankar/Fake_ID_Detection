import React, { useState } from "react";
import { motion } from "framer-motion";

// Define your pageVariants and pageTransition if you need them for animations
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (file) {
      console.log("File Uploaded:", file.name);
      // Add logic for uploading or processing the file here
    } else {
      alert("Please select a file to upload!");
    }
  };

  return (
    <motion.div
      className="p-4"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="text-3xl font-bold">Upload Your CSV File</h1>
      {/* Hidden file input */}
      <input
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      {/* Label styled as button */}
      <label htmlFor="file-upload" className="ubtn">
        <h2>Choose File</h2>
      </label>
      <button className="ubtn" onClick={handleUploadClick}>
        <h2>Upload File</h2>
      </button>
      {file && <p>Uploaded File: {file.name}</p>}
    </motion.div>
  );
};

export default UploadPage;
