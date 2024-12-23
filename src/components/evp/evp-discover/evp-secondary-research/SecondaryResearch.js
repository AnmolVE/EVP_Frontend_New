import React, { useState, useRef } from "react";

import "./SecondaryResearch.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function SecondaryResearch({ companyName, accessToken }) {
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("company_name", companyName);
    files.forEach((file) => {
      formData.append("documents", file);
    });

    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/search/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (error) {
      console.error("Error adding company documents:", error);
    }
  };

  return (
    <div className="evp-secondaryResearch">
      <div className="evp-secondaryResearch-mainContainer">
        <h2 className="custom_h2">Secondary Research</h2>
        <p className="custom_para">
          Utilise company and industry data to inform your EVP.
        </p>
        <div className="evp-secondaryResearch-dataGather">
          <div className="about-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="about-content">
                    <p>
                      In addition to processing your documents, the platform
                      will crawl hundreds of curated online sources to conduct
                      comprehensive secondary research.
                    </p>

                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            Exit interview data
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            Employee feedback
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            ESAT survey results
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            Current / frequently hired for job positions
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            Brand Guidelines
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        className="evp-secondaryResearch-uploadContainer"
        onSubmit={handleSubmit}
      >
        <div className="evp-secondaryResearch-documents">
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
        <div className="evp-secondaryResearch-button">
          <button type="submit" className="default-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondaryResearch;
