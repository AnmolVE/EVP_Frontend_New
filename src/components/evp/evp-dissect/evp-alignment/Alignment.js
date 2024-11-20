import React from "react";

function Alignment() {
  return (
    <div className="evp-analysis">
      <h2 className="evp-analysis-heading">Analysis</h2>
      <p className="evp-analysis-para">
        Validate your Attributes data before goes to next step
      </p>
      <div className="evp-analysis-container">
        <div className="evp-analysis-input">
          <p>What we want to be known for</p>
          <textarea placeholder="Enter data" />
        </div>
        <div className="evp-analysis-button">
          <button className="default-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Alignment;
