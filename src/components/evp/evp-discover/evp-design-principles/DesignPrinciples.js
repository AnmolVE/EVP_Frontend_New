import React, { useState, useRef, useEffect } from "react";

import "./DesignPrinciples.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [designPrinciples, setDesignPrinciples] = useState({});
  const [visibleQuestions, setVisibleQuestions] = useState({});

  const toggleVisibility = (question) => {
    setVisibleQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const getDesignPrinciples = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/design-principles/${companyName}/`,
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
    }
  };

  useEffect(() => {
    getDesignPrinciples();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesignPrinciples((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/design-principles/`, {
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

  return (
    <div className="evp-designPrinciples">
      <div className="evp-designPrinciples-mainContainer">
        <h2 className="custom_h2">Design Principles</h2>
        <p className="custom_para">
          First-hand information adds credibility and depth to your research
        </p>
        <div className="evp-designPrinciples-questions">
          {questions.map((question, index) => (
            <div key={index} className="evp-designPrinciples-question">
              <label onClick={() => toggleVisibility(`question_${index}`)}>
                {`${index + 1}. ${question}`}
              </label>
              {visibleQuestions[`question_${index}`] && (
                <textarea
                  className="custom_input"
                  onChange={handleInputChange}
                  name={`question_${index}`}
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
    </div>
  );
}

export default DesignPrinciples;
