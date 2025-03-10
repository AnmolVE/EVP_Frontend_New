import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { fetchDataForSelectedItem } from "../../features/inputfields/inputfieldsSlice";

import "./EVP.css";

import Navbar from "../bars/Navbar";
import Footer from "../bars/Footer";
import ModuleFlow from "../common/common-components/module-flow/ModuleFlow";
import DesignPrinciples from "./evp-discover/evp-design-principles/DesignPrinciples";
import PrimaryResearch from "./evp-discover/evp-primary-research/PrimaryResearch";
import SecondaryResearch from "./evp-discover/evp-secondary-research/SecondaryResearch";
import EVPTollgate1 from "./evp-discover/discover-tollgate/EVPTollgate1";
import CompanyDataset from "./evp-develop/evp-company-dataset/CompanyDataset";
import KeyThemes from "./evp-develop/evp-key-themes/KeyThemes";
import AttributesOfAGreatPlace from "./evp-develop/evp-attributes-of-a-great-place/AttributesOfAGreatPlace";
import AudienceWiseMessaging from "./evp-develop/evp-audience-wise-messaging/AudienceWiseMessaging";
import TalentInsights from "./evp-develop/evp-talent-insights/TalentInsights";
import EVPTollgate2 from "./evp-develop/develop-tollgate/EVPTollgate2";
import Analysis from "./evp-dissect/evp-analysis/Analysis";
import Alignment from "./evp-dissect/evp-alignment/Alignment";
import EVPTollgate3 from "./evp-dissect/dissect-tollgate/EVPTollgate3";
import EVPStatement from "./evp-design/evp-statement/EVPStatement";
import CreativeDirection from "./evp-design/evp-creative-direction/CreativeDirection";
import EvpDefinition from "./evp-design/evp-definition/EvpDefinition";
import EVPAudit from "./evp-design/evp-audit/EVPAudit";
import EvpPromise from "./evp-design/evp-promise/EvpPromise";
import EVPTollgate4 from "./evp-design/design-tollgate/EVPTollgate4";
import EVPHandbook from "./evp-deliver/evp-handbook/EVPHandbook";
import EVPCalendar from "./evp-deliver/evp-calendar/EVPCalendar";
import EVPTollgate5 from "./evp-deliver/deliver-tollgate/EVPTollgate5";
import EVPEmbedment from "./evp-deliver/evp-embedment/EVPEmbedment";

import { fieldNames } from "./evpFields";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVP() {
  const dispatch = useDispatch();

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const companyName = loginData.companyName;
  const accessToken = loginData.access;

  const [activeTab, setActiveTab] = useState("DISCOVER");
  const [activeSubTab, setActiveSubTab] = useState("Design Principles");

  const [activeModule, setActiveModule] = useState("Position");

  useEffect(() => {
    dispatch(fetchDataForSelectedItem(activeSubTab));
  }, [activeSubTab]);

  const handleNextClick = () => {
    const subTabs = fieldNames[activeTab];
    const currentIndex = subTabs.indexOf(activeSubTab);

    if (currentIndex < subTabs.length - 1) {
      setActiveSubTab(subTabs[currentIndex + 1]);
    } else {
      const tabs = Object.keys(fieldNames);
      const currentTabIndex = tabs.indexOf(activeTab);

      if (currentTabIndex < tabs.length - 1) {
        const nextTab = tabs[currentTabIndex + 1];
        setActiveTab(nextTab);
        setActiveSubTab(fieldNames[nextTab][0]);
      }
    }
  };

  const handleBackClick = () => {
    const subTabs = fieldNames[activeTab];
    const currentIndex = subTabs.indexOf(activeSubTab);

    if (currentIndex > 0) {
      setActiveSubTab(subTabs[currentIndex - 1]);
    } else {
      const tabs = Object.keys(fieldNames);
      const currentTabIndex = tabs.indexOf(activeTab);

      if (currentTabIndex > 0) {
        const prevTab = tabs[currentTabIndex - 1];
        setActiveTab(prevTab);
        setActiveSubTab(fieldNames[prevTab][fieldNames[prevTab].length - 1]);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="evp-mainContainer">
        <ModuleFlow
          companyName={companyName}
          accessToken={accessToken}
          activeModule={activeModule}
          setActiveModule={setActiveModule}
        />
        <div className="evp-container">
          <div className="evp-left-bar">
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DISCOVER");
                  setActiveSubTab("Design Principles");
                }}
              >
                <p>DISCOVER</p>
              </div>
              {activeTab === "DISCOVER" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Design Principles" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Design Principles")}
                  >
                    Design Principles
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Primary Research" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Primary Research")}
                  >
                    Primary Research
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Secondary Research" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Secondary Research")}
                  >
                    Secondary Research
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Tollgate 1" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Tollgate 1")}
                  >
                    Tollgate 1
                  </div>
                </div>
              ) : null}
            </div>
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DEVELOP");
                  setActiveSubTab("Company Dataset");
                }}
              >
                <p>DEVELOP</p>
              </div>
              {activeTab === "DEVELOP" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Company Dataset" ? "active-sub" : ""
                    }`}
                    onClick={() => {
                      setActiveSubTab("Company Dataset");
                    }}
                  >
                    Company Dataset
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Key Themes" ? "active-sub" : ""
                    }`}
                    onClick={() => {
                      setActiveSubTab("Key Themes");
                    }}
                  >
                    Key Themes
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Attributes of an Attractive Workplace"
                        ? "active-sub"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveSubTab("Attributes of an Attractive Workplace")
                    }
                  >
                    Attributes of an Attractive Workplace
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Audience Wise Messaging"
                        ? "active-sub"
                        : ""
                    }`}
                    onClick={() => setActiveSubTab("Audience Wise Messaging")}
                  >
                    Audience Wise Messaging
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Talent Insights" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Talent Insights")}
                  >
                    Talent Insights
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Tollgate 2" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Tollgate 2")}
                  >
                    Tollgate 2
                  </div>
                </div>
              ) : null}
            </div>
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DISSECT");
                  setActiveSubTab("Analysis");
                }}
              >
                <p>DISSECT</p>
              </div>
              {activeTab === "DISSECT" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Analysis" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Analysis")}
                  >
                    Analysis
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Alignment" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Alignment")}
                  >
                    Alignment
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Tollgate 3" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Tollgate 3")}
                  >
                    Tollgate 3
                  </div>
                </div>
              ) : null}
            </div>
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DESIGN");
                  setActiveSubTab("EVP Statement");
                }}
              >
                <p>DESIGN</p>
              </div>
              {activeTab === "DESIGN" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Statement" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Statement")}
                  >
                    EVP Statement
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Creative Direction" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Creative Direction")}
                  >
                    Creative Direction
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Definition" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Definition")}
                  >
                    EVP Definition
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Audit" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Audit")}
                  >
                    EVP Audit
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Promise" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Promise")}
                  >
                    EVP Promise
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Tollgate 4" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Tollgate 4")}
                  >
                    Tollgate 4
                  </div>
                </div>
              ) : null}
            </div>
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DELIVER");
                  setActiveSubTab("EVP Handbook");
                }}
              >
                <p>DELIVER</p>
              </div>
              {activeTab === "DELIVER" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Handbook" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Handbook")}
                  >
                    EVP Handbook
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Calendar" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Calendar")}
                  >
                    EVP Calendar
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Tollgate 5" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Tollgate 5")}
                  >
                    Tollgate 5
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab evp-embedment ${
                      activeSubTab === "EVP Embedment" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Embedment")}
                  >
                    <div className="evp-embedment-box">
                      <span className="custom_para2">Next Step:</span> Bring
                      Your EVP to Life! You've defined your Positioning
                      statement. Now it's time to embed it across key talent
                      touchpoints ➡️{" "}
                      <span className="custom_para2">move to Create</span>.
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="evp-content">
            {activeSubTab === "Design Principles" ? (
              <DesignPrinciples
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Primary Research" ? (
              <PrimaryResearch
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Secondary Research" ? (
              <SecondaryResearch
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Tollgate 1" ? (
              <EVPTollgate1
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Company Dataset" ? (
              <CompanyDataset
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Key Themes" ? (
              <KeyThemes companyName={companyName} accessToken={accessToken} />
            ) : null}
            {activeSubTab === "Attributes of an Attractive Workplace" ? (
              <AttributesOfAGreatPlace />
            ) : null}
            {activeSubTab === "Audience Wise Messaging" ? (
              <AudienceWiseMessaging />
            ) : null}
            {activeSubTab === "Talent Insights" ? <TalentInsights /> : null}
            {activeSubTab === "Tollgate 2" ? (
              <EVPTollgate2
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Analysis" ? (
              <Analysis companyName={companyName} accessToken={accessToken} />
            ) : null}
            {activeSubTab === "Alignment" ? (
              <Alignment companyName={companyName} accessToken={accessToken} />
            ) : null}
            {activeSubTab === "Tollgate 3" ? (
              <EVPTollgate3
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "EVP Statement" ? (
              <EVPStatement
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Creative Direction" ? (
              <CreativeDirection />
            ) : null}
            {activeSubTab === "EVP Definition" ? <EvpDefinition /> : null}
            {activeSubTab === "EVP Audit" ? <EVPAudit /> : null}
            {activeSubTab === "EVP Promise" ? <EvpPromise /> : null}
            {activeSubTab === "Tollgate 4" ? (
              <EVPTollgate4
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "EVP Handbook" ? (
              <EVPHandbook
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "EVP Calendar" ? (
              <EVPCalendar
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "Tollgate 5" ? (
              <EVPTollgate5
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
            {activeSubTab === "EVP Embedment" ? (
              <EVPEmbedment
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : null}
          </div>
        </div>
        <div className="evp-backButton">
          <button onClick={handleBackClick}>
            <AiOutlineLeft />
          </button>
        </div>
        <div className="evp-nextButton">
          <button onClick={handleNextClick}>
            <AiOutlineRight />
          </button>
        </div>
        {/* <div className="evp-downloadButton">
          <button>
            <FaRegEye />
          </button>
          <button>
            <IoCloudDownloadOutline />
          </button>
        </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default EVP;
