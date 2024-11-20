import React from "react";

import "./ICCurrentStrategy.css";

function ICCurrentStrategy() {
  return (
    <div className="ic-currentStrategy-main-container">
      <div className="ic-currentStrategy-header">
        <p className="ic-currentStrategy-header-paraHeading">
          Current Strategy
        </p>
        <p className="ic-currentStrategy-header-para">
          Validate your Current Strategy before goes to next step
        </p>
      </div>
      <div className="ic-currentStrategy-content">
        <div className="ic-currentStrategy-content-fields">
          <label>Current Strategy</label>
          <textarea />
        </div>
      </div>
      <div className="ic-currentStrategy-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICCurrentStrategy;
