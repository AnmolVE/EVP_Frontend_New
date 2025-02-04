import React from 'react'

import "../../../common/Tollgate.css";

function EVPTollgate4Popup({ isOpen, onClose, tollgate_data }) {
    if (!isOpen) return null;

  return (
    <div className="tollgatePopup-overlay">
      <div className="tollgatePopup-content">
        <button className="tollgatePopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 tollgatePopup-para">{tollgate_data}</p>
      </div>
    </div>
  );
}

export default EVPTollgate4Popup
