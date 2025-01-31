import React from "react";

function CalendarPopup({ isOpen, onClose, calendar_data }) {
  if (!isOpen) return null;

  return (
    <div className="calendarPopup-overlay">
      <div className="calendarPopup-content">
        <button className="calendarPopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p className="custom_para2 calendarPopup-para">{calendar_data}</p>
      </div>
    </div>
  );
}

export default CalendarPopup;
