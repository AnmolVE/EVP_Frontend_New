import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import generatePDF from "../../../common-js/pdfGenerator";

function HandbookPopup({ isOpen, onClose, handbook_data }) {
  const pdfRef = useRef();

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const fileName = "Handbook_Report.pdf";
    generatePDF(pdfRef.current, fileName);
  };

  return (
    <div className="handbookPopup-overlay">
      <div className="handbookPopup-content">
        <button className="handbookPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <div ref={pdfRef} className="custom_para2 handbookPopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {handbook_data}
          </ReactMarkdown>
        </div>
        <button className="default-btn" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default HandbookPopup;
