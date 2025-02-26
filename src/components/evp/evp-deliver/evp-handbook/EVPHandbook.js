import React, { useState } from "react";

import { BsJournalBookmark } from "react-icons/bs";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPHandbook.css";
import Loading from "../../../utils/loading/Loading";
import HandbookPopup from "./HandbookPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPHandbook({ companyName, accessToken }) {
  const [handbookData, setHandbookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modalData, setModalData] = useState({
    isOpen: false,
    handbook_data: "",
  });

  const closeModal = () => {
    setModalData({ isOpen: false, handbook_data: "" });
  };

  const handleHandbookCreate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-handbook/`, {
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
        throw new Error("Failed to generate handbook");
      }

      const responseData = await response.json();
      setHandbookData(responseData.data);
    } catch (error) {
      console.error("Error generating handbook:", error);
      alert("An error occurred while generating handbook.");
    } finally {
      setIsLoading(false);
    }
    setModalData({ isOpen: true });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="evp-handbook">
      <h2 className="custom_h2">EVP Handbook</h2>
      <p className="custom_para">
        Download a PDF summarising all EVP information to date.
      </p>
      <div className="evp-handbook-content">
        <div className="evp-handbook-buttons">
          <div className="evp-handbook-buttons-tab">
            <span>
              <BsJournalBookmark />
            </span>
            <button className="default-btn" onClick={handleHandbookCreate}>
              Basic Handbook
            </button>
          </div>
          <div className="evp-handbook-buttons-tab">
            <span>
              <VscGitPullRequestGoToChanges />
            </span>
            <button className="default-btn">Premium Handbook</button>
          </div>
        </div>
      </div>
      <HandbookPopup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        handbook_data={handbookData.handbook_data}
      />
    </div>
  );
}

export default EVPHandbook;
