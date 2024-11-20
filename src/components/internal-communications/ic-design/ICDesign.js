import React, { useState } from "react";

import "./ICDesign.css";
import ICCurrentStrategy from "./ic-current-strategy/ICCurrentStrategy";
import ICCalendar from "./ic-calendar/ICCalendar";
import ICCreateCommunication from "./ic-create-communication/ICCreateCommunication";

function ICDesign() {
  const [activeTab, setActiveTab] = useState("Current Strategy");

  return (
    <div className="ic-design">
      <div className="ic-design-left-nav">
        <div
          className={`ic-design-left-nav-tab ${
            activeTab === "Current Strategy" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Current Strategy")}
        >
          <div className="ic-design-left-nav-tab-content">
            <p>Current Strategy</p>
          </div>
        </div>
        <div
          className={`ic-design-left-nav-tab ${
            activeTab === "Calendar" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Calendar")}
        >
          <div className="ic-design-left-nav-tab-content">
            <p>Calendar</p>
          </div>
        </div>
        <div
          className={`ic-design-left-nav-tab ${
            activeTab === "Create Communication" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Create Communication")}
        >
          <div className="ic-design-left-nav-tab-content">
            <p>Create Communication</p>
          </div>
        </div>
      </div>
      <div className="ic-design-main-content">
        {activeTab === "Current Strategy" && <ICCurrentStrategy />}
        {activeTab === "Calendar" && <ICCalendar />}
        {activeTab === "Create Communication" && <ICCreateCommunication />}
      </div>
    </div>
  );
}

export default ICDesign;
