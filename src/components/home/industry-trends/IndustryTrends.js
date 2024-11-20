import React, { useState } from "react";

import "./IndustryTrends.css";

import { industryTrendsFields } from "./industry_trends_constant";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function IndustryTrends() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSubIndustry, setSelectedSubIndustry] = useState("");
  const [availableSubIndustry, setAvailableSubIndustry] = useState([]);

  const [latestTrends, setLatestTrends] = useState("");

  const handleIndustryChange = (e) => {
    const industry = e.target.value;
    setSelectedIndustry(industry);
    setSelectedSubIndustry("");

    if (industry) {
      const subIndustries = industryTrendsFields[industry];
      setAvailableSubIndustry(subIndustries);
    } else {
      setAvailableSubIndustry([]);
    }
  };

  const handleSubIndustryChange = (e) => {
    setSelectedSubIndustry(e.target.value);
  };

  const handleGenerateClick = async () => {
    const requestBody = {
      industry_trends: {
        industry: selectedIndustry,
        sub_industry: selectedSubIndustry,
      },
    };

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/industry-trends-home/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setLatestTrends(responseData.latest_trends);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="industry-trends-main-container">
      <div className="industry-trends-container">
        <div className="industry-trends-heading">
          <h1>Industry Trends</h1>
        </div>
        <div className="industry-trends-below">
          <div className="industry-trends-below-left">
            <div className="industry-trends-below-left-top">
              <div className="industry-trends-below-left-data">
                <div className="industry-trends-below-left-data-fields">
                  <label>Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={handleIndustryChange}
                  >
                    <option value="">Select Industry</option>
                    {Object.keys(industryTrendsFields).map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="industry-trends-below-left-data">
                <div className="industry-trends-below-left-data-fields">
                  <label>Sub Industry</label>
                  <select
                    value={selectedSubIndustry}
                    onChange={handleSubIndustryChange}
                    disabled={!availableSubIndustry.length}
                  >
                    <option value="">Select Sub Industry</option>
                    {availableSubIndustry.map((subIndustry) => (
                      <option key={subIndustry} value={subIndustry}>
                        {subIndustry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="industry-trends-button">
              <button onClick={handleGenerateClick}>Generate</button>
            </div>
          </div>
          <div className="industry-trends-below-right">
            <textarea value={latestTrends} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryTrends;
