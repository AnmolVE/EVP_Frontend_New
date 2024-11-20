import React, { useState } from "react";

import "./ICDeliver.css";

function ICDeliver() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <div className="ic-deliver">
      <div className="ic-deliver-left-nav">
        <div
          className={`ic-deliver-left-nav-tab ${
            activeTab === "Tab 1" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 1")}
        >
          <div className="ic-deliver-left-nav-tab-content">
            <p>Tab 1</p>
          </div>
        </div>
        <div
          className={`ic-deliver-left-nav-tab ${
            activeTab === "Tab 2" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 2")}
        >
          <div className="ic-deliver-left-nav-tab-content">
            <p>Tab 2</p>
          </div>
        </div>
        <div
          className={`ic-deliver-left-nav-tab ${
            activeTab === "Tab 3" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 3")}
        >
          <div className="ic-deliver-left-nav-tab-content">
            <p>Tab 3</p>
          </div>
        </div>
      </div>
      <div className="ic-deliver-main-content">
        {activeTab === "Tab 1" && <div>Tab 1</div>}
        {activeTab === "Tab 2" && <div>Tab 2</div>}
        {activeTab === "Tab 3" && <div>Tab 3</div>}
      </div>
    </div>
  );
}

export default ICDeliver;
