import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Influence.css";

function Influence({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [influenceData, setInfluenceData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setInfluenceData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setInfluenceData({
      ...influenceData,
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
        body: JSON.stringify(influenceData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="influence-container">
        <div className="influence-container-fields">
          <label>Number of Career Page Subscribers</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_career_page_subscribers"
            value={influenceData?.number_of_career_page_subscribers}
          ></textarea>
        </div>
        <div className="influence-container-fields">
          <label>Number of Views</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_views"
            value={influenceData?.number_of_views}
          ></textarea>
        </div>
        <div className="influence-container-fields">
          <label>Engagement</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="engagement"
            value={influenceData?.engagement}
          ></textarea>
        </div>
        <div className="influence-container-fields">
          <label>Number of Media Mentions</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_media_mentions"
            value={influenceData?.number_of_media_mentions}
          ></textarea>
        </div>
        <div className="influence-container-fields">
          <label>Number of Awards</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_awards"
            value={influenceData?.number_of_awards}
          ></textarea>
        </div>
        <div className="influence-container-fields">
          <label>Summary of Awards / Recognition</label>
          <textarea
            onChange={handleInputChange}
            name="summary_of_awards_or_recognition"
            value={influenceData?.summary_of_awards_or_recognition}
          ></textarea>
        </div>
      </div>
      <div className="influence-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Influence;
