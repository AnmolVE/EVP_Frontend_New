import React, { useState, useRef, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";

import "./DesignPrinciples.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const questions = [
  "What are the strategic goals for the next 3-5 years?",
  "Do you have an existing EVP? If so, what aspects of it are working well, and what areas need improvement?",
  "What are the key attributes or messages that you want to convey through your EVP?",
  "How would you describe your company culture?",
  "What values are most important to your organization and its employees?",
  "What challenges do you currently face in attracting and retaining top talent?",
  "What are the key reasons employees stay at your company? What are the reasons they leave?",
  "What talent segment(s) do you most want your EVP to target?",
  "How do you differentiate your company's employee experience from competitors?",
  "How do you currently measure employee satisfaction and engagement?",
  "What channels do you use to communicate with employees and potential candidates?",
  "How do you plan to measure the success and impact of the new EVP?",
  "How do you believe your company is perceived by potential candidates in the market?",
  "What are the key messages you want to convey to the market about working at your company?",
  "What are your competitors doing in terms of EVP that you admire or want to differentiate from?",
];

function DesignPrinciples({ companyName, accessToken }) {
  const [fileNames, setFileNames] = useState([]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [designPrinciples, setDesignPrinciples] = useState({});
  const [visibleQuestions, setVisibleQuestions] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = (question) => {
    setVisibleQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const getRotationClass = (question) =>
    visibleQuestions[question] ? "designRotated" : "";

  const getDesignPrinciples = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/design-principles/${companyName}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setDesignPrinciples(responseData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDesignPrinciples();
  }, []);

  console.log(designPrinciples);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesignPrinciples((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/design-principles/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          design_principles: designPrinciples,
        }),
      });
      if (response.ok) {
        alert("data submitted successfully!");
      } else {
        alert("failed to submit data!");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("company_name", companyName);
    files.forEach((file) => {
      formData.append("documents", file);
    });

    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/design-principles/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (response.ok) {
        const responseData = await response.json();
        setDesignPrinciples(responseData);
      }
    } catch (error) {
      console.error("Error adding company documents:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="evp-designPrinciples">
      <div className="evp-designPrinciples-mainContainer">
        <h2 className="custom_h2">Design Principles</h2>
        <p className="custom_para">
          Capture your team's ideas on EVP strategy and vision.
        </p>
        <div className="evp-designPrinciples-questions">
          {questions.map((question, index) => (
            <div
              key={index}
              className="evp-designPrinciples-question-container"
            >
              <div
                className="evp-designPrinciples-question"
                onClick={() => toggleVisibility(`question_${index}`)}
              >
                <label>{`${index + 1}. ${question}`}</label>
                <button className={getRotationClass(`question_${index}`)}>
                  <AiOutlineRight />
                </button>
              </div>
              {visibleQuestions[`question_${index}`] && (
                <textarea
                  className="custom_input"
                  onChange={handleInputChange}
                  name={`question_${index + 1}`}
                  value={designPrinciples[`question_${index + 1}`] || ""}
                  placeholder="Enter Data"
                />
              )}
            </div>
          ))}
          <div className="evp-designPrinciples-button">
            <button onClick={handleSubmit} className="default-btn">
              Save
            </button>
          </div>
        </div>
      </div>
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
            <div className="upload-svg" onClick={handleSVGClick}>
              <BsPaperclip />
              <p>add transcripts</p>
            </div>
          </div>
        </div>
        <div className="uploaded-files">
          {fileNames.map((name, index) => (
            <div key={index} className="uploaded-file-name">
              {name}
            </div>
          ))}
        </div>
        <div className="evp-primaryResearch-button">
          <button className="default-btn" onClick={handleFileSubmit}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesignPrinciples;
