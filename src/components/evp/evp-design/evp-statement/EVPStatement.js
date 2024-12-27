import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { GrRefresh } from "react-icons/gr";

import GenerateEVP from "./GenerateEVP";
import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import {
  evpStatementImg1,
  evpStatementImg2,
  evpStatementImg3,
  evpStatementImg4,
} from "../../../../assets/images/images";

import "./EVPStatement.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPStatement({ companyName, accessToken }) {
  const { data, loading } = useSelector((store) => store.inputField);

  const [evpStatementData, setEvpStatementData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [generatedStatement, setGeneratedStatement] = useState({});

  const images = [
    evpStatementImg1,
    evpStatementImg2,
    evpStatementImg3,
    evpStatementImg4,
  ];

  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const handleGenerateEVP = async () => {
    const mainTheme = evpStatementData[0]?.theme_name;
    const pillar_1 = evpStatementData[1]?.theme_name;
    const pillar_2 = evpStatementData[2]?.theme_name;
    const pillar_3 = evpStatementData[3]?.theme_name;

    const body = {
      company_name: companyName,
      main_theme: mainTheme,
      pillar_1: pillar_1,
      pillar_2: pillar_2,
      pillar_3: pillar_3,
    };

    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/generate-evp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to generate EVP");
      }

      const responseData = await response.json();
      setGeneratedStatement(responseData);
    } catch (error) {
      console.error("Error generating EVP:", error);
      alert("An error occurred while generating EVP.");
    } finally {
      setIsLoading(false);
    }

    setModalData({ isOpen: true });
  };

  const handleRegenerateTheme = async (themeId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/regenerate-evp-statement-themes/${themeId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ company_name: companyName }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to regenerate theme");
      }

      const responseData = await response.json();
      setEvpStatementData(responseData);
    } catch (error) {
      console.error("Error regenerating theme:", error);
      alert("An error occurred while regenerating the theme.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalData({ isOpen: false });
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpStatementData(data);
      setActiveTab(data[0]?.theme_name);
    }
  }, [data]);

  const handleTabClick = (themeName) => {
    setActiveTab(themeName);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside a valid droppable area, do nothing
    if (!destination) return;

    // Rearrange the data array
    const updatedData = Array.from(evpStatementData);
    const [removed] = updatedData.splice(source.index, 1);
    updatedData.splice(destination.index, 0, removed);

    setEvpStatementData(updatedData);
    setActiveTab(updatedData[0]?.theme_name); // Update active tab to the new main theme
  };

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="evp-statement">
      <h2 className="custom_h2">Generate EVP Statement</h2>
      <p className="custom_para">
        Craft your EVP using the selected theme as the core.
      </p>
      <div className="evp-statement-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="themes">
            {(provided) => (
              <div
                className="evp-statement-themes"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {evpStatementData.map((theme, index) => (
                  <Draggable
                    key={theme.id}
                    draggableId={theme.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div className="evp-statement-theme-container">
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`evp-statement-theme ${
                            activeTab === theme.theme_name ? "active-theme" : ""
                          }`}
                          onClick={() => handleTabClick(theme.theme_name)}
                        >
                          <p>{theme.theme_name}</p>
                        </div>
                        <div>
                          <span
                            className="evp-statement-regenerateIcon"
                            onClick={() => handleRegenerateTheme(theme.id)}
                          >
                            <GrRefresh />
                          </span>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="evp-statement-mainContent">
          {evpStatementData.map((theme, index) =>
            activeTab === theme.theme_name ? (
              <div key={theme.id} className="evp-statement-data">
                <div className="evp-statement-data-image">
                  <figure className="evp-statement-data-image-fig">
                    <img src={images[index]} alt="Theme" />
                  </figure>
                  <button
                    className="default-btn"
                    onClick={() => handleGenerateEVP()}
                  >
                    Generate EVP
                  </button>
                </div>
                <div className="evp-statement-data-desc">
                  <h2 className="custom_heading">
                    {index === 0 ? "Main Theme" : `Pillar ${index}`}
                  </h2>
                  <p className="custom_para2">{theme.theme_desc}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <ContentButtons />
      <GenerateEVP
        isOpen={modalData.isOpen}
        onClose={closeModal}
        generatedStatement={generatedStatement}
        setGeneratedStatement={setGeneratedStatement}
        companyName={companyName}
        accessToken={accessToken}
      />
    </div>
  );
}

export default EVPStatement;
