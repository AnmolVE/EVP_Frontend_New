import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import "./TalentInsights.css";

function TalentInsights() {
  const { data } = useSelector((store) => store.inputField);

  const [talentInsightsData, setTalentInsightsData] = useState(null);

  useEffect(() => {
    if (data) {
      setTalentInsightsData(data);
    }
  }, [data]);

  console.log(talentInsightsData);

  return (
    <div className="talent-insights-main-container">
      <div className="talent-insights-top">
        <p className="talent-insights-para-heading">Talent Insights</p>
        <p className="talent-insights-para">
          Validate current or frequently hired-for job opportunities before it
          goes to Dissect section.
        </p>
      </div>
      <div className="talent-insights-table-container">
        <table className="talent-insights-table">
          <thead>
            <tr className="talent-insights-table-thead-tr">
              <th className="talent-insights-table-thead-th">S.No</th>
              <th className="talent-insights-table-thead-th">Area</th>
              <th className="talent-insights-table-thead-th">Role</th>
              <th className="talent-insights-table-thead-th">Location</th>
              <th className="talent-insights-table-thead-th">Seniority</th>
              <th className="talent-insights-table-thead-th">Key Motivators</th>
            </tr>
          </thead>
          <tbody>
            {talentInsightsData &&
              talentInsightsData.map((data, index) => (
                <tr key={data.id}>
                  <td className="talent-insights-table-tbody-td">{`${
                    index + 1
                  }`}</td>
                  <td className="talent-insights-table-tbody-td">
                    {data.area}
                  </td>
                  <td className="talent-insights-table-tbody-td">
                    {data.role}
                  </td>
                  <td className="talent-insights-table-tbody-td">
                    {data.location}
                  </td>
                  <td className="talent-insights-table-tbody-td">
                    {data.seniority}
                  </td>
                  <td className="talent-insights-table-tbody-td">
                    {data.key_motivators}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="talent-insights-buttons">
        <button>Save</button>
      </div>
    </div>
  );
}

export default TalentInsights;
