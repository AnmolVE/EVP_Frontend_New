import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  evpStatementImg1,
  evpStatementImg2,
  evpStatementImg3,
  evpStatementImg4,
} from "../../../../assets/images/images";

import "./EVPStatement.css";

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
    <div className="evp-messagingHierarchy">
      <h2 className="custom_h2">Generate EVP Statement</h2>
      <p className="custom_para">
        The EVP will be created on the selected theme - all others will become
        secondary pillars
      </p>
      <div className="evp-messagingHierarchy-container">
        <div className="evp-messagingHierarchy-themes">
          {evpStatementData.map((theme) => (
            <div
              key={theme.id}
              className={`evp-messagingHierarchy-theme ${
                activeTab === theme.theme_name ? "active-theme" : ""
              }`}
              onClick={() => handleTabClick(theme.theme_name)}
            >
              <p>{theme.theme_name}</p>
            </div>
          ))}
        </div>
        <div className="evp-messagingHierarchy-mainContent">
          {evpStatementData.map((theme, index) =>
            activeTab === theme.theme_name ? (
              <div key={theme.id} className="evp-messagingHierarchy-data">
                <div className="evp-messagingHierarchy-data-image">
                  <figure className="evp-messagingHierarchy-data-image-fig">
                    <img src={images[index]} alt="Image" />
                  </figure>
                  <button className="default-btn">Generate EVP</button>
                </div>
                <div className="evp-messagingHierarchy-data-desc">
                  <p className="custom_para2">{theme.theme_desc}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagingHierarchy;
