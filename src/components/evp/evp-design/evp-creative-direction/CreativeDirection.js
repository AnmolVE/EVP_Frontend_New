import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";

import "./CreativeDirection.css";
import Loading from "../../../utils/loading/Loading";

function CreativeDirection() {
  const { data, loading } = useSelector((store) => store.inputField);
  const [creativeDirectionData, setCreativeDirectionData] = useState({});

  useEffect(() => {
    if (data) {
      setCreativeDirectionData(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-creativeDirection">
      <h2 className="custom_h2">Creative Direction</h2>
      <p className="custom_para">
        Define tone, visuals, and concepts for a cohesive EVP.
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
        <figure>
          <img src="" alt="Creative Image" />
        </figure>
      </div>
      <ContentButtons />
    </div>
  );
}

export default CreativeDirection;
