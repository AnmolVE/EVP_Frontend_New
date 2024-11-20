import React from "react";
import { Link } from "react-router-dom";

import "./AudienceWiseMessaging.css";
import "../Develop.css";

function AudienceWiseMessaging() {
  return (
    <div className="evp-develop">
      <h2 className="evp-develop-heading">Audience Wise Messaging</h2>
      <p className="evp-develop-para">
        Validate your Audience data before it goes to next step.
      </p>
      <section className="features-area features-area-inner-style">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Existing Employees</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Alumni</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Targeted Talent</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-technical-support"></i>
                <h3>Leadership</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-shield"></i>
                <h3>Recruiters</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Clients</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-machine-learning"></i>
                <h3>Offer Drops</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>Exit Interview Feedback</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-health"></i>
                <h3>Employee Feedback Summary</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link
                  href="/services/service-details/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AudienceWiseMessaging;
