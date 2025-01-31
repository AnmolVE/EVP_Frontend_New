import React from "react";

function HandbookPopup({ isOpen, onClose, handbook_data }) {
  if (!isOpen) return null;

  return (
    <div className="handbookPopup-overlay">
      <div className="handbookPopup-content">
        <button className="handbookPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 handbookPopup-para">{handbook_data}</p>
      </div>
    </div>
  );
}

export default HandbookPopup;
