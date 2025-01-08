import React, { useState, useRef } from "react";
import { HiInformationCircle } from "react-icons/hi2";
import { BsPaperclip } from "react-icons/bs";

import "./PrimaryResearch.css";
import "../UploadBox.css";

import Interview from "./evp-primary-research-interview/Interview";
import ThinkTank from "./evp-primary-research-think-tank/ThinkTank";
import Survey from "./evp-primary-research-survey/Survey";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function PrimaryResearch({ companyName, accessToken }) {
  const [activeTab, setActiveTab] = useState("Interview");

  const [fileNames, setFileNames] = useState(["Add documents"]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);

  const [pdfAlert, setPdfAlert] = useState(false);
  const [transcriptSuccess, setTranscriptSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const pdfFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf"
    );

    if (pdfFiles.length !== selectedFiles.length) {
      setPdfAlert(true);
      fileInputRef.current.value = null;
      return;
    }

    const fileNames = pdfFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(pdfFiles);
  };

  const handleSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleTranscriptSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("documents", file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/transcript/${companyName}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFileNames(["Upload documents"]);
        setTranscriptSuccess(true);
      } else {
        console.error("Failed to submit transcript:");
      }
    } catch (error) {
      console.error("Error submitting transcript:", error);
    }
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
              <div className="upload-area">
                <div className="uploaded-files">
                  {fileNames.map((name, index) => (
                    <div key={index} className="uploaded-file-name">
                      {name}
                    </div>
                  ))}
                </div>
                <div className="upload-svg" onClick={handleSVGClick}>
                  <BsPaperclip />
                </div>
              </div>
            </div>
            {pdfAlert && (
              <div className="pop-messages">
                <p>Only PDF format supported</p>
              </div>
            )}
            {transcriptSuccess && (
              <div className="pop-messages">
                <p>Transcripts added successfully</p>
              </div>
            )}
            <div className="evp-primaryResearch-button">
              <button className="default-btn" onClick={handleTranscriptSubmit}>
                Upload
              </button>
            </div>
          </div>
          <div className="evp-primaryResearch-resources">
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
