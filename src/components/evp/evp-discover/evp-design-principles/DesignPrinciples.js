import React from "react";

import "./DesignPrinciples.css";

function DesignPrinciples() {
  return (
    <div className="evp-designPrinciples">
      <div className="evp-designPrinciples-mainContainer">
        <h2 className="evp-designPrinciples-heading">Design Principles</h2>
        <p className="evp-designPrinciples-para">
          First-hand information adds credibility and depth to your research
        </p>
        <div className="evp-designPrinciples-questions">
          <div className="evp-designPrinciples-question">
            <label>What are the strategic goals for the next 3-5 years?</label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              Do you have an existing EVP? If so, what aspects of it are working
              well, and what areas need improvement?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What are the key attributes or messages that you want to convey
              through your EVP?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>How would you describe your company culture?</label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What values are most important to your organization and its
              employees?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What challenges do you currently face in attracting and retaining
              top talent?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What are the key reasons employees stay at your company? What are
              the reasons they leave?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What talent segment(s) do you most want your EVP to target
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              How do you differentiate your company's employee experience from
              competitors?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              How do you currently measure employee satisfaction and engagement?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What channels do you use to communicate with employees and
              potential candidates?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              How do you plan to measure the success and impact of the new EVP?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              How do you believe your company is perceived by potential
              candidates in the market?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What are the key messages you want to convey to the market about
              working at your company?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-question">
            <label>
              What are your competitors doing in terms of EVP that you admire or
              want to differentiate from?
            </label>
            <textarea placeholder="Enter Data" />
          </div>
          <div className="evp-designPrinciples-button">
            <button className="default-btn">Save</button>
          </div>
        </div>
      </div>
      <div className="evp-primaryResearch-uploadContainer">
        <div className="evp-primaryResearch-documents">
          <p>Upload Documents</p>
          <input placeholder="Upload" />
        </div>
        <div className="evp-primaryResearch-button">
          <button className="default-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DesignPrinciples;
