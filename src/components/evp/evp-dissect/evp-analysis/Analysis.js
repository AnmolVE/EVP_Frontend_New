import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "./Analysis.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function Analysis({ companyName, accessToken }) {
  const { data, loading } = useSelector((store) => store.inputField);

  const [analysisData, setAnalysisData] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/swot-analysis/${companyName}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(analysisData),
        }
      );
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="evp-analysis">
      <h2 className="custom_h2">Analysis</h2>
      <p className="custom_para">
        Validate your Analysis data before goes to next step
      </p>
      <div className="evp-analysis-container">
        <div className="evp-analysis-input">
          <p>What is working well?</p>
          <textarea
            className="custom_input"
            onChange={handleInputChange}
            name="what_is_working_well_for_the_organization"
            value={
              analysisData?.what_is_working_well_for_the_organization || ""
            }
            placeholder="Enter data"
          />
          <div className="evp-analysis-button">
            <button
              type="submit"
              onClick={handleSubmit}
              className="default-btn"
            >
              Save
            </button>
          </div>
        </div>
        <div className="evp-analysis-input">
          <p>What is not working well?</p>
          <textarea
            className="custom_input"
            onChange={handleInputChange}
            name="what_is_not_working_well_for_the_organization"
            value={
              analysisData?.what_is_not_working_well_for_the_organization || ""
            }
            placeholder="Enter data"
          />
          <div className="evp-analysis-button">
            <button
              type="submit"
              onClick={handleSubmit}
              className="default-btn"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <ContentButtons />
    </div>
  );
}

export default Analysis;
