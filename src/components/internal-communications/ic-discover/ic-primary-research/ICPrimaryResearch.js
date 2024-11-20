import React, { useState } from "react";

import "./ICPrimaryResearch.css";
import ICInterview from "./ic-interview/ICInterview";
import ICThinkTank from "./ic-think-tank/ICThinkTank";
import ICSurvey from "./ic-survey/ICSurvey";
import ICUpload from "./ic-upload/ICUpload";

function ICPrimaryResearch() {
  const [activeTab, setActiveTab] = useState("Interview");

  return (
    <div className="ic-primaryResearch-main-container">
      <div className="ic-primaryResearch-container">
        <div className="ic-primaryResearch-info">
          <div className="primaryResearch-information-top">
            <p className="primaryResearch-information-top-para-heading">
              Primary Research
            </p>
            <p className="primaryResearch-para">
              First-hand information adds credibility and depth to your research
            </p>
            <p className="primaryResearch-info-para">
              The result is a strong and compelling EVP that is equal parts
              credible as well as aspirational and accurately represents the
              views of the most important stakeholders.
            </p>
          </div>
          <hr />
          <div className="primaryResearch-information-bottom">
            <h4>Talent Cohorts to Cover</h4>
            <ul className="primaryResearch-information-bottom-unordered-list">
              <li>Current Employees</li>
              <li>Ex-Employees</li>
              <li>Interviewing Candidates</li>
              <li>Candidates who refused to offer</li>
              <li>Clients (if possible)</li>
              <li>Headhunters and recruiters</li>
              <li>Core EVP team</li>
            </ul>
          </div>
        </div>
        <div className="ic-primaryResearch-upload">
          <div className="ic-primaryResearch-upload-tabs">
            <div
              className={`ic-primaryResearch-upload-tab ${
                activeTab === "Interview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Interview")}
            >
              <p>Interview</p>
            </div>
            <div
              className={`ic-primaryResearch-upload-tab ${
                activeTab === "Think Tank" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Think Tank")}
            >
              <p>Think Tank</p>
            </div>
            <div
              className={`ic-primaryResearch-upload-tab ${
                activeTab === "Survey" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Survey")}
            >
              <p>Survey</p>
            </div>
            <div
              className={`ic-primaryResearch-upload-tab ${
                activeTab === "Upload" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Upload")}
            >
              <p>Upload</p>
            </div>
          </div>
          <div className="ic-primaryResearch-upload-container">
            {activeTab === "Interview" && <ICInterview />}
            {activeTab === "Think Tank" && <ICThinkTank />}
            {activeTab === "Survey" && <ICSurvey />}
            {activeTab === "Upload" && <ICUpload />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICPrimaryResearch;
