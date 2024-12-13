import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  evpStatementImg1,
  evpStatementImg2,
  evpStatementImg3,
  evpStatementImg4,
} from "../../../../assets/images/images";

import "./EVPStatement.css";
import GenerateEVP from "./GenerateEVP";

function MessagingHierarchy() {
  const { data } = useSelector((store) => store.inputField);

  const [evpStatementData, setEvpStatementData] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  const images = [
    evpStatementImg1,
    evpStatementImg2,
    evpStatementImg3,
    evpStatementImg4,
  ];

  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const handleGenerateEVP = (title, content, image) => {
    setModalData({ isOpen: true });
  };

  const closeModal = () => {
    setModalData({ isOpen: false });
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpStatementData(data);
      setActiveTab(data[0]?.theme_name);
    }
  }, [data]);

  const handleTabClick = (themeName) => {
    setActiveTab(themeName);
  };

  return (
    <div className="evp-statement">
      <h2 className="custom_h2">Generate EVP Statement</h2>
      <p className="custom_para">
        The EVP will be created on the selected theme - all others will become
        secondary pillars
      </p>
      <div className="evp-statement-container">
        <div className="evp-statement-themes">
          {evpStatementData.map((theme) => (
            <div
              key={theme.id}
              className={`evp-statement-theme ${
                activeTab === theme.theme_name ? "active-theme" : ""
              }`}
              onClick={() => handleTabClick(theme.theme_name)}
            >
              <p>{theme.theme_name}</p>
            </div>
          ))}
        </div>
        <div className="evp-statement-mainContent">
          {evpStatementData.map((theme, index) =>
            activeTab === theme.theme_name ? (
              <div key={theme.id} className="evp-statement-data">
                <div className="evp-statement-data-image">
                  <figure className="evp-statement-data-image-fig">
                    <img src={images[index]} alt="Image" />
                  </figure>
                  <button
                    className="default-btn"
                    onClick={() => handleGenerateEVP()}
                  >
                    Generate EVP
                  </button>
                </div>
                <div className="evp-statement-data-desc">
                  <p className="custom_para2">{theme.theme_desc}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <GenerateEVP isOpen={modalData.isOpen} onClose={closeModal} />
    </div>
  );
}

export default MessagingHierarchy;
