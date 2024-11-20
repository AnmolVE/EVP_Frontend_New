import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./AudienceWiseMessaging.css";

function AudienceWiseMessaging({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [audienceWiseMessagingData, setAudienceWiseMessagingData] =
    useState(null);

  useEffect(() => {
    if (data) {
      setAudienceWiseMessagingData(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAudienceWiseMessagingData({
      ...audienceWiseMessagingData,
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
        body: JSON.stringify(audienceWiseMessagingData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="audienceWiseMessaging-main-container">
        <div className="audienceWiseMessaging-top">
          <p className="audienceWiseMessaging-para-heading">
            Primary Research Results
          </p>
          <p className="audienceWiseMessaging-para">
            Validate your Primary Research data before it goes to next step.
          </p>
        </div>
        <div className="audienceWiseMessaging-information">
          <div className="audienceWiseMessaging-information-fields">
            <label>Existing Employees</label>
            <textarea
              onChange={handleInputChange}
              name="existing_employees"
              value={audienceWiseMessagingData?.existing_employees || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Alumni</label>
            <textarea
              onChange={handleInputChange}
              name="alumni"
              value={audienceWiseMessagingData?.alumni || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Targeted Talent</label>
            <textarea
              onChange={handleInputChange}
              name="targeted_talent"
              value={audienceWiseMessagingData?.targeted_talent || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Leadership</label>
            <textarea
              onChange={handleInputChange}
              name="leadership"
              value={audienceWiseMessagingData?.leadership || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Recruiters</label>
            <textarea
              onChange={handleInputChange}
              name="recruiters"
              value={audienceWiseMessagingData?.recruiters || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Clients</label>
            <textarea
              onChange={handleInputChange}
              name="clients"
              value={audienceWiseMessagingData?.clients || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Offer Drops</label>
            <textarea
              onChange={handleInputChange}
              name="offer_drops"
              value={audienceWiseMessagingData?.offer_drops || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Exit Interview Feedback</label>
            <textarea
              onChange={handleInputChange}
              name="exit_interview_feedback"
              value={audienceWiseMessagingData?.exit_interview_feedback || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Employee Feedback Summary</label>
            <textarea
              onChange={handleInputChange}
              name="employee_feedback_summary"
              value={audienceWiseMessagingData?.employee_feedback_summary || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Engagement Survey Results</label>
            <textarea
              onChange={handleInputChange}
              name="engagement_survey_results"
              value={audienceWiseMessagingData?.engagement_survey_results || ""}
            ></textarea>
          </div>
          <div className="audienceWiseMessaging-information-fields">
            <label>Online Forums Mentions</label>
            <textarea
              onChange={handleInputChange}
              name="online_forums_mentions"
              value={audienceWiseMessagingData?.online_forums_mentions || ""}
            ></textarea>
          </div>
        </div>
        <div className="audienceWiseMessaging-buttons">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AudienceWiseMessaging;
