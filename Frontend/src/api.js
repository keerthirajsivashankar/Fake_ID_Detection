// src/services/api.js
const BASE_URL = "http://localhost:5173"; // Change if backend is deployed

export const predictInstagram = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/predict/instagram`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result.prediction;
  } catch (error) {
    console.error("Error predicting Instagram fake ID:", error);
    return null;
  }
};

export const predictTwitter = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/predict/twitter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result.prediction;
  } catch (error) {
    console.error("Error predicting Twitter fake ID:", error);
    return null;
  }
};
