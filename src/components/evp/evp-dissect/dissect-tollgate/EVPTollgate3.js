import React, { useState } from "react";

import { MdFileDownload } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

import Loading from "../../../utils/loading/Loading";
import EVPTollgate3Popup from "./EVPTollgate3Popup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPTollgate3({ companyName, accessToken }) {
  const [tollgate3Data, setTollgate3Data] = useState([]);
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
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-tollgate3/`, {
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
      setTollgate3Data(responseData.data);
      setIsChecked(responseData.data.tollgate3_is_check);
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
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-tollgate3/`, {
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
            <button className="default-btn" onClick={() => handleCreateClick()}>
              Create Dissect Report
            </button>
          </div>
          <div className="tollgate-boxes-top-box">
            <span>
              <FaShareSquare />
            </span>
            <button className="default-btn">Share Dissect Report</button>
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
      <EVPTollgate3Popup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        tollgate_data={tollgate3Data.tollgate3_basic}
      />
    </div>
  );
}

export default EVPTollgate3;
