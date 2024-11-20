import React from "react";

import "./ICCalendar.css";

function ICCalender() {
  return (
    <div className="ic-calendar-main-container">
      <div className="ic-calendar-header">
        <p className="ic-calendar-header-paraHeading">Calendar</p>
        <p className="ic-calendar-header-para">
          Validate your Calendar before goes to next step
        </p>
      </div>
      <div className="ic-calendar-content">
        <div className="ic-calendar-content-fields">
          <label>Calendar</label>
          <textarea />
        </div>
      </div>
      <div className="ic-calendar-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICCalender;
