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
    title: "EVP",
    shortText:
      "Your EVP is the core of your employer brand—the promise that sets you apart in attracting and retaining top talent. Organisations with a clear, well-defined EVP see bottom-line impact.",
    viewDetails: "/evp",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "Create",
    shortText:
      "Content fuels every module, transforming strategy into compelling storytelling. Seamlessly embedded across the platform, it ensures your employer brand is consistent, engaging, and impactful at every touchpoint.",
    viewDetails: "/evp-embedment",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Measure",
    shortText:
      "Your employer brand isn’t just external—it’s how your employees experience it daily. We ensure internal touchpoints reflect your true brand identity, building alignment and engagement.",
    viewDetails: "",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "Engage",
    shortText:
      "Measuring employer brand is both an art and a science. Our proprietary algorithm distils key metrics into a single composite score, delivering actionable insights in a comprehensive report.",
    viewDetails: "",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Amplify",
    shortText:
      "Leaders define your brand. We help them communicate with clarity, consistency, and authenticity, shaping their voice as inspirational and approachable.",
    viewDetails: "",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Attract",
    shortText:
      "Attracting AI talent? Positioning your brand around a key theme? Our AI-powered campaigns deliver the right message to the right audience—backed by data and research.",
    viewDetails: "",
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
                    <h3>
                      <Link to={value.viewDetails}>{value.title}</Link>
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
