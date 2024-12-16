import React from "react";

import "./GenerateEVP.css";

function GenerateEVP({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="generateEvp-overlay">
      <div className="generateEvp-content">
        <div>EVP Statement will come here</div>
        <button className="generateEvp-closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default GenerateEVP;
