import React, { useState } from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

import Loading from "../../../utils/loading/Loading";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPTollgate4({ companyName, accessToken }) {
  const [tollgate4Data, setTollgate4Data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-tollgate4/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate data");
      }
      const data = await response.json();
      setTollgate4Data(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
            <button className="default-btn" onClick={() => handleCreateClick()}>
              Create Design Report
            </button>
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
      <div>{tollgate4Data.tollgate4_data}</div>
    </div>
  );
}

export default EVPTollgate4;
