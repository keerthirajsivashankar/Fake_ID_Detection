import React, { useState } from "react";
import Papa from "papaparse";
const UploadPage = () => (
  <motion.div
    className="p-4"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <h1 className="text-3xl font-bold">Upload Your CSV File</h1>
    <input type="file" className="mt-4 border border-gray-300 p-2" />
  </motion.div>
);