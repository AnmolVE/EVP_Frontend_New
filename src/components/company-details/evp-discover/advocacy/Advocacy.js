import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Advocacy.css";

function Advocacy({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [advocacyData, setAdvocacyData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setAdvocacyData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAdvocacyData({
      ...advocacyData,
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
        body: JSON.stringify(advocacyData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="advocacy-container">
        <div className="advocacy-container-fields">
          <label>Number of Employees</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_employees"
            value={advocacyData?.number_of_employees}
          ></textarea>
        </div>
        <div className="advocacy-container-fields">
          <label>Number of Referrals</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_referrals"
            value={advocacyData?.number_of_referrals}
          ></textarea>
        </div>
        <div className="advocacy-container-fields">
          <label>Number of Referrals to Hires</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_referrals_to_hires"
            value={advocacyData?.number_of_referrals_to_hires}
          ></textarea>
        </div>
        <div className="advocacy-container-fields">
          <label>ESAT Recommendability Score</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="esat_recommendability_score"
            value={advocacyData?.esat_recommendability_score}
          ></textarea>
        </div>
      </div>
      <div className="advocacy-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Advocacy;
