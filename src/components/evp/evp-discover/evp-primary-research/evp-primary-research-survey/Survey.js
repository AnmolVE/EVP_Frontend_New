import React from "react";

import "./Survey.css";

function Survey() {
  return (
    <div className="evp-survey">
      <div className="evp-survey-create">
        <p>Survey</p>
        <input className="custom_input" placeholder="Link to Survey" />
        <a href="https://www.google.com/" target="_blank">
          Create Survey
        </a>
      </div>
      <div className="evp-survey-addPeople">
        <p>Add People</p>
        <div className="evp-survey-addPeople-input">
          <input className="custom_input" placeholder="Name" />
          <input className="custom_input" placeholder="Email" />
        </div>
      </div>
      <div className="evp-survey-button">
        <button className="default-btn">Create</button>
      </div>
    </div>
  );
}

export default Survey;
