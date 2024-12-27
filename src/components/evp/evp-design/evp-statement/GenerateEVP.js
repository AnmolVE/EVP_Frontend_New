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

  console.log(generatedStatement.tagline);
  console.log(generatedStatement.tagline_desc);

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
      console.error("Error regenerating theme:", error);
      alert("An error occurred while regenerating the theme.");
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
        <button className="generateEvp-closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default GenerateEVP;
