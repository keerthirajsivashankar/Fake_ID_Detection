const BASE_URL = "http://localhost:5000"; // Flask backend URL

export const predictInstagram = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/predict/instagram`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    const result = await response.json();
    console.log("API Response:", result); // Debugging
    return result.prediction; // Should return "FAKE" or "REAL"
  } catch (error) {
    console.error("Error predicting Instagram fake ID:", error);
    return "Error"; // Return error message to frontend
  }
};
