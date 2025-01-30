import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

import Loading from "../../../utils/loading/Loading";

function EVPTollgate3() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [tollgate3Data, setTollgate3Data] = useState([]);
  console.log(tollgate3Data);

  useEffect(() => {
    if (data) {
      setTollgate3Data(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="tollgate-container">
      <h2 className="custom_h2">Tollgate 3</h2>
      <p className="custom_para">
        Validate Dissect analysis and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <div className="tollgate-boxes-top-box">
            <span>
              <MdFileDownload />
            </span>
            <button className="default-btn">Download Dissect Report</button>
          </div>
          <div className="tollgate-boxes-top-box">
            <span>
              <FaShareSquare />
            </span>
            <button className="default-btn">Share Dissect Report</button>
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
      <div>{tollgate3Data.tollgate3_data}</div>
    </div>
  );
}

export default EVPTollgate3;
