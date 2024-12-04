import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./AudienceWiseMessaging.css";
import "../Develop.css";

function AudienceWiseMessaging() {
  const { data } = useSelector((store) => store.inputField);

  const [audienceData, setAudienceData] = useState([]);

  useEffect(() => {
    if (data) {
      setAudienceData(data);
    }
  }, [data]);

  console.log(audienceData);

  const navigate = useNavigate();

  return (
    <div className="evp-develop">
      <h2 className="custom_h2">Audience Wise Messaging</h2>
      <p className="custom_para">
        Validate your Audience data before it goes to next step.
      </p>
      <section className="features-area features-area-inner-style">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Existing Employees</h3>
                <p className="two-line-text">
                  {audienceData.existing_employees}
                </p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Alumni</h3>
                <p className="two-line-text">{audienceData.alumni}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Targeted Talent</h3>
                <p className="two-line-text">{audienceData.targeted_talent}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-technical-support"></i>
                <h3>Leadership</h3>
                <p className="two-line-text">{audienceData.leadership}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-shield"></i>
                <h3>Recruiters</h3>
                <p className="two-line-text">{audienceData.recruiters}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Clients</h3>
                <p className="two-line-text">{audienceData.clients}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-machine-learning"></i>
                <h3>Offer Drops</h3>
                <p className="two-line-text">{audienceData.offer_drops}</p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>Exit Interview Feedback</h3>
                <p className="two-line-text">
                  {audienceData.exit_interview_feedback}
                </p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-health"></i>
                <h3>Employee Feedback Summary</h3>
                <p className="two-line-text">
                  {audienceData.employee_feedback_summary}
                </p>

                <div
                  onClick={() => navigate("/single-audience")}
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AudienceWiseMessaging;
