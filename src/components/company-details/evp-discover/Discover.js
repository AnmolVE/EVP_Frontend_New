import React from "react";

import "./Discover.css";
import PrimaryResearch from "./primary-research/PrimaryResearch";
import SecondaryResearch from "./secondary-research/SecondaryResearch";
import DesignPrinciples from "./design-principles/DesignPrinciples";

function Discover({
  setPageLoading,
  currentListItem,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Design Principles" ? (
        <DesignPrinciples companyName={companyName} accessToken={accessToken} />
      ) : currentListItem === "Primary Research" ? (
        <PrimaryResearch />
      ) : currentListItem === "Secondary Research" ? (
        <SecondaryResearch setPageLoading={setPageLoading} />
      ) : null}
    </>
  );
}

export default Discover;
