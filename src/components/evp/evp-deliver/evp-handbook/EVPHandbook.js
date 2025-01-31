import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { BsJournalBookmark } from "react-icons/bs";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPHandbook.css";
import Loading from "../../../utils/loading/Loading";
import HandbookPopup from "./HandbookPopup";

function EVPHandbook() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [handbookData, setHandbookData] = useState([]);

  const [modalData, setModalData] = useState({
    isOpen: false,
    handbook_data: "",
  });

  const closeModal = () => {
    setModalData({ isOpen: false, handbook_data: "" });
  };

  useEffect(() => {
    if (data) {
      setHandbookData(data);
      setModalData({ isOpen: true });
    }
  }, [data]);

  if (loading) {
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
            <button className="default-btn">Basic Handbook</button>
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
