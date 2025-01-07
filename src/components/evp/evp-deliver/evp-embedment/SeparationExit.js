import React, { useState } from "react";

import { separationExitFields } from "./embedment-constants";

function SeparationExit() {
  const [activeField, setActiveField] = useState(
    "Exit Announcement (Internal)"
  );

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {separationExitFields.map((field, index) => (
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
        {activeField === "Exit Announcement (Internal)" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Role</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Reason for departure (if applicable)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Last working day</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Acknowledgment of contributions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Exit Interview Questionnaire" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Key areas to assess (e.g., reasons for leaving, employee
                satisfaction )
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Format (e.g., open-ended questions, Likert scale)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Separation Checklist" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Required tasks (e.g., return of company property, final payroll)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Timeline</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Responsible parties</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Final Pay and Benefits Communication" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Final pay details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits continuation or termination information</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Contact for further questions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Thank You and Farewell Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Personal contributions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Positive memories</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Encouragement for the future</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Knowledge Transfer Document" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key projects or responsibilities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Handover instructions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Successor's name (if applicable)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Exit Process Overview (For Managers)" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Steps in the exit process</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key responsibilities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Communication guidelines</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Alumni Network Invitation" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Alumni network details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits of joining</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Instructions for signing up</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "References and Recommendations Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Role</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key achievements</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Contact details for verification</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Exit Survey Invitation" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Purpose of the survey</label>
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
            <div className="evp-embedment-right-top-dataGather">
              <label>Incentive (if any)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Transition Communication Plan" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Key stakeholders</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Communication timeline</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Messaging guidelines</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Exit Package Overview" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Components of the exit package (e.g., severance, benefits)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Payment schedule</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Legal considerations</label>
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

export default SeparationExit;
