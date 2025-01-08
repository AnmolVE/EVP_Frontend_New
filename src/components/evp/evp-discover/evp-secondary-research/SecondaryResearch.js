import React, { useState, useRef } from "react";

import { BsPaperclip } from "react-icons/bs";

import Loading from "../../../utils/loading/Loading";

import "./SecondaryResearch.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function SecondaryResearch({ companyName, accessToken }) {
  const [fileNames, setFileNames] = useState(["Add documents"]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
        <button className="default-btn" style={{ marginTop: "2rem" }}>
          Next
        </button>
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
        <div className="evp-secondaryResearch-button">
          <button type="submit" className="default-btn">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondaryResearch;
