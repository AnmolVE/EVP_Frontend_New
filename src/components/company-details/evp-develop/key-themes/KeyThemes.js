import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./KeyThemes.css";

const keyThemes = [
  {
    id: 1,
    theme: "Freedom to Innovate",
    description:
      "The company promotes an entrepreneurial culture with no red tape, allowing employees to take ownership of their work and innovate freely.",
  },
  {
    id: 2,
    theme: "Career Growth and Purpose",
    description:
      "Lighthouse Canton emphasizes learning and growing with purpose in one's career, providing purposeful career opportunities and aligning personal growth with professional goals.",
  },
  {
    id: 3,
    theme: "Nurturing Ambition and Excellence",
    description:
      "The company fosters a nurturing environment where leaders and peers push employees to reach their potential, emphasizing excellence and ambition.",
  },
  {
    id: 4,
    theme: "Supportive Work Culture",
    description:
      "The work culture is described as open, collaborative, and excellence-driven, with strong support from leadership and colleagues.",
  },
  {
    id: 5,
    theme: "Work-Life Balance",
    description:
      " The company is committed to helping employees maintain a healthy work-life balance.",
  },
  {
    id: 6,
    theme: "Trust and Transparency",
    description:
      "There is a high level of trust and transparency within the team, which is crucial for employee satisfaction and retention.",
  },
  {
    id: 7,
    theme: "Client-First Mission",
    description:
      "Employees are motivated by the company's mission to be a client-first organization, which can be a strong attractor for talent in the wealth management sector.",
  },
  {
    id: 8,
    theme: "Global Presence and Opportunities",
    description:
      "With offices in Singapore, Dubai, and Bengaluru, the company offers a global platform for employees to grow and make an impact.",
  },
];

function KeyThemes({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const [activeThemeId, setActiveThemeId] = useState(null);

  const handleThemeClick = (id) => {
    setActiveThemeId((prevId) => (prevId === id ? null : id));
  };

  // const { data } = useSelector((store) => store.inputField);

  // const [keyThemesData, setKeyThemesData] = useState(null);

  // useEffect(() => {
  //   if (data) {
  //     setKeyThemesData(data);
  //   }
  // }, [data]);

  // const handleInputChange = (e) => {
  //   setKeyThemesData({
  //     ...keyThemesData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const baseApiEndpoint = listItemEndpointMapping[currentListItem];
  //   console.log(baseApiEndpoint);
  //   if (!baseApiEndpoint) {
  //     alert("API endpoint not configured for this section");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`${baseApiEndpoint}/${companyName}/`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       body: JSON.stringify(keyThemesData),
  //     });
  //     const responseData = await response.json();
  //     alert("Data updated successfully!");
  //   } catch (error) {
  //     alert(`Error: ${error.message}`);
  //   }
  // };

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
          {keyThemes.map((theme) => (
            <div key={theme.id} className="keyThemes-data">
              <div
                className="keyThemes-tab"
                onClick={() => handleThemeClick(theme.id)}
              >
                <p>{theme.theme}</p>
              </div>
              {activeThemeId === theme.id && (
                <div className="keyThemes-description">
                  <p>{theme.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="keyThemes-buttons">
          <button type="submit">Save</button>
        </div>
      </div>
    </>
  );
}

export default KeyThemes;
