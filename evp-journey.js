import React from "react";
import { useNavigate } from "react-router-dom";

import { EVPJourneyImage } from "../../../assets/images/images";

import "./EVPJourney.css";

function EVPJourney() {
  const navigate = useNavigate();

  return (
    <div className="evp-journey-main-container">
      <div className="evp-journey-information">
        <div className="evp-journey-information-top">
          <p className="evp-journey-information-top-para-heading">
            EVP Journey
          </p>
          <p className="evp-journey-para">
            An Employee Value Proposition is the essence of your brand
          </p>
          <p className="evp-journey-info-para">
            It is the unique selling point that sets you apart from competition
            to attract and retain top talent. A well-defined EVP drives tangible
            business results, including up to 50% more qualified candidates, a
            30% reduction in attrition, and upto 2X faster time-to-fill.
          </p>
        </div>
        <hr />
        <div className="evp-journey-information-bottom">
          <h4>5-Step-Process</h4>
          <ul className="evp-journey-information-bottom-unordered-list">
            <li>
              DISCOVER: This is the data collection stage of the EVP process via
              primary and secondary research
            </li>
            <li>
              DEVELOP: The data is segmented into talent categories that are
              relevant to building a value proposition
            </li>
            <li>
              DISSECT: The data is analysed by conducting SWOT and Sentiment
              analyses and provides insights
            </li>
            <li>
              DESIGN: The data and insights are converted to messaging and final
              positioning in the design stage
            </li>
            <li>
              DELIVER: The messaging is taken offline and refined by the
              humans-in-loop to provide final outcomes
            </li>
          </ul>
        </div>
        <div className="evp-journey-button">
          <button onClick={() => navigate("/company-detail")}>
            Get Started
          </button>
        </div>
      </div>
      <div className="evp-journey-image">
        <figure className="evp-journey-image-figure">
          <img src={EVPJourneyImage} alt="EVP Journey" />
        </figure>
      </div>
    </div>
  );
}

export default EVPJourney;
