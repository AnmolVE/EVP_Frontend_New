import React, { useState } from "react";

import "./GenerateEVP.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function GenerateEVP({
  isOpen,
  onClose,
  taglineData,
  companyName,
  accessToken,
  selectedThemes,
}) {
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async () => {
    if (!selectedThemes || selectedThemes.length < 4) {
      console.error("Not enough themes selected");
      return;
    }

    const body = {
      company_name: companyName,
      main_theme: selectedThemes[0]?.theme_name,
      pillar_1: selectedThemes[1]?.theme_name,
      pillar_2: selectedThemes[2]?.theme_name,
      pillar_3: selectedThemes[3]?.theme_name,
      tagline: taglineData,
    };

    console.log("Sending data to API:", body);

    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/generate-evp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      setApiResponse(result);
      console.log("API Response:", result);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting data.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="generateEvp-overlay">
      <div className="generateEvp-content">
        <div>EVP Statement will come here</div>
        <p>{taglineData}</p>
        <button onClick={() => handleSubmit()}>Save</button>
        <button className="generateEvp-closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default GenerateEVP;
