import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function HandbookPopup({ isOpen, onClose, handbook_data }) {
  if (!isOpen) return null;

  return (
    <div className="handbookPopup-overlay">
      <div className="handbookPopup-content">
        <button className="handbookPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 handbookPopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {handbook_data}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default HandbookPopup;
