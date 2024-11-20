import React, { useState } from "react";

import "./ICDevelop.css";
import AttributesOfRobustCommunication from "./ic-attributes-of-robust-communication/AttributesOfRobustCommunication";

function ICDevelop() {
  const [activeTab, setActiveTab] = useState(
    "Attributes of Robust Communication"
  );

  return (
    <div className="ic-develop">
      <div className="ic-develop-left-nav">
        <div
          className={`ic-develop-left-nav-tab ${
            activeTab === "Attributes of Robust Communication" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Attributes of Robust Communication")}
        >
          <div className="ic-develop-left-nav-tab-content">
            <p>Attributes of Robust Communication</p>
          </div>
        </div>
        <div
          className={`ic-develop-left-nav-tab ${
            activeTab === "Tab 2" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 2")}
        >
          <div className="ic-develop-left-nav-tab-content">
            <p>Tab 2</p>
          </div>
        </div>
        <div
          className={`ic-develop-left-nav-tab ${
            activeTab === "Tab 3" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 3")}
        >
          <div className="ic-develop-left-nav-tab-content">
            <p>Tab 3</p>
          </div>
        </div>
      </div>
      <div className="ic-develop-main-content">
        {activeTab === "Attributes of Robust Communication" && (
          <AttributesOfRobustCommunication />
        )}
        {activeTab === "Tab 2" && <div>Tab 2</div>}
        {activeTab === "Tab 3" && <div>Tab 3</div>}
      </div>
    </div>
  );
}

export default ICDevelop;
