import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function CalendarPopup({ isOpen, onClose, calendar_data }) {
  if (!isOpen) return null;

  return (
    <div className="calendarPopup-overlay">
      <div className="calendarPopup-content">
        <button className="calendarPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 calendarPopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {calendar_data}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default CalendarPopup;
