import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "./Alignment.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function Alignment() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [alignmentData, setAlignmentData] = useState([]);
  const [activeThemeId, setActiveThemeId] = useState(null);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setAlignmentData(data);
      setActiveThemeId(data[0]?.id);
    }
  }, [data]);

  const handleThemeClick = (id) => {
    setActiveThemeId((prevId) => (prevId === id ? null : id));
  };

  const getRotationClass = (id) =>
    activeThemeId === id ? "alignmentRotatedIcon" : "";

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-alignment">
      <h2 className="custom_h2">Alignment</h2>
      <p className="custom_para">
        Clarify how you want to be perceived and positioned.
      </p>
      <div className="evp-alignment-container">
        <div className="evp-alignments">
          {alignmentData?.map((item) => (
            <div key={item.id} className="evp-alignments-theme">
              <div
                className="evp-alignment-themeName"
                onClick={() => handleThemeClick(item.id)}
              >
                <div
                  className={`evp-alignments-theme-icon ${getRotationClass(
                    item.id
                  )}`}
                >
                  <AiOutlineRight />
                </div>
                <h4>{item.theme_name}</h4>
              </div>
              {activeThemeId === item.id && (
                <div className="evp-alignment-themeData">
                  <div className="evp-alignment-themeData-aspects">
                    <h4>Positive Aspects (that support this principle)</h4>
                    <p className="custom_para2">{item.positive_aspects}</p>
                  </div>
                  <div className="evp-alignment-themeData-aspects">
                    <h4>
                      Negative Aspects (that do not support this principle)
                    </h4>
                    <p className="custom_para2">{item.negative_aspects}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ContentButtons />
    </div>
  );
}

export default Alignment;
