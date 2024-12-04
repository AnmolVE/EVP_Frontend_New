import React, { useState } from "react";

import { alumniRelationsFields } from "./embedment-constants";

function AlumniRelations() {
  const [activeField, setActiveField] = useState("Alumni Newsletter");

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {alumniRelationsFields.map((field, index) => (
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
        {activeField === "Alumni Newsletter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Key updates (e.g., company news, alumni achievements)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Upcoming events</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured content</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Portal Welcome Message" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Portal features</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key benefits of joining</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Instructions for registration</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Event Invitations" && (
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
          </div>
        )}
        {activeField === "Alumni Success Stories" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Featured alumni</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Impact of their time at the company</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Networking Opportunities" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Networking event details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key participants</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Purpose of the event</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Feedback Surveys" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Purpose of the survey</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key areas to assess</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Survey link</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Confidentiality assurance</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Social Media Content" && (
          <div className="evp-embedment-right-top">
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
        {activeField === "Re-engagement Campaigns" && (
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
              <label>Incentives for re-engagement (if any)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Recognition Programs" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Eligibility criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Recognition methods (e.g., awards, features)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Mentorship Program" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program objectives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Mentor-mentee matching criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation benefits</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timeline</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Career Opportunities Updates for Alumni" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Available job openings</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key qualifications</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Application instructions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Alumni-specific benefits</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Referral Program" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Program details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Referral incentives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Eligibility criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Instructions for submitting referrals</label>
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

export default AlumniRelations;
