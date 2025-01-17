import React from "react";

function EVPTollgate3() {
  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 3</h2>
      <p className="custom_para">
        Validate Dissect analysis and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <p>Download Dissect Report</p>
          <p>Share Dissect Report</p>
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

export default EVPTollgate3;
