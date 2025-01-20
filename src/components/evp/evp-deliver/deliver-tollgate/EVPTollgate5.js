import React from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

function EVPTollgate5() {
  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 5</h2>
      <p className="custom_para">
        Validate Delivery deliverables and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <div className="tollgate-boxes-top-box">
            <span>
              <MdFileDownload />
            </span>
            <button className="default-btn">Download Delivery Report</button>
          </div>
          <div className="tollgate-boxes-top-box">
            <span>
              <FaShareSquare />
            </span>
            <button className="default-btn">Share Delivery Report</button>
          </div>
        </div>
        <div className="tollgate-boxes-bottom">
          <input type="checkbox" />
          <p className="custom_para2">
            I confirm that this section has been validated and approved by key
            stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EVPTollgate5;
