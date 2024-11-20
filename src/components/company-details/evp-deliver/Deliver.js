import React from "react";
import "./Deliver.css";
import EvpExecutionPlan from "./evp-execution-plan/EvpExecutionPlan";
import EvpStatement from "./evp-statement-and-pillars/EvpStatement";
import EVPHandbook from "./evp-handbook/EVPHandbook";

function Deliver({
  setPageLoading,
  companyName,
  accessToken,
  currentListItem,
}) {
  return (
    <>
      {currentListItem === "EVP Statement & Pillars" ? (
        <EvpStatement />
      ) : currentListItem === "EVP Hero Creative" ? (
        <div>EVP Hero Creative</div>
      ) : currentListItem === "EVP Narrative" ? (
        <div>EVP Narrative</div>
      ) : currentListItem === "EVP Talking Points" ? (
        <div>EVP Talking Points</div>
      ) : currentListItem === "EVP Handbook" ? (
        <EVPHandbook
          setPageLoading={setPageLoading}
          companyName={companyName}
          accessToken={accessToken}
        />
      ) : currentListItem === "EVP Execution Plan" ? (
        <EvpExecutionPlan />
      ) : null}
    </>
  );
}

export default Deliver;
