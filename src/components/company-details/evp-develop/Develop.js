import React from "react";

import "./Develop.css";
import CompanyInfo from "./company-info/CompanyInfo";
import AttributeOfGreatPlace from "./attribute-of-great-place/AttributeOfGreatPlace";
import KeyThemes from "./key-themes/KeyThemes";
import AudienceWiseMessaging from "./audience-wise-messaging/AudienceWiseMessaging";
import TalentInsights from "./talent-insights/TalentInsights";

function Develop({
  setLoading,
  currentListItem,
  setCurrentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Company Dataset" ? (
        <div className="develop-main-container">
          <CompanyInfo
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Attributes of Great Place" ? (
        <div className="develop-main-container">
          <AttributeOfGreatPlace
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Key Themes" ? (
        <div className="develop-main-container">
          <KeyThemes
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Audience Wise Messaging" ? (
        <div className="develop-main-container">
          <AudienceWiseMessaging
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Talent Insights" ? (
        <div className="develop-main-container">
          <TalentInsights
            setLoading={setLoading}
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

export default Develop;
