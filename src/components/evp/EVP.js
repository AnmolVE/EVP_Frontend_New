import React, { useState } from "react";

import Navbar from "../bars/Navbar";
import Footer from "../bars/Footer";

import "./EVP.css";
import PrimaryResearch from "./evp-discover/evp-primary-research/PrimaryResearch";
import CompanyDataset from "./evp-develop/evp-company-dataset/CompanyDataset";
import AttributesOfAGreatPlace from "./evp-develop/evp-attributes-of-a-great-place/AttributesOfAGreatPlace";
import AudienceWiseMessaging from "./evp-develop/evp-audience-wise-messaging/AudienceWiseMessaging";
import Analysis from "./evp-dissect/evp-analysis/Analysis";
import Alignment from "./evp-dissect/evp-alignment/Alignment";
import TalentInsights from "./evp-develop/evp-talent-insights/TalentInsights";
import EvpDefinition from "./evp-design/evp-definition/EvpDefinition";
import EVPAudit from "./evp-design/evp-audit/EVPAudit";
import EvpPromise from "./evp-design/evp-promise/EvpPromise";
import DesignPrinciples from "./evp-discover/evp-design-principles/DesignPrinciples";
import KeyThemes from "./evp-develop/evp-key-themes/KeyThemes";
import SecondaryResearch from "./evp-discover/evp-secondary-research/SecondaryResearch";
import MessagingHierarchy from "./evp-design/evp-messaging-hierarchy/MessagingHierarchy";
import EVPEmbedment from "./evp-design/evp-embedment/EVPEmbedment";

function EVP() {
  const [activeTab, setActiveTab] = useState("DISCOVER");
  const [activeSubTab, setActiveSubTab] = useState("Design Principles");

  return (
    <>
      <Navbar />
      <div className="evp-mainContainer">
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
                    onClick={() => setActiveSubTab("Company Dataset")}
                  >
                    Company Dataset
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Key Themes" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Key Themes")}
                  >
                    Key Themes
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Attributes of a Great Place"
                        ? "active-sub"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveSubTab("Attributes of a Great Place")
                    }
                  >
                    Attributes of a Great Place
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
                </div>
              ) : null}
            </div>
            <div className="evp-left-bar-tabs">
              <div
                className="evp-left-bar-mainTabs"
                onClick={() => {
                  setActiveTab("DESIGN");
                  setActiveSubTab("Messaging Hierarchy");
                }}
              >
                <p>DESIGN</p>
              </div>
              {activeTab === "DESIGN" ? (
                <div className="evp-left-bar-subTabs">
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "Messaging Hierarchy" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("Messaging Hierarchy")}
                  >
                    Messaging Hierarchy
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
                      activeSubTab === "EVP Embedment" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Embedment")}
                  >
                    EVP Embedment
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
                      activeSubTab === "EVP Statement and Pillars"
                        ? "active-sub"
                        : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Statement and Pillars")}
                  >
                    EVP Statement and Pillars
                  </div>
                  <div
                    className={`evp-left-bar-subTabs-tab ${
                      activeSubTab === "EVP Execution Plan" ? "active-sub" : ""
                    }`}
                    onClick={() => setActiveSubTab("EVP Execution Plan")}
                  >
                    EVP Execution Plan
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="evp-content">
            {activeSubTab === "Design Principles" ? <DesignPrinciples /> : null}
            {activeSubTab === "Primary Research" ? <PrimaryResearch /> : null}
            {activeSubTab === "Secondary Research" ? (
              <SecondaryResearch />
            ) : null}
            {activeSubTab === "Company Dataset" ? <CompanyDataset /> : null}
            {activeSubTab === "Key Themes" ? <KeyThemes /> : null}
            {activeSubTab === "Attributes of a Great Place" ? (
              <AttributesOfAGreatPlace />
            ) : null}
            {activeSubTab === "Audience Wise Messaging" ? (
              <AudienceWiseMessaging />
            ) : null}
            {activeSubTab === "Talent Insights" ? <TalentInsights /> : null}
            {activeSubTab === "Analysis" ? <Analysis /> : null}
            {activeSubTab === "Alignment" ? <Alignment /> : null}
            {activeSubTab === "Messaging Hierarchy" ? (
              <MessagingHierarchy />
            ) : null}
            {activeSubTab === "Creative Direction" ? (
              <div>Coming soon...</div>
            ) : null}
            {activeSubTab === "EVP Embedment" ? <EVPEmbedment /> : null}
            {activeSubTab === "EVP Definition" ? <EvpDefinition /> : null}
            {activeSubTab === "EVP Audit" ? <EVPAudit /> : null}
            {activeSubTab === "EVP Promise" ? <EvpPromise /> : null}
            {activeSubTab === "EVP Handbook" ? <div>Coming soon...</div> : null}
            {activeSubTab === "EVP Statement and Pillars" ? (
              <div>Coming soon...</div>
            ) : null}
            {activeSubTab === "EVP Execution Plan" ? (
              <div>Coming soon...</div>
            ) : null}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default EVP;
