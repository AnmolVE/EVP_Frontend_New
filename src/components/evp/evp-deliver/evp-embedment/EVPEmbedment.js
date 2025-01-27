import React, { useState } from "react";

import "./EVPEmbedment.css";
import PreHiring from "./PreHiring";
import Hiring from "./Hiring";
import OnBoarding from "./OnBoarding";
import LearningAndDevelopment from "./LearningAndDevelopment";
import CompensationAndBenefits from "./CompensationAndBenefits";
import InternalCommunications from "./InternalCommunications";
import EmployeeEngagement from "./EmployeeEngagement";
import SeparationExit from "./SeparationExit";
import AlumniRelations from "./AlumniRelations";

function EVPEmbedment({ companyName, accessToken }) {
  const [activeTab, setActiveTab] = useState("Pre-hiring");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [showInputBox, setShowInputBox] = useState(false);

  const tabs = [
    "Pre-hiring",
    "Hiring",
    "Onboarding",
    "Learning & Development",
    "Compensation & Benefits",
    "Internal Communications",
    "Employee Engagement",
    "Separation/Exit",
    "Alumni Relations",
  ];

  return (
    <div className="evp-embedment-main-container">
      <div className="evp-embedment-container">
        <div className="evp-embedment-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`evp-embedment-tab ${
                activeTab === tab || hoveredTab === tab
                  ? "expanded"
                  : "collapsed"
              }`}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={() => setHoveredTab(tab)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <p>{activeTab === tab || hoveredTab === tab ? tab : index + 1}</p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="default-btn"
            onClick={() => setShowInputBox(!showInputBox)}
          >
            {showInputBox ? "-" : "+"}
          </button>
        </div>
        {showInputBox && (
          <div className="embedment-input-box">
            <label>label 1</label>
            <input type="text" placeholder="enter data" />
            <label>label 1</label>
            <input type="text" placeholder="enter data" />
            <label>label 1</label>
            <input type="text" placeholder="enter data" />
          </div>
        )}
        <div className="evp-embedment-content-container">
          {activeTab === "Pre-hiring" && (
            <PreHiring
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Hiring" && (
            <Hiring
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Onboarding" && (
            <OnBoarding
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Learning & Development" && (
            <LearningAndDevelopment
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Compensation & Benefits" && (
            <CompensationAndBenefits
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Internal Communications" && (
            <InternalCommunications
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Employee Engagement" && (
            <EmployeeEngagement
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Separation/Exit" && (
            <SeparationExit
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
          {activeTab === "Alumni Relations" && (
            <AlumniRelations
              companyName={companyName}
              accessToken={accessToken}
              activeTab={activeTab}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EVPEmbedment;
