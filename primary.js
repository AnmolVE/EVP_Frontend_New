import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./PrimaryResearch.css";
import Interview from "./interview/Interview";
import ThinkTank from "./think-tank/ThinkTank";
import Survey from "./survey/Survey";
import Upload from "./upload/Upload";

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
        <div className="primaryResearch-dataGather">
          <div className="primaryResearch-dataGather-tabs">
            <div
              className={`primaryResearch-dataGather-tabs-name ${
                activeTab === "Interview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Interview")}
            >
              <p>Interview</p>
            </div>
            <div
              className={`primaryResearch-dataGather-tabs-name ${
                activeTab === "Think Tank" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Think Tank")}
            >
              <p>Think Tank</p>
            </div>
            <div
              className={`primaryResearch-dataGather-tabs-name ${
                activeTab === "Survey" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Survey")}
            >
              <p>Survey</p>
            </div>
            <div
              className={`primaryResearch-dataGather-tabs-name ${
                activeTab === "Upload" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Upload")}
            >
              <p>Upload</p>
            </div>
          </div>
          <div className="primaryResearch-dataGather-content">
            {activeTab === "Interview" ? (
              <Interview />
            ) : activeTab === "Think Tank" ? (
              <ThinkTank />
            ) : activeTab === "Survey" ? (
              <Survey />
            ) : activeTab === "Upload" ? (
              <Upload />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryResearch;
