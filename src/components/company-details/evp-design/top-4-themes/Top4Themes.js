import React, { useState } from "react";

import "./Top4Themes.css";

import { Top4ThemesEditIcon } from "../../../../assets/icons/icons";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function Top4Themes({ pillars, companyName, accessToken }) {
  const [pillarState, setPillarState] = useState(pillars);

  const handleThemesInputChange = (id, field, value) => {
    const newPillars = pillarState.map((pillar) => {
      if (pillar.id === id) {
        return { ...pillar, [field]: value };
      }
      return pillar;
    });
    setPillarState(newPillars);
  };

  const handleRegenerateClick = async (id, tab_name, tabs_data) => {
    const theme_to_regenerate = {
      tab_name: tab_name,
      tabs_data: tabs_data,
    };

    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/themes-regenerate/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          theme_to_regenerate: theme_to_regenerate,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setPillarState((prevPillars) =>
          prevPillars.map((pillar) =>
            pillar.id === id
              ? {
                  ...pillar,
                  tab_name: responseData.tab_name,
                  tabs_data: responseData.tabs_data,
                }
              : pillar
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleThemesSubmit = async () => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/design/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          themes_data: pillarState,
        }),
      });
      console.log(pillarState);

      if (response.ok) {
        const responseData = await response.json();
        setPillarState(responseData);
        alert("Data updated successfully!!!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="top-4-themes-main-container">
      <div className="top-4-themes-data">
        {pillarState.map((pillar) => (
          <div className="top-4-themes-tabs" key={pillar.id}>
            <div className="top-4-themes-tab">
              <textarea
                className="top-4-themes-tabs-input-1"
                type="text"
                placeholder="Enter Theme name"
                value={pillar.tab_name}
                onChange={(e) =>
                  handleThemesInputChange(pillar.id, "tab_name", e.target.value)
                }
              />
              <div
                className="top-4-themes-tab-icon"
                onClick={() =>
                  handleRegenerateClick(
                    pillar.id,
                    pillar.tab_name,
                    pillar.tabs_data
                  )
                }
              >
                {<Top4ThemesEditIcon />}
              </div>
            </div>
            <textarea
              className="top-4-themes-tabs-input-2"
              type="text"
              placeholder="Enter Description"
              value={pillar.tabs_data}
              onChange={(e) =>
                handleThemesInputChange(pillar.id, "tabs_data", e.target.value)
              }
            />
          </div>
        ))}
      </div>
      <div className="top-4-themes-buttons">
        <button onClick={handleThemesSubmit}>Save</button>
      </div>
    </div>
  );
}

export default Top4Themes;
