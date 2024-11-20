import React, { useState, useRef } from "react";

import "./Survey.css";

function Survey() {
  const [fileNames, setFileNames] = useState(["Upload Excel file"]);
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleSurveyFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleSurveyFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="survey-container">
      <div className="survey-middle">
        <div className="survey-middle-create">
          <p>Add Survey</p>
          <input type="text" placeholder="Link to Survey" />
          <a href="https://www.google.com/" target="_blank">
            Create Survey
          </a>
        </div>
        <div className="survey-middle-add">
          <p>Add People</p>
          <div className="survey-documents">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleSurveyFileChange}
              style={{ display: "none" }}
              multiple
            />
            <div
              className="survey-file-display-area"
              onClick={handleSurveyFile}
            >
              {fileNames.map((name, index) => (
                <div key={index} className="survey-file-name">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="survey-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default Survey;
