import React, { useState } from "react";

import { hiringFields } from "./embedment-constants";
import EVPEmbedmentPopup from "./EVPEmbedmentPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function Hiring({ companyName, accessToken, activeTab }) {
  const [activeField, setActiveField] = useState(
    "Interview Process Overview Document"
  );

  const [generatedData, setGeneratedData] = useState({});

  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const closeModal = () => {
    setModalData({ isOpen: false });
  };

  const handleGenerateClick = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/evp-embedment/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        company_name: companyName,
        stage: activeTab,
        touchpoint: activeField,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      setGeneratedData(responseData);
      setModalData({ isOpen: true });
    }
  };

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {hiringFields.map((field, index) => (
          <div
            key={index}
            className={`evp-embedment-left-box ${
              activeField === field ? "active" : ""
            }`}
            onClick={() => setActiveField(field)}
          >
            <p>{field}</p>
          </div>
        ))}
      </div>
      <div className="evp-embedment-right">
        {activeField === "Interview Process Overview Document" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Steps in the interview process</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key milestones</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Contact information for questions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Case Study Assignment" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Case study topic</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Role-specific challenges</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Scoring criteria</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Candidate Preparation Guide" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key interview tips</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Company culture insights</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Resources for preparation (e.g., company website)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Offer Stage Communication Plan" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Communication touchpoints</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timeline for follow-up</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Candidate Journey Map" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Stages of the candidate journey</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key interactions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Candidate pain points to address</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Hiring Manager Toolkit" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Resources needed (e.g., interview guides, evaluation templates)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Best practices</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key EVP elements to emphasize</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Job Description" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Role title</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key responsibilities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Required qualifications</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred experience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Compensation details</label>
              <input />
            </div>
          </div>
        )}
        <div className="evp-embedment-button">
          <button>Save</button>
        </div>
      </div>
      <button className="default-btn" onClick={handleGenerateClick}>
        Generate
      </button>
      <EVPEmbedmentPopup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        generatedData={generatedData}
        companyName={companyName}
        accessToken={accessToken}
      />
    </div>
  );
}

export default Hiring;
