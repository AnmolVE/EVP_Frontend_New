import React, { useState } from "react";

import { alumniRelationsFields } from "./embedment-constants";
import EVPEmbedmentPopup from "./EVPEmbedmentPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function AlumniRelations({ companyName, accessToken, activeTab }) {
  const [activeField, setActiveField] = useState("Alumni Newsletter");

  const [generatedData, setGeneratedData] = useState({});

  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const closeModal = () => {
    setModalData({ isOpen: false });
  };

  const handleGenerateClick = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/evp-embedment/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        company_name: companyName,
        stage: activeTab,
        touchpoint: activeField,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      setGeneratedData(responseData);
    }
  };

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {alumniRelationsFields.map((field, index) => (
          <div
            key={index}
            className={`evp-embedment-left-box ${
              activeField === field ? "active" : ""
            }`}
            onClick={() => [setActiveField(field), setGeneratedData({})]}
          >
            <p>{field}</p>
          </div>
        ))}
      </div>
      <div className="evp-embedment-right">{generatedData.message}</div>
      <button className="default-btn" onClick={handleGenerateClick}>
        Generate
      </button>
      <EVPEmbedmentPopup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        generatedData={generatedData}
        companyName={companyName}
        accessToken={accessToken}
      />
    </div>
  );
}

export default AlumniRelations;
