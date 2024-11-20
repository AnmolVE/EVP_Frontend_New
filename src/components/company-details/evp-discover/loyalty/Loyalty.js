import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Loyalty.css";

function Loyalty({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [loyaltyData, setLoyaltyData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoyaltyData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setLoyaltyData({
      ...loyaltyData,
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
        body: JSON.stringify(loyaltyData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="loyalty-container">
        <div className="loyalty-container-fields">
          <label>Average Tenure of Employee</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="average_tenure_of_employee"
            value={loyaltyData?.average_tenure_of_employee}
          ></textarea>
        </div>
        <div className="loyalty-container-fields">
          <label>Net Promoter Score</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="net_promoter_score"
            value={loyaltyData?.net_promoter_score}
          ></textarea>
        </div>
        <div className="loyalty-container-fields">
          <label>Number of Early Exits</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_early_exits"
            value={loyaltyData?.number_of_early_exits}
          ></textarea>
        </div>
        <div className="loyalty-container-fields">
          <label>Number of Re Hires</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="number_of_re_hires"
            value={loyaltyData?.number_of_re_hires}
          ></textarea>
        </div>
        <div className="loyalty-container-fields">
          <label>What Retains Talent</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="what_retains_talent"
            value={loyaltyData?.what_retains_talent}
          ></textarea>
        </div>
      </div>
      <div className="loyalty-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Loyalty;
