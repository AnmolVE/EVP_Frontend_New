import React from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

function EVPTollgate4() {
  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 4</h2>
      <p className="custom_para">
        Validate Design outcomes and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <div className="tollgate-boxes-top-box">
            <span>
              <MdFileDownload />
            </span>
            <button className="default-btn">Download Design Report</button>
          </div>
          <div className="tollgate-boxes-top-box">
            <span>
              <FaShareSquare />
            </span>
            <button className="default-btn">Share Design Report</button>
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

export default EVPTollgate4;
