import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Brand.css";

function Brand({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setBrandData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setBrandData({
      ...brandData,
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
        body: JSON.stringify(brandData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="brand-container">
        <div className="brand-container-fields">
          <label>Employee Value Proposition</label>
          <textarea
            onChange={handleInputChange}
            name="employee_value_proposition"
            value={brandData?.employee_value_proposition || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Culture and Values</label>
          <textarea
            onChange={handleInputChange}
            name="culture_and_values"
            value={brandData?.culture_and_values || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Purpose</label>
          <textarea
            onChange={handleInputChange}
            name="purpose"
            value={brandData?.purpose || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Customer Value Proposition</label>
          <textarea
            onChange={handleInputChange}
            name="customer_value_proposition"
            value={brandData?.customer_value_proposition || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Vision</label>
          <textarea
            onChange={handleInputChange}
            name="vision"
            value={brandData?.vision || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Mission</label>
          <textarea
            onChange={handleInputChange}
            name="mission"
            value={brandData?.mission || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Internal Comms Samples</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="internal_comms_samples"
            value={brandData?.internal_comms_samples || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>External Comms Samples</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="external_comms_samples"
            value={brandData?.external_comms_samples || ""}
          ></textarea>
        </div>
        <div className="brand-container-fields">
          <label>Brand Guidelines</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="brand_guidelines"
            value={brandData?.brand_guidelines || ""}
          ></textarea>
        </div>
      </div>
      <div className="brand-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Brand;
