import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "./LandingPage.css";

import {
  LandingOne,
  LandingTwo,
  LandingThree,
  LandingFour,
  LandingFive,
  LandingSix,
} from "../../assets/images/images";

import Navbar from "../bars/Navbar";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Employee Value Proposition",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "Content & Creative",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Internal Comms",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "Employer Brand Index",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Leadership Branding",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Recruitment Campaign",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function LandingPage() {
  const navigate = useNavigate();

  const [homePageData, setHomePageData] = useState([]);

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const companyName = loginData.companyName;

  return (
    <>
      <Navbar />
      <div className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Services</span>
            <h2>What would you like to do today?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              architecto quaerat eaque sapiente accusantium ad ut explicabo
              consequuntur fuga quidem? Sint.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card">
                    <i className={value.iconName}></i>
                    <h3 onClick={() => navigate("/evp")}>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <img src={LandingOne} alt="Image" width={300} height={375} />
          <img src={LandingTwo} alt="Image" width={300} height={375} />
          <img src={LandingThree} alt="Image" width={41} height={36} />
          <img src={LandingFour} alt="Image" width={20} height={20} />
          <img src={LandingFive} alt="Image" width={28} height={30} />
          <img src={LandingSix} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
