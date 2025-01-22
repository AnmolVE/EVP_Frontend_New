import React, { useState } from "react";

import { preHiringFields } from "./embedment-constants";
import EVPEmbedmentPopup from "./EVPEmbedmentPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function PreHiring({ companyName, accessToken, activeTab }) {
  const [activeField, setActiveField] = useState("Social Media Ads");

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
        {preHiringFields.map((field, index) => (
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
        {activeField === "Social Media Ads" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key message</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred visual style</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Call-to-action</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Platform(s) to be used</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "EVP Blog Post" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key message</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred tone</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Desired length</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "EVP Brochure" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key message</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style preference</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Sections to include (e.g., benefits, culture)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "EVP Infographic" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key statistics or highlights</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style preference</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Intended use (e.g., social media, print)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Outreach letter to talent" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Candidate's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Candidate's background</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Specific EVP points to highlight</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Desired tone</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Culture Video" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages to convey</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Desired tone</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Visual elements (e.g., office scenes, employee interviews)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred length</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Candidate feedback survey" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key areas to assess</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Format preference (e.g., Likert scale, open-ended questions)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Distribution method</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Employee Testimonial Format" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Testimonial focus areas (e.g., work environment, career growth)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Format preference (e.g., written, video)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Use case (e.g., website, social media)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Referral Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Referrer's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Relationship to candidate</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key reasons for referral</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Specific EVP points to include</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Webinar - Get to know us" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Webinar objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key topics to cover</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Interactive elements (e.g., Q&A, polls)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Career Fair" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Booth design ideas</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label> Materials needed</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Roles to highlight</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Skills Assessment Quiz" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Core competencies to assess</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Format preference (e.g., multiple choice, scenario-based)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Scoring criteria</label>
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

export default PreHiring;
