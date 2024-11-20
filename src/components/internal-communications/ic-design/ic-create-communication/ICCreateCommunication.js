import React from "react";

import "./ICCreateCommunication.css";

function ICCreateCommunication() {
  return (
    <div className="ic-createCommunication-main-container">
      <div className="ic-createCommunication-header">
        <p className="ic-createCommunication-header-paraHeading">
          Create Communication
        </p>
        <p className="ic-createCommunication-header-para">
          Validate your Create Communication before goes to next step
        </p>
      </div>
      <div className="ic-createCommunication-content">
        <div className="ic-createCommunication-content-fields">
          <label>Create Communication</label>
          <textarea />
        </div>
      </div>
      <div className="ic-createCommunication-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICCreateCommunication;
