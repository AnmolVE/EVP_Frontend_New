import React, { useState } from "react";

import "./ICDissect.css";
import ICKeyThemes from "./ic-key-themes/ICKeyThemes";
import ICAlignment from "./ic-alignment/ICAlignment";

function ICDissect() {
  const [activeTab, setActiveTab] = useState("Key Themes");

  return (
    <div className="ic-dissect">
      <div className="ic-dissect-left-nav">
        <div
          className={`ic-dissect-left-nav-tab ${
            activeTab === "Key Themes" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Key Themes")}
        >
          <div className="ic-dissect-left-nav-tab-content">
            <p>Key Themes</p>
          </div>
        </div>
        <div
          className={`ic-dissect-left-nav-tab ${
            activeTab === "Alignment" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Alignment")}
        >
          <div className="ic-dissect-left-nav-tab-content">
            <p>Alignment</p>
          </div>
        </div>
        <div
          className={`ic-dissect-left-nav-tab ${
            activeTab === "Tab 3" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 3")}
        >
          <div className="ic-dissect-left-nav-tab-content">
            <p>Tab 3</p>
          </div>
        </div>
      </div>
      <div className="ic-dissect-main-content">
        {activeTab === "Key Themes" && <ICKeyThemes />}
        {activeTab === "Alignment" && <ICAlignment />}
        {activeTab === "Tab 3" && <div>Tab 3</div>}
      </div>
    </div>
  );
}

export default ICDissect;
