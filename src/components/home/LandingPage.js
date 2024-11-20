import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./LandingPage.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function LandingPage() {
  const navigate = useNavigate();

  const [homePageData, setHomePageData] = useState([]);

  const companyName = localStorage.getItem("companyName");

  const fetchData = async () => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/home-page/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company_name: companyName }),
      });
      if (response.ok) {
        const data = await response.json();
        setHomePageData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="landing-page-main-container">
      <section className="landing-page-section-1">
        <div className="landing-page-section-1-top">
          <div className="landing-page-section-1-top-left">
            <img src="" alt="image" />
          </div>
          <div className="landing-page-section-1-top-right">
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Company Profile</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Talent Insights</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Industry Trends</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Dashboard</p>
            </div>
          </div>
        </div>
        <div className="landing-page-section-1-container">
          <p>Company's Talent</p>
          <p>Marketing Workspace</p>
          <p>7897 credits</p>
        </div>
      </section>
      <section className="landing-page-section-2">
        <div className="landing-page-section-2-left">
          <ul>
            <li>Employer Brand Index</li>
            <li onClick={() => navigate("/evp-journey")}>
              Employee Value Proposition
            </li>
            <li>Recruitment Campaign</li>
            <li>Social & Digital Content</li>
            <li onClick={() => navigate("/internal-communications")}>
              Internal Communications
            </li>
            <li>Leadership Brand</li>
            <li>Integration Comms</li>
          </ul>
        </div>
        <div className="landing-page-section-2-right">
          <div className="landing-page-section-2-right-container">
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact1}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact2}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact3}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact4}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact5}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact6}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact7}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact8}</p>
            </div>
            <div className="landing-page-section-2-right-container-info">
              <p>{homePageData?.fact9}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
