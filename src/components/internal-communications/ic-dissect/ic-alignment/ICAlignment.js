import React from "react";

import "./ICAlignment.css";

function ICAlignment() {
  return (
    <div className="ic-alignment-main-container">
      <div className="ic-alignment-header">
        <p className="ic-alignment-header-paraHeading">Alignment</p>
        <p className="ic-alignment-header-para">
          Validate your Alignments before goes to next step
        </p>
      </div>
      <div className="ic-alignment-content">
        <div className="ic-alignment-content-fields">
          <label>Alignment</label>
          <textarea />
        </div>
      </div>
      <div className="ic-alignment-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICAlignment;
