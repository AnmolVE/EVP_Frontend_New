import React from "react";

import "./ICKeyThemes.css";

function ICKeyThemes() {
  return (
    <div className="ic-keyThemes-main-container">
      <div className="ic-keyThemes-header">
        <p className="ic-keyThemes-header-paraHeading">Key Themes</p>
        <p className="ic-keyThemes-header-para">
          Validate your Key Themes before goes to next step
        </p>
      </div>
      <div className="ic-keyThemes-content">
        <div className="ic-keyThemes-content-fields">
          <label>Themes being getting communicated</label>
          <textarea />
        </div>
        <div className="ic-keyThemes-content-fields">
          <label>Themes not getting communicated</label>
          <textarea />
        </div>
      </div>
      <div className="ic-keyThemes-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICKeyThemes;
