import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { AiOutlineRight } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";

import keyThemesImg from "../../../../assets/images/keyThemes.png";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "./KeyThemes.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function KeyThemes({ companyName, accessToken }) {
  const { data, loading } = useSelector((store) => store.inputField);

  const [keyThemesData, setKeyThemesData] = useState([]);
  const [activeThemeId, setActiveThemeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [hoveredThemeId, setHoveredThemeId] = useState(null);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setKeyThemesData(data);
      setActiveThemeId(data[0]?.id);
    }
  }, [data]);

  const handleThemeClick = (id) => {
    setActiveThemeId((prevId) => (prevId === id ? null : id));
  };

  const getRotationClass = (id) =>
    activeThemeId === id ? "keyThemesRotatedIcon" : "";

  const regenerateTheme = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/key-themes/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response}`);
      }

      const responseData = await response.json();
      setKeyThemesData(responseData);
    } catch (error) {
      console.error("Error regenerating theme:", error);
      alert("Failed to regenerate theme. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="evp-keyThemes">
      <h2 className="custom_h2">Key Themes</h2>
      <p className="custom_para">
        Identify the key themes that define your organisation.
      </p>
      <div className="evp-keyThemes-container">
        <div className="evp-keyThemes-data">
          <div className="evp-keyThemes-themes">
            {keyThemesData.map((item) => (
              <div className="evp-keyThemes-themes-container">
                <div key={item.id} className="evp-keyThemes-themes-tile">
                  <div
                    className="evp-keyThemes-themes-themeName"
                    onClick={() => handleThemeClick(item.id)}
                  >
                    <div
                      className={`evp-keyThemes-themes-themeName-icon ${getRotationClass(
                        item.id
                      )}`}
                    >
                      <AiOutlineRight />
                    </div>
                    <h4>{item.key_theme}</h4>
                  </div>
                  {activeThemeId === item.id && (
                    <div className="evp-keyThemes-themes-themeDesc">
                      <p className="custom_para2">{item.key_theme_desc}</p>
                    </div>
                  )}
                </div>
                <div>
                  <span
                    className="evp-keyThemes-regenerateIcon"
                    onMouseEnter={() => setHoveredThemeId(item.id)}
                    onMouseLeave={() => setHoveredThemeId(null)}
                    onClick={() => regenerateTheme(item.id)}
                  >
                    <GrRefresh />
                  </span>
                </div>
                {hoveredThemeId === item.id && (
                  <div className="keyThemes-warning">
                    <h3>Warning...</h3>
                    <p className="custom_para2">
                      You will loose your previous themes and will not be able
                      to revert back to the previous themes
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="evp-keyThemes-image">
          <figure className="evp-keyThemes-image-fig">
            <img src={keyThemesImg} alt="Image" />
          </figure>
        </div>
      </div>
      <ContentButtons />
    </div>
  );
}

export default KeyThemes;
