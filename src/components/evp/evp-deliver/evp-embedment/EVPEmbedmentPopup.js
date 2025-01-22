import React from "react";

import "./EVPEmbedmentPopup.css";

function EVPEmbedmentPopup({
  isOpen,
  onClose,
  generatedData,
  companyName,
  accessToken,
}) {
  if (!isOpen) return null;

  return (
    <div className="embedment-overlay">
      <div className="embedment-content">
        <h3>{generatedData.stage}</h3>
        <p>{generatedData.touchpoint}</p>
        <p>{generatedData.message}</p>
        <button className="embedment-closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default EVPEmbedmentPopup;
