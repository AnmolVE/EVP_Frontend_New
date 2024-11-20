import React from "react";

import "./TalentInsights.css";

const talentInsightsData = [
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
  {
    area: "Technology",
    role: "Customer Experience Technology Specialist",
    location: "Greenwood Village, Colorado, United States",
    seniority: "Mid",
    key_motivators:
      "Higher Salary, Hybrid/Flexible Working arrangement, Flexible Working hours",
  },
];

function TalentInsights() {
  return (
    <div className="evp-talentInsights">
      <h2 className="evp-develop-heading">Talent Insights</h2>
      <p className="evp-develop-para">
        Validate your Talent Insights dat before it goes to next step.
      </p>
      <div className="evp-talentInsights-container">
        <table class="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Area</th>
              <th scope="col">Role</th>
              <th scope="col">Location</th>
              <th scope="col">Seniority</th>
              <th scope="col">Key Motivators</th>
            </tr>
          </thead>
          <tbody>
            {talentInsightsData &&
              talentInsightsData.map((data, index) => (
                <tr key={data.id}>
                  <th>{`${index + 1}`}</th>
                  <td>{data.area}</td>
                  <td>{data.role}</td>
                  <td>{data.location}</td>
                  <td>{data.seniority}</td>
                  <td>{data.key_motivators}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TalentInsights;
