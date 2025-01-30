import React, { useState } from "react";
import { motion } from "framer-motion";
import Papa from "papaparse"; // Import PapaParse

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const ProcessingPage = () => {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    if (uploadedFile && uploadedFile.type === "text/csv") {
      Papa.parse(uploadedFile, {
        complete: (result) => {
          console.log("Parsed CSV result:", result);
          setCsvData(result.data);
        },
        header: true,
      });
    } else {
      alert("Please upload a valid CSV file!");
    }
  };

  const handleProcess = () => {
    if (file) {
      console.log("Processing file:", file.name);
    } else {
      alert("Please upload a file!");
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
     <div className="processing-page">
      <div className="result-1">
        <div className="pr">
          <h1>Upload and Process Data</h1>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="file-upload" className="ubtn">
            <h2>Choose File</h2>
          </label>
          <button className="ubtn" onClick={handleProcess}>
            <h2>Process File</h2>
          </button>
          {file && <p>Uploaded File: {file.name}</p>}
        </div>

        <div className="pl">
          <h3>CSV Preview:</h3>
          <table>
            <thead>
              <tr>
                {csvData[0] && Object.keys(csvData[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="result">
        <h2 className="result1">Result</h2>
      </div>
    </div>
    </motion.div>
  );
};

export default ProcessingPage;
