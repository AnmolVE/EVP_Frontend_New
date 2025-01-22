import React, { useState } from "react";

import { learningAndDevelopmentFields } from "./embedment-constants";
import EVPEmbedmentPopup from "./EVPEmbedmentPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function LearningAndDevelopment({ companyName, accessToken, activeTab }) {
  const [activeField, setActiveField] = useState(
    "L&D Success Stories, Career Growth Blogs"
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
        {learningAndDevelopmentFields.map((field, index) => (
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
        {activeField === "L&D Success Stories, Career Growth Blogs" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee success stories</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Career growth milestones</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred tone</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Program Brochures" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program details (objectives, content, duration)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key benefits</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Pathway Infographics" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Learning pathway overview</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key milestones</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style preference</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Program Invitations, Training Notifications" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Event details (topic, date, time)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key benefits of attending</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Program Videos, Mentorship Intro Videos" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages to convey</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured employees or mentors</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred length</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Training Effectiveness Surveys" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Training session details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key areas to assess (e.g., content, delivery)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey format</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Leadership Development Guides" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience (e.g., managers, high potentials</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key competencies to develop</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Delivery method</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Recognition Posts, L&D Highlights" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Program successes</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key takeaways</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred tone</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Program Newsletters" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key topics to cover</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured programs</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Upcoming events</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Success stories</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Webinars, Leadership Development Workshops" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Event details (topic, date, time)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key speakers</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits of attending</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "L&D Quizzes, Gamified Training Modules" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key learning objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Content to be covered</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Format preference (e.g., multiple choice, interactive)
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

export default LearningAndDevelopment;
