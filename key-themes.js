import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./KeyThemes.css";

const keyThemes = [
  {
    id: 1,
    theme: "Theme 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    theme: "Theme 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    theme: "Theme 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    theme: "Theme 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    theme: "Theme 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,
    theme: "Theme 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,
    theme: "Theme 7",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 8,
    theme: "Theme 8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 9,
    theme: "Theme 9",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 10,
    theme: "Theme 10",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function KeyThemes({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [keyThemesData, setKeyThemesData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setKeyThemesData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setKeyThemesData({
      ...keyThemesData,
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
        body: JSON.stringify(keyThemesData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="keyThemes-main-container">
        <div className="keyThemes-top">
          <p className="keyThemes-para-heading">Key Themes</p>
          <p className="keyThemes-para">
            Validate your Key Themes data before it goes to next step.
          </p>
        </div>
        <div className="keyThemes-information">
          <div className="keyThemes-information-fields">
            <label>Top Key Themes</label>
            <textarea
              onChange={handleInputChange}
              name="top_key_themes"
              value={keyThemesData?.top_key_themes || ""}
            ></textarea>
          </div>
        </div>
        <div className="keyThemes-buttons">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default KeyThemes;
