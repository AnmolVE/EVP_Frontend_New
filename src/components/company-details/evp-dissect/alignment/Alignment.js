import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Alignment.css";

function Alignment({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [alignmentData, setAlignmentData] = useState(null);

  useEffect(() => {
    if (data) {
      setAlignmentData(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAlignmentData({
      ...alignmentData,
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
        body: JSON.stringify(alignmentData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="alignment-main-container">
        <div className="alignment-top">
          <p className="alignment-para-heading">Alignment</p>
          <p className="alignment-para">
            Validate your Alignment data before it goes to next section.
          </p>
        </div>
        <div className="alignment-information">
          <div className="alignment-information-fields">
            <label>What we want to be known for</label>
            <textarea
              onChange={handleInputChange}
              name="what_we_want_to_be_known_for"
              value={alignmentData?.what_we_want_to_be_known_for || ""}
            ></textarea>
          </div>
        </div>
        <div className="alignment-buttons">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Alignment;
