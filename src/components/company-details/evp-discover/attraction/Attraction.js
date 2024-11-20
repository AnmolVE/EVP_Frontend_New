import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Attraction.css";

function Attraction({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [attractionData, setAttractionData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setAttractionData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAttractionData({
      ...attractionData,
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
        body: JSON.stringify(attractionData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="attraction-container">
        <div className="attraction-container-fields">
          <label>Number of Jobs Posted</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_jobs_posted"
            value={attractionData?.number_of_jobs_posted}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Average Number of Job Post Clicks</label>
          <textarea
            onChange={handleInputChange}
            name="average_number_of_job_post_clicks"
            value={attractionData?.average_number_of_job_post_clicks}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Number of Direct Hires</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_direct_hires"
            value={attractionData?.number_of_direct_hires}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Average Time to Fill</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="average_time_to_fill"
            value={attractionData?.average_time_to_fill}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Number of Offers Made</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_offers_made"
            value={attractionData?.number_of_offers_made}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Number of Offers Accepted</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_offers_accepted"
            value={attractionData?.number_of_offers_accepted}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Number of Direct Applicants</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_direct_applicants"
            value={attractionData?.number_of_direct_applicants}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>Number of Hires</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_hires"
            value={attractionData?.number_of_hires}
          ></textarea>
        </div>
        <div className="attraction-container-fields">
          <label>What Attracts Talent</label>
          <textarea
            onChange={handleInputChange}
            name="what_attracts_talent"
            value={attractionData?.what_attracts_talent}
          ></textarea>
        </div>
      </div>
      <div className="attraction-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Attraction;
