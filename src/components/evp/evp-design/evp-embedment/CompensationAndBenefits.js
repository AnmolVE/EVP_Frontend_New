import React, { useState } from "react";

import { compensationAndBenefitsFields } from "./embedment-constants";

function CompensationAndBenefits() {
  const [activeField, setActiveField] = useState("Increment Letter");

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {compensationAndBenefitsFields.map((field, index) => (
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
        {activeField === "Increment Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Current position</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>New salary</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Effective date</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Reason for increment (e.g., performance, market adjustment)
              </label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Promotion Letter" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Current position</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>New position</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>New responsibilities</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>New salary (if applicable)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Effective date</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Periodic Benefits Communication" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Benefit details (e.g., health insurance, retirement plans)
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Upcoming enrollment dates</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Changes to benefits</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee eligibility</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Total Rewards Statement" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee's name</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Salary details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits overview</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Bonuses/incentives</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Non-monetary rewards</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Annual Compensation Review Communication" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Company performance summary</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Compensation strategy</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key changes for the year</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Employee impact</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Benefits Enrollment Guide" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits options (e.g., health, dental, retirement</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Enrollment instructions</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Eligibility criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key deadlines</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Bonuses and Incentives Announcement" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Bonus/incentive criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Performance metrics</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Payout timeline</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Call-to-action</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Recognition and Reward Program Communication" && (
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
              <label>Reward options</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Key dates</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Promotion Criteria and Pathways Communication" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Criteria for promotion</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Available career pathways</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Support resources (e.g., mentoring, training)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Compensation FAQs Document" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>
                Common questions (e.g., salary adjustments, bonuses, benefits
              </label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Clear answers</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Additional resources (e.g., HR contact information)</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Retirement Benefits Overview" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Retirement plan options</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Contribution details</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Matching programs (if applicable)</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Enrollment instructions</label>
              <input />
            </div>
          </div>
        )}
        {activeField === "Health and Wellness Program Communication" && (
          <div className="evp-embedment-right-top">
            <div className="evp-embedment-right-top-dataGather">
              <label>Available health and wellness programs</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Participation criteria</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Benefits to employees</label>
              <input />
            </div>
            <div className="evp-embedment-right-top-dataGather">
              <label>Enrollment process</label>
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

export default CompensationAndBenefits;
