import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./AttributeOfGreatPlace.css";

function AttributeOfGreatPlace({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [attributeOfGreatPlaceData, setAttributeOfGreatPlaceData] =
    useState(null);

  useEffect(() => {
    if (data) {
      setAttributeOfGreatPlaceData(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAttributeOfGreatPlaceData({
      ...attributeOfGreatPlaceData,
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
        body: JSON.stringify(attributeOfGreatPlaceData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="attributeOfGreatPlace-main-container">
        <div className="attributeOfGreatPlace-top">
          <p className="attributeOfGreatPlace-para-heading">
            Attributes of Great Place
          </p>
          <p className="attributeOfGreatPlace-para">
            Validate your Attributes data before goes to next step.
          </p>
        </div>
        <div className="attributeOfGreatPlace-information">
          <div className="attributeOfGreatPlace-information-fields">
            <label>Culture</label>
            <textarea
              onChange={handleInputChange}
              name="culture"
              value={attributeOfGreatPlaceData?.culture || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Purpose and Values</label>
            <textarea
              onChange={handleInputChange}
              name="purpose_and_values"
              value={attributeOfGreatPlaceData?.purpose_and_values || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Benefits and Perks</label>
            <textarea
              onChange={handleInputChange}
              name="benefits_perks"
              value={attributeOfGreatPlaceData?.benefits_perks || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Career Development</label>
            <textarea
              onChange={handleInputChange}
              name="career_development"
              value={attributeOfGreatPlaceData?.career_development || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Office and Facilities</label>
            <textarea
              onChange={handleInputChange}
              name="office_and_facilities"
              value={attributeOfGreatPlaceData?.office_and_facilities || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Leadership and Management</label>
            <textarea
              onChange={handleInputChange}
              name="leadership_and_management"
              value={attributeOfGreatPlaceData?.leadership_and_management || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Rewards and Recognition</label>
            <textarea
              onChange={handleInputChange}
              name="rewards_and_recognition"
              value={attributeOfGreatPlaceData?.rewards_and_recognition || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Teamwork and Collaboration</label>
            <textarea
              onChange={handleInputChange}
              name="teamwork_and_collaboration"
              value={
                attributeOfGreatPlaceData?.teamwork_and_collaboration || ""
              }
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Brand and Reputation</label>
            <textarea
              onChange={handleInputChange}
              name="brand_and_reputation"
              value={attributeOfGreatPlaceData?.brand_and_reputation || ""}
            ></textarea>
          </div>
          <div className="attributeOfGreatPlace-information-fields">
            <label>Work Life Balance</label>
            <textarea
              onChange={handleInputChange}
              name="work_life_balance"
              value={attributeOfGreatPlaceData?.work_life_balance || ""}
            ></textarea>
          </div>
        </div>
        <div className="attributeOfGreatPlace-buttons">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AttributeOfGreatPlace;
