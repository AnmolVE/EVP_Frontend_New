import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Perception.css";

function Perception({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [perceptionData, setPerceptionData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setPerceptionData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setPerceptionData({
      ...perceptionData,
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
        body: JSON.stringify(perceptionData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="perception-container">
        <div className="perception-container-fields">
          <label>Exit Interview Feedback Summary</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="exit_interview_feedback_summary"
            value={perceptionData?.exit_interview_feedback_summary}
          ></textarea>
        </div>
        <div className="perception-container-fields">
          <label>Employee Feedback Summary</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="employee_feedback_summary"
            value={perceptionData?.employee_feedback_summary}
          ></textarea>
        </div>
        <div className="perception-container-fields">
          <label>Engagement Survey Result Summary</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="engagement_survey_result_summary"
            value={perceptionData?.engagement_survey_result_summary}
          ></textarea>
        </div>
        <div className="perception-container-fields">
          <label>Glassdoor Score</label>
          <textarea
            onChange={handleInputChange}
            name="glassdoor_score"
            value={perceptionData?.glassdoor_score}
          ></textarea>
        </div>
        <div className="perception-container-fields">
          <label>Online Forums Summary</label>
          <textarea
            onChange={handleInputChange}
            name="online_forums_summary"
            value={perceptionData?.online_forums_summary}
          ></textarea>
        </div>
      </div>
      <div className="perception-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Perception;
