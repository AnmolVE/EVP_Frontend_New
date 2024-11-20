import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./EvpExecutionPlan.css";

function EvpExecutionPlan() {
  const { data } = useSelector((store) => store.inputField);
  console.log(data);

  const [expandedStage, setExpandedStage] = useState(null);
  const [expandedTouchpoints, setExpandedTouchpoints] = useState({});
  const [executionPlanData, setExecutionPlanData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setExecutionPlanData(data);
      if (data[0]) {
        setExpandedStage(data[0].stage);
        if (data[0].touchpoints && data[0].touchpoints[0]) {
          setExpandedTouchpoints({
            [data[0].stage]: data[0].touchpoints[0].touchpoint,
          });
        }
      }
    }
  }, [data]);

  const handleStageToggle = (stage) => {
    setExpandedStage((prev) => (prev === stage ? null : stage));
  };

  const handleTouchpointToggle = (stage, touchpoint) => {
    setExpandedTouchpoints((prev) => ({
      ...prev,
      [stage]: prev[stage] === touchpoint ? null : touchpoint,
    }));
  };

  return (
    <div className="evp-execution-plan-main-container">
      {executionPlanData.length > 0 &&
        executionPlanData.map((data) => (
          <div key={data.stage}>
            <div className="evp-execution-plan-stages-section">
              <button onClick={() => handleStageToggle(data.stage)}>
                {expandedStage === data.stage ? "-" : "+"}
              </button>
              <p>{data.stage}</p>
            </div>
            {expandedStage === data.stage && (
              <div className="evp-execution-plan-touchpoints-section">
                {data.touchpoints.map((touchpoint) => (
                  <div key={touchpoint.touchpoint}>
                    <div className="evp-execution-plan-touchpoints-section-touchpoint">
                      <button
                        onClick={() =>
                          handleTouchpointToggle(
                            data.stage,
                            touchpoint.touchpoint
                          )
                        }
                      >
                        {expandedTouchpoints[data.stage] ===
                        touchpoint.touchpoint
                          ? "-"
                          : "+"}
                      </button>
                      <p>{touchpoint.touchpoint}</p>
                    </div>
                    {expandedTouchpoints[data.stage] ===
                      touchpoint.touchpoint && (
                      <div className="evp-execution-plan-touchpoints-section-data">
                        <p>{touchpoint.messaging_or_recommendation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default EvpExecutionPlan;
