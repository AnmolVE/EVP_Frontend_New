import React from "react";

function EVPTollgate2() {
  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 2</h2>
      <p className="custom_para">
        Validate Develop learnings and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <p>Download Develop Report</p>
          <p>Share Develop Report</p>
        </div>
        <div className="tollgate-boxes-bottom">
          <input type="checkbox" />
          <p>
            I confirm that this section has been validated and approved by key
            stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EVPTollgate2;
