import React from "react";

import "./ThinkTank.css";

function ThinkTank() {
  return (
    <div className="evp-thinkTank">
      <div className="evp-thinkTank-addPeople">
        <p>Add People</p>
        <div className="evp-thinkTank-addPeople-input">
          <input placeholder="Username" />
          <input placeholder="Email" />
          <button>+</button>
        </div>
      </div>
      <div className="evp-thinkTank-button">
        <button className="default-btn">Create</button>
      </div>
    </div>
  );
}

export default ThinkTank;
