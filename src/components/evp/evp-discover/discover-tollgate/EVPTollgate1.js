import React, { useState } from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

import "../../../common/Tollgate.css";
import Loading from "../../../utils/loading/Loading";
import EVPTollgate1Popup from "./EVPTollgate1Popup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPToolgate1({ companyName, accessToken }) {
  const [tollgate1Data, setTollgate1Data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modalData, setModalData] = useState({
    isOpen: false,
    tollgate_data: "",
  });

  const closeModal = () => {
    setModalData({ isOpen: false, tollgate_data: "" });
  };

  const handleCreateClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-tollgate1/`, {
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
      setTollgate1Data(data);
      setModalData({ isOpen: true });
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
      <h2 className="custom_h2">Tollgate 1</h2>
      <p className="custom_para">
        Validate Discovery data and get approval from key stakeholders
      </p>
      <div className="tollgate-boxes">
        <div className="tollgate-boxes-top">
          <div className="tollgate-boxes-top-box">
            <span>
              <MdFileDownload />
            </span>
            <button className="default-btn" onClick={() => handleCreateClick()}>
              Create Discovery Report
            </button>
          </div>
          <div className="tollgate-boxes-top-box">
            <span>
              <FaShareSquare />
            </span>
            <button className="default-btn">Share Discovery Report</button>
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
      <EVPTollgate1Popup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        tollgate_data={tollgate1Data.tollgate_data}
      />
    </div>
  );
}

export default EVPToolgate1;
