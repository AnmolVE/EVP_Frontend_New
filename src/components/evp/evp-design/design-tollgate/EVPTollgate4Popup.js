import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import generatePDF from "../../../common/common-js/pdfGenerator";

import "../../../common/common-css/Tollgate.css";

function EVPTollgate4Popup({ isOpen, onClose, tollgate_data }) {
  const pdfRef = useRef();

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const fileName = "Design_Report.pdf";
    generatePDF(pdfRef.current, fileName);
  };

  return (
    <div className="tollgatePopup-overlay">
      <div className="tollgatePopup-content">
        <button className="tollgatePopup-close-button" onClick={onClose}>
          &times;
        </button>
        <div ref={pdfRef} className="custom_para2 tollgatePopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {tollgate_data}
          </ReactMarkdown>
        </div>
        <button className="default-btn" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default EVPTollgate4Popup;
