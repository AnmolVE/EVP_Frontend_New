import React, { useState } from "react";

import "./PrimaryResearch.css";
import Interview from "./evp-primary-research-interview/Interview";
import ThinkTank from "./evp-primary-research-think-tank/ThinkTank";
import Survey from "./evp-primary-research-survey/Survey";

function PrimaryResearch() {
  const [activeTab, setActiveTab] = useState("Interview");

  return (
    <>
      <div className="evp-primaryResearch">
        <div className="evp-primaryResearch-mainContainer">
          <h2 className="evp-primaryResearch-heading">Primary Research</h2>
          <p className="evp-primaryResearch-para">
            First-hand information adds credibility and depth to your research
          </p>
          <div className="evp-primaryResearch-dataGather">
            <div className="evp-PrimaryResearch-tabs">
              <div
                className={`evp-PrimaryResearch-tab ${
                  activeTab === "Interview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Interview")}
              >
                Interview
              </div>
              <div
                className={`evp-PrimaryResearch-tab ${
                  activeTab === "Think Tank" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Think Tank")}
              >
                Think Tank
              </div>
              <div
                className={`evp-PrimaryResearch-tab ${
                  activeTab === "Survey" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Survey")}
              >
                Survey
              </div>
            </div>
            {activeTab === "Interview" ? <Interview /> : null}
            {activeTab === "Think Tank" ? <ThinkTank /> : null}
            {activeTab === "Survey" ? <Survey /> : null}
          </div>
        </div>
        <div className="evp-primaryResearch-uploadContainer">
          <div className="evp-primaryResearch-documents">
            <p>Upload Documents</p>
            <input placeholder="Upload" />
          </div>
          <div className="evp-primaryResearch-button">
            <button className="default-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryResearch;
