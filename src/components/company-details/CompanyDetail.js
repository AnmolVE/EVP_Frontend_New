import React, { useState, useEffect } from "react";
import Navbar from "../bars/Navbar";
import Footer from "../bars/Footer";
import "./CompanyDetail.css";
import CompanyDetailsLeftbar from "./CompanyDetailsLeftbar";
import { useSelector } from "react-redux";
import {
  DISCOVER,
  DEVELOP,
  DISSECT,
  DESIGN,
  DELIVER,
  listItemEndpointMapping,
} from "../../staticData/labels";

import Discover from "./evp-discover/Discover";
import Develop from "./evp-develop/Develop";
import Dissect from "./evp-dissect/Dissect";
import Design from "./evp-design/Design";
import Deliver from "./evp-deliver/Deliver";

import Loading from "../utils/loading/Loading";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function CompanyDetail() {
  const { loading } = useSelector((store) => store.inputField);

  const companyName = localStorage.getItem("companyName");
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens.access;

  const [pageLoading, setPageLoading] = useState(false);

  const [pageName, setPageName] = useState("DISCOVER");
  const [listItems, setListItems] = useState(DISCOVER);
  const [currentListItem, setCurrentListItem] = useState(listItems[0]?.name);

  const [pillars, setPillars] = useState([]);
  const [newPillars, setNewPillars] = useState([{}]);

  useEffect(() => {
    setPageLoading(loading);
  }, [loading]);

  const handleListItemClick = (listItem) => {
    setCurrentListItem(listItem);
  };

  const handleDesignClick = async () => {
    setPageLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/design/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ company_name: companyName }),
      });
      if (!response.ok) {
        throw new Error(response.message || "Error");
      }
      const responseData = await response.json();
      setPillars(responseData);
      const tabNames = responseData.map((item) => item.tab_name);
      setNewPillars(tabNames);
      setPageLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const sectionMappings = {
    DISCOVER,
    DEVELOP,
    DISSECT,
    DESIGN,
    DELIVER,
  };

  const getNextSection = (currentSection) => {
    const sectionNames = Object.keys(sectionMappings);
    const currentIndex = sectionNames.indexOf(currentSection);

    if (currentIndex !== -1 && currentIndex < sectionNames.length - 1) {
      return sectionNames[currentIndex + 1];
    }

    return null;
  };

  const handleNextClick = () => {
    const currentIndex = listItems.findIndex(
      (item) => item.name === currentListItem
    );

    if (currentIndex !== -1 && currentIndex < listItems.length - 1) {
      const nextElement = listItems[currentIndex + 1];
      console.log(nextElement);
      setCurrentListItem(nextElement?.name);
    } else {
      const nextSection = getNextSection(pageName);
      console.log(nextSection);

      if (nextSection) {
        setPageName(nextSection);
        setListItems(sectionMappings[nextSection]);
        setCurrentListItem(sectionMappings[nextSection][0]?.name);
      }
    }
  };

  if (pageLoading) {
    return <Loading />;
  }

  return (
    <div className="evp-module">
      <div className="evp-main-container">
        <div className="evp-headers">
          <Navbar />
          <div className="company-detail-navbar">
            <ul>
              <li
                onClick={() => {
                  setPageName("DISCOVER");
                  setListItems(DISCOVER);
                }}
                className={pageName === "DISCOVER" ? "active" : ""}
              >
                DISCOVER
              </li>
              <li
                onClick={() => {
                  setPageName("DEVELOP");
                  setListItems(DEVELOP);
                  setCurrentListItem(DEVELOP[0]?.name);
                }}
                className={pageName === "DEVELOP" ? "active" : ""}
              >
                DEVELOP
              </li>
              <li
                onClick={() => {
                  setPageName("DISSECT");
                  setListItems(DISSECT);
                  setCurrentListItem(DISSECT[0]?.name);
                }}
                className={pageName === "DISSECT" ? "active" : ""}
              >
                DISSECT
              </li>
              <li
                onClick={() => {
                  handleDesignClick();
                  setPageName("DESIGN");
                  setListItems(DESIGN);
                  setCurrentListItem(DESIGN[0]?.name);
                }}
                className={pageName === "DESIGN" ? "active" : ""}
              >
                DESIGN
              </li>
              <li
                onClick={() => {
                  setPageName("DELIVER");
                  setListItems(DELIVER);
                  setCurrentListItem(DELIVER[0]?.name);
                }}
                className={pageName === "DELIVER" ? "active" : ""}
              >
                DELIVER
              </li>
            </ul>
          </div>
        </div>
        <div className="evp-content">
          <div className="evp-content-top">
            <CompanyDetailsLeftbar
              listItems={listItems}
              currentListItem={currentListItem}
              handleListItemClick={handleListItemClick}
            />
            <div className="company-detail-below-secondContainer">
              {pageName === "DISCOVER" ? (
                <Discover
                  setPageLoading={setPageLoading}
                  currentListItem={currentListItem}
                  setCurrentListItem={setCurrentListItem}
                  listItemEndpointMapping={listItemEndpointMapping}
                  companyName={companyName}
                  accessToken={accessToken}
                />
              ) : pageName === "DEVELOP" ? (
                <Develop
                  currentListItem={currentListItem}
                  listItemEndpointMapping={listItemEndpointMapping}
                  companyName={companyName}
                  accessToken={accessToken}
                />
              ) : pageName === "DISSECT" ? (
                <Dissect
                  currentListItem={currentListItem}
                  listItemEndpointMapping={listItemEndpointMapping}
                  companyName={companyName}
                  accessToken={accessToken}
                />
              ) : pageName === "DESIGN" ? (
                <Design
                  setPageLoading={setPageLoading}
                  currentListItem={currentListItem}
                  pillars={pillars}
                  newPillars={newPillars}
                  setPillars={setPillars}
                  setNewPillars={setNewPillars}
                  companyName={companyName}
                  accessToken={accessToken}
                />
              ) : pageName === "DELIVER" ? (
                <Deliver
                  setPageLoading={setPageLoading}
                  companyName={companyName}
                  accessToken={accessToken}
                  currentListItem={currentListItem}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="company-detail-next-button">
        <button onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="50"
            height="50"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CompanyDetail;
