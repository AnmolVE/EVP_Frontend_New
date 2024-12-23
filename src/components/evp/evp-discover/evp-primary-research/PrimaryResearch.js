import React, { useState, useRef } from "react";
import { HiInformationCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./PrimaryResearch.css";
import Interview from "./evp-primary-research-interview/Interview";
import ThinkTank from "./evp-primary-research-think-tank/ThinkTank";
import Survey from "./evp-primary-research-survey/Survey";

import "../UploadBox.css";

function PrimaryResearch({ companyName }) {
  const [activeTab, setActiveTab] = useState("Interview");

  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleSVGClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="evp-primaryResearch">
        <div className="evp-primaryResearch-mainContainer">
          <h2 className="custom_h2">Primary Research</h2>
          <p className="custom_para">
            Add first-hand insights to strengthen your EVP foundation.
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
            {activeTab === "Interview" ? (
              <Interview companyName={companyName} />
            ) : null}
            {activeTab === "Think Tank" ? (
              <ThinkTank companyName={companyName} />
            ) : null}
            {activeTab === "Survey" ? <Survey /> : null}
          </div>
        </div>
        <div className="evp-primaryResearch-right">
          <div className="evp-primaryResearch-uploadContainer">
            <div className="evp-primaryResearch-documents">
              <p>Upload Documents</p>
              <input
                type="file"
                style={{ display: "none" }}
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <div className="upload-area" onClick={handleSVGClick}>
                <div className="upload-svg">
                  <svg
                    fill="#000000"
                    height="20"
                    width="20"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0c-54.013,0-97.955,43.943-97.955,97.955v338.981c0,41.39,33.674,75.064,75.064,75.064
                        c41.39,0,75.064-33.674,75.064-75.064V122.511c0-28.327-23.046-51.375-51.375-51.375c-28.327,0-51.374,23.047-51.374,51.375
                        v296.911h31.347V122.511c0-11.042,8.984-20.028,20.028-20.028s20.028,8.985,20.028,20.028v314.424
                        c0,24.106-19.612,43.717-43.718,43.717c-24.106,0-43.717-19.612-43.717-43.717V97.955c0-36.727,29.88-66.608,66.608-66.608
                        s66.608,29.881,66.608,66.608v321.467h31.347V97.955C353.955,43.943,310.013,0,256,0z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="uploaded-files">
                  {fileNames.map((name, index) => (
                    <div key={index} className="uploaded-file-name">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="evp-primaryResearch-button">
              <button className="default-btn">Submit</button>
            </div>
          </div>
          <div className="evp-primaryResearch-resources">
            {/* <div className="widget widget_categories">
                <h3 className="widget-title">Useful Resources</h3>

                <div className="post-wrap">
                  <ul>
                    <li>
                      <a
                        href="/assets/docs/Interview.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Interview
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets\docs\ThinkTank.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Think Tank
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets\docs\Survey.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Survey
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            <div className="evp-primaryResearch-resources-header">
              <h3>Useful Resources</h3>
              <span
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <HiInformationCircle />
                {showTooltip && (
                  <div className="useful-resource-tooltip">
                    These are the useful resources for your reference, and you
                    can follow the steps which are written in the available
                    PDFs.
                  </div>
                )}
              </span>
            </div>
            <div className="evp-primaryResearch-resources-links">
              <div>
                <a
                  href="assets\docs\Interview.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interview
                </a>
                <hr />
              </div>
              <div>
                <a
                  href="assets\docs\ThinkTank.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Think Tank
                </a>
                <hr />
              </div>
              <div>
                <a
                  href="assets\docs\Survey.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryResearch;
