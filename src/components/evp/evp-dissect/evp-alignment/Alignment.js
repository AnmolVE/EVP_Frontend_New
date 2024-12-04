import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Alignment.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function Alignment({ companyName, accessToken }) {
  const { data } = useSelector((store) => store.inputField);

  const [alignmentData, setAlignmentData] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/alignment/${companyName}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(alignmentData),
        }
      );
      alert("Data updated successfully");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="evp-alignment">
      <h2 className="custom_h2">Alignment</h2>
      <p className="custom_para">
        Validate your Alignment data before goes to next step
      </p>
      <div className="evp-alignment-container">
        <div className="evp-alignment-input">
          <p>What we want to be known for</p>
          <textarea
            className="custom_input"
            onChange={handleInputChange}
            name="what_we_want_to_be_known_for"
            value={alignmentData?.what_we_want_to_be_known_for || ""}
            placeholder="Enter data"
          />
          <div className="evp-alignment-button">
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
    </div>
  );
}

export default Alignment;
