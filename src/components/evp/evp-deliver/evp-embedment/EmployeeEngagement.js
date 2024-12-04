import React, { useState } from "react";

import { employeeEngagementFields } from "./embedment-constants";

function EmployeeEngagement() {
  const [activeField, setActiveField] = useState(
    "Engagement Tips, Recognition Program Highlights"
  );

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {employeeEngagementFields.map((field, index) => (
          <div
            key={index}
            className="evp-embedment-left-box"
            onClick={() => setActiveField(field)}
          >
            <p>{field}</p>
          </div>
        ))}
      </div>
      <div className="evp-embedment-right">
        {activeField === "Engagement Tips, Recognition Program Highlights" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key engagement strategies</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Recognition program details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Success stories</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Wellness Program Brochures" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Wellness program details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits to employees</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation instructions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Recognition Program Infographics" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key recognition program elements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual style preference</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Success metrics</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Recognition Emails, Team Event Invites" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Recipient's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Achievement or event details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Personalization options (e.g., tone, format)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Employee Spotlight Videos, Team Event Highlights" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured employees or events</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Preferred video style and length</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Pulse Surveys, Recognition Feedback" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key areas to assess</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Incentives for participation (if any)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Mentorship Guides, Team-Building Guides" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key activities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Matching criteria (for mentorship)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Resources needed</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Campaign Posts, Wellness Program Highlights" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Campaign objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key messages</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Visual elements (e.g., images, videos)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Call-to-action</label>
              <input />
            </div>
          </div>
        )}
        {activeField ===
          "Engagement Newsletters, Recognition Program Updates" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key engagement initiatives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Recognition program details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Upcoming events</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee spotlights</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Team-Building Events, Engagement Webinars" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Event details (date, time, location)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key activities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation instructions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Interactive Employee Recognition Platforms" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Platform features</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key recognition criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>User instructions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Launch timeline</label>
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

export default EmployeeEngagement;
