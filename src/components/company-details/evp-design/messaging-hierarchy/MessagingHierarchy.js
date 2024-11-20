import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./MessagingHierarchy.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const ItemTypes = {
  THEME: "theme",
};

const Theme = ({ theme, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.THEME,
    item: { theme, index, from: "left" }, // Add `from` to identify the source
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      className="messaging-hierarchy-container-left-pillars-content"
    >
      {theme}
    </li>
  );
};

const MiddlePillar = ({ theme, index, moveTheme }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.THEME,
    drop: (item) => {
      if (item.from === "middle" && item.index !== index) {
        // Moving within middle section
        moveTheme(item.index, index, "middle");
      } else if (item.from !== "middle") {
        // Moving from left or main to middle
        moveTheme(item.index, index, item.from);
      }
    },
  });

  return (
    <div
      ref={drop}
      className="messaging-hierarchy-container-middle-pillars-supporting-content"
    >
      {theme ? <p>{theme}</p> : `+ Pillar ${index + 1}`}
    </div>
  );
};

const MainPillar = ({ theme, moveTheme }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.THEME,
    drop: (item) => moveTheme(item.index, "main", item.from),
  });

  return (
    <div
      ref={drop}
      className="messaging-hierarchy-container-middle-pillars-main"
    >
      {theme ? <p>{theme}</p> : "+ Main Theme"}
    </div>
  );
};

function MessagingHierarchy({
  setPageLoading,
  pillars,
  newPillars,
  companyName,
  accessToken,
}) {
  const [themes] = useState(newPillars);
  const [mainTheme, setMainTheme] = useState(null);
  const [middleThemes, setMiddleThemes] = useState([null, null, null]);

  const [tagline, setTagline] = useState("");

  const [loading, setLoading] = useState(false);

  const getMessagingHierarchy = async () => {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/messaging-hierarchy/${companyName}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setMainTheme(responseData.main_theme);
        setMiddleThemes([
          responseData.pillar_1,
          responseData.pillar_2,
          responseData.pillar_3,
        ]);
        setTagline(responseData.tagline);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMessagingHierarchy();
  }, []);

  const moveTheme = (fromIndex, toIndex, from) => {
    if (from === "left") {
      const theme = themes[fromIndex];

      if (toIndex === "main") {
        setMainTheme(theme);
      } else {
        const newMiddleThemes = [...middleThemes];
        newMiddleThemes[toIndex] = theme;
        setMiddleThemes(newMiddleThemes);
      }
    } else if (from === "middle") {
      const newMiddleThemes = [...middleThemes];
      const [movedTheme] = newMiddleThemes.splice(fromIndex, 1);
      newMiddleThemes.splice(toIndex, 0, movedTheme);
      setMiddleThemes(newMiddleThemes);
    } else if (from === "main" && toIndex !== "main") {
      const newMiddleThemes = [...middleThemes];
      newMiddleThemes[toIndex] = mainTheme;
      setMainTheme(null);
      setMiddleThemes(newMiddleThemes);
    }
  };

  const generateTagline = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestBody = {
        company_name: companyName,
        main_theme: mainTheme,
        pillars: middleThemes.filter((theme) => theme !== null),
      };

      const response = await fetch(`${REACT_APP_BASE_URL}/tagline/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        setTagline(responseData.tagline || "");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error while generating tagline:", error);
    }
  };

  const handleSubmitTagline = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const requestBody = {
        company_name: companyName,
        main_theme: mainTheme,
        pillars: middleThemes,
        tagline: tagline,
      };
      console.log(middleThemes);

      const response = await fetch(`${REACT_APP_BASE_URL}/tagline/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        setTagline(responseData.tagline || "");
        alert("Data submitted successfully");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error while generating tagline:", error);
    }
  };

  if (loading) {
    return <div>Hello</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="messaging-hierarchy-main-container">
        <div className="messaging-hierarchy-container">
          <div className="messaging-hierarchy-container-left-part">
            <div className="messaging-hierarchy-container-left">
              <ul className="messaging-hierarchy-container-left-pillars">
                {themes.map((theme, index) => (
                  <Theme key={index} theme={theme} index={index} />
                ))}
              </ul>
              <div className="messaging-hierarchy-container-left-info">
                <p>
                  Drag and drop the most important and relevant theme into the
                  Main Theme box
                </p>
              </div>
            </div>
            <div className="messaging-hierarchy-container-middle">
              <div className="messaging-hierarchy-container-middle-pillars">
                <MainPillar theme={mainTheme} moveTheme={moveTheme} />
                <div className="messaging-hierarchy-container-middle-pillars-supporting">
                  {middleThemes.map((theme, index) => (
                    <MiddlePillar
                      key={index}
                      theme={theme}
                      index={index}
                      moveTheme={moveTheme}
                    />
                  ))}
                </div>
              </div>
              <div className="messaging-hierarchy-container-middle-button">
                <button onClick={generateTagline}>Generate EVP</button>
              </div>
            </div>
          </div>
          <div className="messaging-hierarchy-container-right">
            <div className="messaging-hierarchy-container-right-textarea">
              <textarea
                type="text"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>
            <div className="messaging-hierarchy-container-right-button">
              <button onClick={handleSubmitTagline}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default MessagingHierarchy;
