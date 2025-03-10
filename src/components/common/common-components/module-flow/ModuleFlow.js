import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaCheckCircle } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

import "./ModuleFlow.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function ModuleFlow({
  companyName,
  accessToken,
  activeModule,
  setActiveModule,
}) {
  const [finishedModules, setFinishedModules] = useState([]);

  const modules = [
    "Position",
    "Create",
    "Engage",
    "Influence",
    "Attract",
    "Measure",
  ];

  useEffect(() => {
    const fetchFinishedModules = async () => {
      try {
        const response = await fetch(
          `${REACT_APP_BASE_URL}/finished-modules/?company_name=${encodeURIComponent(
            companyName
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setFinishedModules(
          responseData.data.map((module) => module.module_name)
        );
      } catch (error) {
        console.error("Error fetching finished modules:", error);
      }
    };
    fetchFinishedModules();
  }, []);

  return (
    <div className="moduleFlow-main">
      {modules.map((module) => (
        <div
          key={module}
          className="moduleFlow"
          onClick={() => setActiveModule(module)}
        >
          <span
            className={`${
              activeModule === module
                ? "activeModuleFlow"
                : finishedModules.includes(module)
                ? "fetchModuleFlow"
                : "defaultModuleFlow"
            }`}
          >
            {activeModule === module ? (
              <FaLongArrowAltRight />
            ) : finishedModules.includes(module) ? (
              <FaCheckCircle />
            ) : null}
          </span>
          <div className="custom_para2">{module}</div>
          <span className="moduleFlow-secondIcon">
            <HiArrowLongRight />
          </span>
        </div>
      ))}
    </div>
  );
}

export default ModuleFlow;
