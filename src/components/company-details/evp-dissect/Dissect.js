import React from "react";

import "./Dissect.css";
import Analysis from "./analysis/Analysis";
import Alignment from "./alignment/Alignment";

function Dissect({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Analysis" ? (
        <div className="dissect-main-container">
          <Analysis
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Alignment" ? (
        <div className="dissect-main-container">
          <Alignment
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : null}
    </>
  );
}

export default Dissect;
