import React, { useState } from "react";

import { GrRefresh } from "react-icons/gr";

import Loading from "../../../utils/loading/Loading";

import "./GenerateEVP.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function GenerateEVP({
  isOpen,
  onClose,
  generatedStatement,
  setGeneratedStatement,
  companyName,
  accessToken,
}) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  console.log(generatedStatement.main_theme);

  const regenerateEVPStatement = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/regenerate-evp/${companyName}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const responseData = await response.json();
      setGeneratedStatement(responseData);
    } catch (error) {
      console.error("Error regenerating evp statement:", error);
      alert("An error occurred while regenerating evp statement.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/generate-evp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          main_theme: generatedStatement.main_theme,
          pillar_1: generatedStatement.pillar_1,
          pillar_2: generatedStatement.pillar_2,
          pillar_3: generatedStatement.pillar_3,
          tagline: generatedStatement.tagline,
          tagline_desc: generatedStatement.tagline_desc,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setGeneratedStatement(responseData);
      }
    } catch (error) {
      console.error("Error regenerating theme:", error);
      alert("An error occurred while saving evp statement.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="generateEvp-overlay">
      <div className="generateEvp-content">
        {isLoading && <Loading />}
        <h3>{generatedStatement?.tagline}</h3>
        <p>{generatedStatement?.tagline_desc}</p>
        <div>
          <span
            className="generateEvp-regenerateIcon"
            onClick={() => regenerateEVPStatement()}
          >
            <GrRefresh />
          </span>
        </div>
        <div className="generateEvp-save-button">
          <button className="default-btn" onClick={handleSaveClick}>
            Save EVP
          </button>
        </div>
        <button className="generateEvp-closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default GenerateEVP;
