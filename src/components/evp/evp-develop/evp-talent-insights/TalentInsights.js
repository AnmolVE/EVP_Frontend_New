import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "./TalentInsights.css";

function TalentInsights() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [talentInsightsData, setTalentInsightsData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setTalentInsightsData(data);
    }
  }, [data]);

  if (loading) {
    <Loading />;
  }

  return (
    <div className="evp-talentInsights">
      <h2 className="custom_h2">Talent Insights</h2>
      <div className="evp-talentInsights-container">
        <table className="table">
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
      <ContentButtons />
    </div>
  );
}

export default TalentInsights;
