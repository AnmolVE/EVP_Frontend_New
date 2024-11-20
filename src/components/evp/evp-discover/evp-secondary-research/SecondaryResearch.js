import React from "react";
import { Link } from "react-router-dom";

import "./SecondaryResearch.css";

function SecondaryResearch() {
  return (
    <div className="evp-secondaryResearch">
      <div className="evp-secondaryResearch-mainContainer">
        <h2 className="evp-secondaryResearch-heading">Secondary Research</h2>
        <p className="evp-secondaryResearch-para">
          Company and industry documents personalise the EVP
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
      <div className="evp-secondaryResearch-uploadContainer">
        <div className="evp-secondaryResearch-documents">
          <p>Upload Documents</p>
          <input placeholder="Upload" />
        </div>
        <div className="evp-secondaryResearch-button">
          <button className="default-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SecondaryResearch;
