import React from "react";
import { Link } from "react-router-dom";

import {
  SingleAttribute1,
  SingleAttribute2,
} from "../../../../assets/images/images";

import "./SingleAttribute.css";

function SingleAttribute() {
  return (
    <div className="evp-singleAttribute">
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <img
                    style={{ width: "100%" }}
                    src={SingleAttribute1}
                    alt="Image"
                    height={500}
                  />
                </div>

                <h3>Service Of Warehousing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  veritatis ducimus rerum sunt dignissimos libero et eum modi!
                  Consequuntur rem incidunt et ducimus magnam sunt rerum hic
                  beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Laudantium asperiores eos obcaecati nostrum
                  sed, corporis placeat quasi pariatur id, est iure, minus
                  quibusdam! Facilis.
                </p>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old. Richard
                  McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem, you to be sure there isn't anything.
                </p>

                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <img
                          src={SingleAttribute2}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Engine bay cleaned and dressed
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Door card panels cleaned
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Plastic trim enhanced
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Paint surface clay barred
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Alloy wheel treatment inside and out
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar-area">
                <div className="service-list">
                  <h3 className="service-details-title">Facilities</h3>
                  <ul>
                    <li>
                      <Link href="/services/service-details/">
                        Technology
                        <i className="bx bx-check"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service-details/">
                        Tips
                        <i className="bx bx-check"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service-details/">
                        AI & IT
                        <i className="bx bx-check"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service-details/">
                        Solution
                        <i className="bx bx-check"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="service-list">
                  <h3 className="service-details-title">Contact Info</h3>
                  <ul>
                    <li>
                      +800 603 6035
                      <i className="bx bx-phone-call bx-rotate-270"></i>
                    </li>
                    <li>
                      hello@jumpx.com
                      <i className="bx bx-envelope"></i>
                    </li>
                    <li>
                      123, Western Road, Australia
                      <i className="bx bx-location-plus"></i>
                    </li>
                    <li>
                      9:00 AM – 8:00 PM
                      <i className="bx bx-time"></i>
                    </li>
                  </ul>
                </div>

                <div className="service-list">
                  <h3 className="service-details-title">Download Brochures</h3>
                  <ul>
                    <li>
                      <Link href="#">
                        PDF File (1)
                        <i className="bx bxs-cloud-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        PDF File (2)
                        <i className="bx bxs-cloud-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        PDF File (3)
                        <i className="bx bxs-cloud-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        PDF File (4)
                        <i className="bx bxs-cloud-download"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleAttribute;
