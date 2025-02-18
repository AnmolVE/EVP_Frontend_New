import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../../common/Tollgate.css";

function EVPTollgate3Popup({ isOpen, onClose, tollgate_data }) {
  if (!isOpen) return null;

  return (
    <div className="tollgatePopup-overlay">
      <div className="tollgatePopup-content">
        <button className="tollgatePopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 tollgatePopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {tollgate_data}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default EVPTollgate3Popup;
