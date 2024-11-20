import React from "react";
import { useNavigate } from "react-router-dom";

import { EVPJourneyImage } from "../../../assets/images/images";

import Navbar from "../../bars/Navbar";

import "./EVPJourney.css";

function EVPJourney() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="evp-journey-container">
        <div className="evp-journey-content-container">
          <div className="evp-journey-content">
            <div className="evp-journey-content-text">
              <h2 className="evp-journey-heading">EVP Journey</h2>
              <p className="evp-journey-para">
                An Employee Value Proposition is the essence of your brand
              </p>
              <p className="evp-journey-info-para">
                It is the unique selling point that sets you apart from
                competition to attract and retain top talent. A well-defined EVP
                drives tangible business results, including up to 50% more
                qualified candidates, a 30% reduction in attrition, and upto 2X
                faster time-to-fill.
              </p>
            </div>
            <figure className="evp-journey-image">
              <img src={EVPJourneyImage} alt="image" />
            </figure>
          </div>
        </div>
        <div className="evp-journey-button-container">
          <button className="default-btn">Get Started</button>
        </div>
        <div className="five-ds">
          <div className="five-ds-heading">
            <h2>5-Step-Process</h2>
          </div>
          <div className="five-ds-cards">
            <div className="five-ds-card">
              <p className="five-ds-card-heading">DISCOVER</p>
              <p className="five-ds-card-para">
                This is the data collection stage of the EVP creation process
                via primary and secondary research
              </p>
            </div>
            <div className="five-ds-card">
              <p className="five-ds-card-heading">DEVELOP</p>
              <p className="five-ds-card-para">
                This is the data collection stage of the EVP creation process
                via primary and secondary research
              </p>
            </div>
            <div className="five-ds-card">
              <p className="five-ds-card-heading">DISSECT</p>
              <p className="five-ds-card-para">
                This is the data collection stage of the EVP creation process
                via primary and secondary research
              </p>
            </div>
            <div className="five-ds-card">
              <p className="five-ds-card-heading">DESIGN</p>
              <p className="five-ds-card-para">
                This is the data collection stage of the EVP creation process
                via primary and secondary research
              </p>
            </div>
            <div className="five-ds-card">
              <p className="five-ds-card-heading">DELIVER</p>
              <p className="five-ds-card-para">
                This is the data collection stage of the EVP creation process
                via primary and secondary research
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EVPJourney;
