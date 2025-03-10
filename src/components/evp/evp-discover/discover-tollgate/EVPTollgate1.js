import React, { useState } from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

import "../../../common/common-css/Tollgate.css";
import Loading from "../../../utils/loading/Loading";
import EVPTollgate1Popup from "./EVPTollgate1Popup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPToolgate1({ companyName, accessToken }) {
  const [tollgate1Data, setTollgate1Data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
      const responseData = await response.json();
      setTollgate1Data(responseData.data);
      setIsChecked(responseData.data.tollgate1_is_check);
      setModalData({ isOpen: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = async (e) => {
    const checked = e.target.checked;
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
          is_check: checked,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(
          responseData.error || "Failed to update verification status"
        );
      }
      alert(responseData.message);
      setIsChecked(true);
    } catch (error) {
      alert(error.message);
      e.target.checked = false;
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
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            // disabled={isChecked}
          />
          <p className="custom_para2">
            I confirm that this section has been validated and approved by key
            stakeholders.
          </p>
        </div>
      </div>
      <EVPTollgate1Popup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        tollgate_data={tollgate1Data.tollgate1_basic}
      />
    </div>
  );
}

export default EVPToolgate1;
