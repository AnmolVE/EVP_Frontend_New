import React from "react";

function EVPToolgate1() {
  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 1</h2>
      <p className="custom_para">
        Validate Discovery data and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <p>Download Discovery Report</p>
          <p>Share Discovery Report</p>
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

export default EVPToolgate1;
