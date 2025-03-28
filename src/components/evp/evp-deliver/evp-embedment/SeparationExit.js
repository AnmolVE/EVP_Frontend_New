import React, { useState } from "react";

import { separationExitFields } from "./embedment-constants";
import EVPEmbedmentPopup from "./EVPEmbedmentPopup";

import { BsArrowUpCircleFill } from "react-icons/bs";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function SeparationExit({ companyName, accessToken, activeTab }) {
  const [activeField, setActiveField] = useState(
    "Exit Announcement (Internal)"
  );

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
        {separationExitFields.map((field, index) => (
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
      <div className="evp-embedment-right">
        <div className="evp-embedment-right-content">
          <div className="evp-embedment-right-content-message">
            {generatedData.message}
          </div>
          <div className="evp-embedment-right-content-inputs">
            <input type="text" placeholder="Enter message..." />
            <div className="evp-embedment-right-content-sendButton">
              <BsArrowUpCircleFill />
            </div>
          </div>
        </div>
      </div>
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

export default SeparationExit;
