import React, { useState } from "react";

import { onBoardingFields } from "./embedment-constants";

function OnBoarding() {
  const [activeField, setActiveField] = useState("Offer Letter");

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {onBoardingFields.map((field, index) => (
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
        {activeField === "Offer Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Candidate's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Position title</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Start date</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Compensation details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits overview</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Reporting manager</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Onboarding Guide" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Role-specific resources</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Team structure</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key contacts</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Company policies</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>First-week agenda</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Welcome Video" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages to convey</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured employees</label>
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
        {activeField === "Role-Specific Training Modules" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key competencies</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Training format (e.g., video, interactive)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Assessment criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timeline</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Team Introduction Deck" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Team member profiles</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Role descriptions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Fun facts or icebreakers</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style preferences</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Company Handbook" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Company policies</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Cultural values</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Career development opportunities</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "First 90 Days Plan" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Role-specific goals</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key milestones</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Feedback intervals</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Support resources</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Welcome Kit Content" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Branded materials (e.g., notebook, pen)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Company swag</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Resource guides</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Personal welcome note</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Onboarding Survey" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Key areas to assess (e.g., first-day experience, clarity of
                role)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey format (e.g., online, paper)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timing of survey</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Buddy Program Overview" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Buddy assignments</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Program objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Suggested activities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Check-in schedule</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Onboarding Checklist" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key tasks to complete</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Important dates (e.g., benefits enrollment)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Required documents</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Contact information for support</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "New Hire Announcement Template" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>New hire's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Position</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Background</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Fun fact</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Start date</label>
              <input />
            </div>
          </div>
        )}
        <div className="evp-embedment-button">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default OnBoarding;
