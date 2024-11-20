import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./PrimaryResearch.css";
import Interview from "./interview/Interview";
import ThinkTank from "./think-tank/ThinkTank";
import Survey from "./survey/Survey";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function PrimaryResearch() {
  const companyName = localStorage.getItem("companyName");
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens.access;

  const [activeTab, setActiveTab] = useState("Interview");

  const [calendlyLink, setCalendlyLink] = useState("");

  const [interviewInputFields, setInterviewInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxInterviewInputFields = 5;

  const [thinkTanks, setThinkTanks] = useState([
    { id: 1, emails: [{ id: 1, value: "" }] },
  ]);
  const maxThinkTanks = 5;
  const maxThinkTankInputFields = 10;

  // const [transcript, setTranscript] = useState("");
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [transcriptFiles, setTranscriptFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleInterviewInputFieldChange = (index, field, value) => {
    const newFields = [...interviewInputFields];
    newFields[index][field] = value;
    setInterviewInputFields(newFields);
  };

  const handleAddInterviewInputField = () => {
    if (interviewInputFields.length < maxInterviewInputFields) {
      setInterviewInputFields([
        ...interviewInputFields,
        { id: interviewInputFields.length + 1, name: "", email: "" },
      ]);
    } else {
      alert("Not allowed to add more than 5 input fields");
    }
  };

  const handleSendInterviewEmails = () => {
    const interviewEmailAddresses = interviewInputFields
      .map((field) => field.name && field.email)
      .filter((email) => email);
    if (interviewEmailAddresses.length > 0) {
      const subject = "Interview Invitation";
      const body = `Dear Candidate,\n\nYou have been selected to participate in an Employee Value Proposition (EVP) development exercise.\nPlease click on the link below to select a suitable slot for the 1-to-1 interview:\n\n${calendlyLink}\n\nBest regards,\n${companyName}`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        interviewEmailAddresses.join(",")
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    } else {
      alert("Please enter at least one email address");
    }
  };

  const handleAddThinkTank = () => {
    if (thinkTanks.length < maxThinkTanks) {
      setThinkTanks([
        ...thinkTanks,
        { id: thinkTanks.length + 1, emails: [{ id: 1, value: "" }] },
      ]);
    } else {
      alert("Not allowed to add more than 5 Think Tanks");
    }
  };

  const handleAddThinkTankInputField = (thinkTankIndex) => {
    const newThinkTanks = [...thinkTanks];
    if (newThinkTanks[thinkTankIndex].emails.length < maxThinkTankInputFields) {
      newThinkTanks[thinkTankIndex].emails.push({
        id: newThinkTanks[thinkTankIndex].emails.length + 1,
        value: "",
      });
      setThinkTanks(newThinkTanks);
    } else {
      alert("Not allowed to add more than 10 email addresses");
    }
  };

  const handleTranscriptFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setTranscriptFiles(selectedFiles);
  };

  const handleTranscriptSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleTranscriptSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    transcriptFiles.forEach((file) => {
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
        console.log(data);
      } else {
        console.error("Failed to submit transcript:");
      }
    } catch (error) {
      console.error("Error submitting transcript:", error);
    }
  };

  return (
    <>
      <div className="primaryResearch-main-container">
        <div className="primaryResearch-information">
          <div className="primaryResearch-information-top">
            <p className="primaryResearch-information-top-para-heading">
              Primary Research
            </p>
            <p className="primaryResearch-para">
              First-hand information adds credibility and depth to your research
            </p>
          </div>
          <div className="primaryResearch-conduct">
            <div className="primaryResearch-conduct-tabs">
              <div
                className={`primaryResearch-conduct-tabs-name ${
                  activeTab === "Interview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Interview")}
              >
                <p>Interview</p>
              </div>
              <div
                className={`primaryResearch-conduct-tabs-name ${
                  activeTab === "Think Tank" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Think Tank")}
              >
                <p>Think Tank</p>
              </div>
              <div
                className={`primaryResearch-conduct-tabs-name ${
                  activeTab === "Survey" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Survey")}
              >
                <p>Survey</p>
              </div>
            </div>
            <div className="primaryResearch-conduct-content">
              {activeTab === "Interview" ? (
                <Interview />
              ) : activeTab === "Think Tank" ? (
                <ThinkTank />
              ) : activeTab === "Survey" ? (
                <Survey />
              ) : null}
            </div>
          </div>
        </div>
        <div className="primaryResearch-upload-container">
          <div className="designPrinciples-content-right-container">
            <h1>Add Documents</h1>
            <form
              className="designPrinciples-content-right-container-form"
              onSubmit={handleTranscriptSubmit}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleTranscriptFileChange}
                style={{ display: "none" }}
                multiple
              />
              <div
                className="designPrinciples-content-right-container-file-display-area"
                onClick={handleTranscriptSVGClick}
              >
                <div className="designPrinciples-content-right-container-file-svg">
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
                <div className="designPrinciples-content-right-container-files">
                  {fileNames.map((name, index) => (
                    <div
                      key={index}
                      className="designPrinciples-content-right-container-file-name"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="designPrinciples-content-right-container-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryResearch;
