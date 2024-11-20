import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Analysis.css";

function Analysis({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [analysisData, setAnalysisData] = useState(null);

  useEffect(() => {
    if (data) {
      setAnalysisData(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAnalysisData({
      ...analysisData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseApiEndpoint = listItemEndpointMapping[currentListItem];
    console.log(baseApiEndpoint);
    if (!baseApiEndpoint) {
      alert("API endpoint not configured for this section");
      return;
    }

    try {
      const response = await fetch(`${baseApiEndpoint}/${companyName}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(analysisData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="analysis-main-container">
        <div className="analysis-top">
          <p className="analysis-para-heading">Analysis</p>
          <p className="analysis-para">
            Validate your Analysis data before it goes to next step.
          </p>
        </div>
        <div className="analysis-information">
          <div className="analysis-information-fields">
            <label>What is Working Well for the Organization</label>
            <textarea
              onChange={handleInputChange}
              name="what_is_working_well_for_the_organization"
              value={
                analysisData?.what_is_working_well_for_the_organization || ""
              }
            ></textarea>
          </div>
          <div className="analysis-information-fields">
            <label>What is Not Working Well for the Organization</label>
            <textarea
              onChange={handleInputChange}
              name="what_is_not_working_well_for_the_organization"
              value={
                analysisData?.what_is_not_working_well_for_the_organization ||
                ""
              }
            ></textarea>
          </div>
        </div>
        <div className="analysis-buttons">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Analysis;
