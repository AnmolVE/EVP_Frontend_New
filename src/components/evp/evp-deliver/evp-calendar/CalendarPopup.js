import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import generatePDF from "../../../common/common-js/pdfGenerator";

function CalendarPopup({ isOpen, onClose, calendar_data }) {
  const pdfRef = useRef();

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const fileName = "Calender_Report.pdf";
    generatePDF(pdfRef.current, fileName);
  };

  return (
    <div className="calendarPopup-overlay">
      <div className="calendarPopup-content">
        <button className="calendarPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <div ref={pdfRef} className="custom_para2 calendarPopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {calendar_data}
          </ReactMarkdown>
        </div>
        <button className="default-btn" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default CalendarPopup;
