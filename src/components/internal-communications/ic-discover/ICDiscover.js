import React, { useState } from "react";

import "./ICDiscover.css";
import ICICSI from "./ic-internal-communication-strategy-inputs/ICICSI";
import ICPrimaryResearch from "./ic-primary-research/ICPrimaryResearch";
import ICSecondaryResearch from "./ic-secondary-research/ICSecondaryResearch";

function ICDiscover({ companyName, accessToken }) {
  const [activeTab, setActiveTab] = useState(
    "Internal Communication Strategy Inputs"
  );

  return (
    <div className="ic-discover">
      <div className="ic-discover-left-nav">
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Internal Communication Strategy Inputs"
              ? "active"
              : ""
          }`}
          onClick={() => setActiveTab("Internal Communication Strategy Inputs")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Internal Communication Strategy Inputs</p>
          </div>
        </div>
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Primary Research" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Primary Research")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Primary Research</p>
          </div>
        </div>
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Secondary Research" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Secondary Research")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Secondary Research</p>
          </div>
        </div>
      </div>
      <div className="ic-discover-main-content">
        {activeTab === "Internal Communication Strategy Inputs" && (
          <ICICSI companyName={companyName} accessToken={accessToken} />
        )}
        {activeTab === "Primary Research" && <ICPrimaryResearch />}
        {activeTab === "Secondary Research" && <ICSecondaryResearch />}
      </div>
    </div>
  );
}

export default ICDiscover;
