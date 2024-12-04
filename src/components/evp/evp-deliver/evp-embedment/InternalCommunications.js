import React, { useState } from "react";

import { internalCommunicationsFields } from "./embedment-constants";

function InternalCommunications() {
  const [activeField, setActiveField] = useState("Company-Wide Announcements");

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {internalCommunicationsFields.map((field, index) => (
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
        {activeField === "Company-Wide Announcements" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key message</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Target audience</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timing of announcement</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Additional resources or links</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Quarterly Newsletters" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Key highlights (e.g., company achievements, upcoming events)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee spotlights</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Important dates</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Leadership Communication Emails" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key message from leadership</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Context or background</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Next steps or action items</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Crisis Communication Plan" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Crisis scenario details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key stakeholders</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Communication channels</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Response steps</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Internal Survey Invitations" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey purpose</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key areas of focus</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey link</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Incentives for participation (if any)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Employee Town Hall Invitations and Agendas" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Town hall objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key topics to be covered</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured speakers</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Q&A session details</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Policy Update Communications" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Policy changes</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label> Effective date</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Impact on employees</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Resources for further information</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Employee Recognition Communications" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Recognition message</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Personalization options (e.g., name, role)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Next steps (if applicable)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Diversity and Inclusion (D&I) Updates" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>D&I initiatives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Upcoming events</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation opportunities</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Employee Feedback Response Communications" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Summary of feedback received</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Actions taken or planned</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timeline for implementation</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Internal Campaign Announcements" && (
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
              <label>Timeline</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation details</label>
              <input />
            </div>
          </div>
        )}
        {activeField ===
          "Internal Event Invitations (e.g., Team Building, Celebrations)" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Event details (date, time, location)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Purpose of the event</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>RSVP instructions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Special notes or attire requirements</label>
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

export default InternalCommunications;
