import React from "react";

import "./Interview.css";

function Interview() {
  return (
    <div className="evp-interview">
      <div className="evp-interview-addPeople">
        <p>Add People</p>
        <div className="evp-interview-addPeople-input">
          <input placeholder="Username" />
          <input placeholder="Email" />
          <button>+</button>
        </div>
      </div>
      <div className="evp-interview-scheduleCalendly">
        <p>Schedule Calendly</p>
        <input placeholder="Calendly Link" />
      </div>
      <div className="evp-interview-button">
        <button className="default-btn">Create</button>
      </div>
    </div>
  );
}

export default Interview;
