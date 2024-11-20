import React, { useState, useRef, useEffect } from "react";

import "./DesignPrinciples.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DesignPrinciples({ companyName, accessToken }) {
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const [designPrinciples, setDesignPrinciples] = useState({});

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
    setDesignPrinciples({
      ...designPrinciples,
      [e.target.name]: e.target.value,
    });
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
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data!");
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
    <div className="designPrinciples-main-container">
      <div className="designPrinciples-header">
        <p className="designPrinciples-header-paraHeading">Design Principles</p>
        <p className="designPrinciples-header-para">
          Fill all Design Principles questions before going to next step
        </p>
      </div>
      <div className="designPrinciples-content">
        <div className="designPrinciples-content-left">
          <div className="designPrinciples-input">
            <div className="designPrinciples-input-fields">
              <label>
                What are the strategic goals for the next 3-5 years?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_1"
                value={designPrinciples?.question_1}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                Do you have an existing EVP? If so, what aspects of it are
                working well, and what areas need improvement?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_2"
                value={designPrinciples?.question_2}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What are the key attributes or messages that you want to convey
                through your EVP?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_3"
                value={designPrinciples?.question_3}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>How would you describe your company culture?</label>
              <textarea
                onChange={handleInputChange}
                name="question_4"
                value={designPrinciples?.question_4}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What values are most important to your organization and its
                employees?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_5"
                value={designPrinciples?.question_5}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What challenges do you currently face in attracting and
                retaining top talent?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_6"
                value={designPrinciples?.question_6}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What are the key reasons employees stay at your company? What
                are the reasons they leave?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_7"
                value={designPrinciples?.question_7}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What talent segment(s) do you most want your EVP to target
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_8"
                value={designPrinciples?.question_8}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                How do you differentiate your company's employee experience from
                competitors?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_9"
                value={designPrinciples?.question_9}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                How do you currently measure employee satisfaction and
                engagement?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_10"
                value={designPrinciples?.question_10}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What channels do you use to communicate with employees and
                potential candidates?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_11"
                value={designPrinciples?.question_11}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                How do you plan to measure the success and impact of the new
                EVP?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_12"
                value={designPrinciples?.question_12}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                How do you believe your company is perceived by potential
                candidates in the market?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_13"
                value={designPrinciples?.question_13}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What are the key messages you want to convey to the market about
                working at your company?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_14"
                value={designPrinciples?.question_14}
              />
            </div>
            <div className="designPrinciples-input-fields">
              <label>
                What are your competitors doing in terms of EVP that you admire
                or want to differentiate from?
              </label>
              <textarea
                onChange={handleInputChange}
                name="question_15"
                value={designPrinciples?.question_15}
              />
            </div>
          </div>
          <div className="designPrinciples-button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="designPrinciples-content-right">
          <div className="designPrinciples-content-right-container">
            <h1>Add Design Documents</h1>
            <form
              className="designPrinciples-content-right-container-form"
              onSubmit={handleSubmit}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                multiple
              />
              <div
                className="designPrinciples-content-right-container-file-display-area"
                onClick={handleSVGClick}
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
    </div>
  );
}

export default DesignPrinciples;
