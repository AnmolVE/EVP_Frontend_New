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

  return (
    <div className="evp-embedment-main-container">
      <div className="evp-embedment-container">
        <div className="evp-embedment-tabs">
          <div
            className={`evp-embedment-tab ${
              activeTab === "Pre-hiring" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Pre-hiring")}
          >
            <p>Pre-hiring</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Hiring" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Hiring")}
          >
            <p>Hiring</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Onboarding" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Onboarding")}
          >
            <p>Onboarding</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Learning & Development" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Learning & Development")}
          >
            <p>Learning & Development</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Compensation & Benefits" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Compensation & Benefits")}
          >
            <p>Compensation & Benefits</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Internal Communications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Internal Communications")}
          >
            <p>Internal Communications</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Employee Engagement" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Employee Engagement")}
          >
            <p>Employee Engagement</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Separation/Exit" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Separation/Exit")}
          >
            <p>Separation/Exit</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Alumni Relations" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Alumni Relations")}
          >
            <p>Alumni Relations</p>
          </div>
        </div>
        <div className="evp-embedment-content-container">
          {activeTab === "Pre-hiring" && <PreHiring />}
          {activeTab === "Hiring" && <Hiring />}
          {activeTab === "Onboarding" && <OnBoarding />}
          {activeTab === "Learning & Development" && <LearningAndDevelopment />}
          {activeTab === "Compensation & Benefits" && (
            <CompensationAndBenefits />
          )}
          {activeTab === "Internal Communications" && (
            <InternalCommunications />
          )}
          {activeTab === "Employee Engagement" && <EmployeeEngagement />}
          {activeTab === "Separation/Exit" && <SeparationExit />}
          {activeTab === "Alumni Relations" && <AlumniRelations />}
        </div>
      </div>
    </div>
  );
}

export default EVPEmbedment;
