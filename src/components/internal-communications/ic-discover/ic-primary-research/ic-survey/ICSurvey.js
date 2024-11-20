import React, { useState, useRef } from "react";

import "./ICSurvey.css";

function ICSurvey() {
  const [fileNames, setFileNames] = useState(["Upload Excel file"]);
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleIcSurveyFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleIcSurveyFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="ic-survey-container">
      <div className="ic-survey-middle">
        <div className="ic-survey-middle-create">
          <p>Add Survey</p>
          <input type="text" placeholder="Link to Survey" />
          <a href="https://www.google.com/" target="_blank">
            Create Survey
          </a>
        </div>
        <div className="ic-survey-middle-add">
          <p>Add People</p>
          <div className="ic-survey-documents">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleIcSurveyFileChange}
              style={{ display: "none" }}
              multiple
            />
            <div
              className="ic-survey-file-display-area"
              onClick={handleIcSurveyFile}
            >
              {fileNames.map((name, index) => (
                <div key={index} className="ic-survey-file-name">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ic-survey-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default ICSurvey;
