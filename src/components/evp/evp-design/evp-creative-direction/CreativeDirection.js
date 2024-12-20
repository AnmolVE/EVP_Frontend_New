import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";

import "./CreativeDirection.css";

function CreativeDirection() {
  const { data } = useSelector((store) => store.inputField);
  const [creativeDirectionData, setCreativeDirectionData] = useState({});

  useEffect(() => {
    if (data) {
      setCreativeDirectionData(data);
    }
  }, [data]);

  return (
    <div className="evp-creativeDirection">
      <h2 className="custom_h2">Creative Direction</h2>
      <p className="custom_para">
        Validate your Creative Direction data before it goes to next step
      </p>
      <div className="evp-creativeDirection-container">
        <div className="evp-creativeDirection-taglines">
          <h4>Tagline</h4>
          <p className="custom_para2">{creativeDirectionData.tagline}</p>
        </div>
        <div className="evp-creativeDirection-visualConcept">
          <h4>Visual Concept</h4>
          <p className="custom_para2">{creativeDirectionData.visual_concept}</p>
        </div>
      </div>
      <ContentButtons />
    </div>
  );
}

export default CreativeDirection;
