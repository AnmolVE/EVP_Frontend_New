import React from "react";

import "./AttributesOfRobustCommunication.css";

function AttributesOfRobustCommunication() {
  return (
    <div className="ic-attributesOfRobustCommunication-main-container">
      <div className="ic-attributesOfRobustCommunication-header">
        <p className="ic-attributesOfRobustCommunication-header-paraHeading">
          Attributes of Robust Communication
        </p>
        <p className="ic-attributesOfRobustCommunication-header-para">
          Validate your Attributes before goes to next step
        </p>
      </div>
      <div className="ic-attributesOfRobustCommunication-content">
        <div className="ic-attributesOfRobustCommunication-content-fields">
          <label>Credibility</label>
          <textarea />
        </div>
        <div className="ic-attributesOfRobustCommunication-content-fields">
          <label>Respect</label>
          <textarea />
        </div>
        <div className="ic-attributesOfRobustCommunication-content-fields">
          <label>Fairness</label>
          <textarea />
        </div>
        <div className="ic-attributesOfRobustCommunication-content-fields">
          <label>Camaraderie</label>
          <textarea />
        </div>
        <div className="ic-attributesOfRobustCommunication-content-fields">
          <label>Pride</label>
          <textarea />
        </div>
      </div>
      <div className="ic-attributesOfRobustCommunication-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default AttributesOfRobustCommunication;
