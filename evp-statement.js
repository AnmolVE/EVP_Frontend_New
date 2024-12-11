import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import {
  evpStatementImg1,
  evpStatementImg2,
  evpStatementImg3,
  evpStatementImg4,
} from "../../../../assets/images/images";

import "./EVPStatement.css";

function MessagingHierarchy() {
  const { data } = useSelector((store) => store.inputField);

  const [evpStatementData, setEvpStatementData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpStatementData(data);
    }
  }, [data]);

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <div className="evp-messagingHierarchy">
      <h2 className="custom_h2">Generate EVP Statement</h2>
      <p className="custom_para">
        The EVP will be created on the selected theme - all others will become
        secondary pillars
      </p>
      <div className="evp-messagingHierarchy-container">
        <div className="industries-area">
          <div className="">
            <div className="tab industries-list-tab">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <ul className="tabs">
                    {evpStatementData &&
                      evpStatementData.map((item, index) => (
                        <li
                          className=""
                          onClick={(e) => openTabSection(e, `tab${index + 1}`)}
                        >
                          <span>
                            <i className="flaticon-machine-learning"></i>
                            <h3>{item.theme_name}</h3>
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="col-lg-9">
                  <div className="tab_content">
                    {/* Tab item #1 */}
                    <div id="tab1" className="tabs_item">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-img left-img">
                            <img
                              src={evpStatementImg1}
                              alt="Image"
                              width={370}
                              height={390}
                            />
                            <button
                              style={{ marginTop: "4rem" }}
                              className="default-btn"
                            >
                              Generate EVP
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Theme 1</h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Est atque recusandae esse alias
                              reprehenderit.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Ea doloribus molestias illo ad
                              aperiam quo natus voluptatum, eos laboriosam vel
                              deserunt?
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Opportunities
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Creating
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Industries
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Security
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Highest
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Priority
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="text-center">
                              <Link href="/services" className="default-btn">
                                Discover More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #2 */}
                    <div id="tab2" className="tabs_item">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Theme 2</h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Est atque recusandae esse alias
                              reprehenderit.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Ea doloribus molestias illo ad
                              aperiam quo natus voluptatum, eos laboriosam vel
                              deserunt? Ab rerum eaque aperiam sequi dolore
                              minus itaque eos!
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Security
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Highest
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Priority
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Opportunities
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Creating
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Industries
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="text-center">
                              <Link href="/services" className="default-btn">
                                Discover More
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-img right-img">
                            <img
                              src={evpStatementImg2}
                              alt="Image"
                              width={550}
                              height={445}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #3 */}
                    <div id="tab3" className="tabs_item">
                      <div className="row  align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-img left-img">
                            <img
                              src={evpStatementImg3}
                              alt="Image"
                              width={620}
                              height={445}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Theme 3</h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Est atque recusandae esse alias
                              reprehenderit.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Ea doloribus molestias illo ad
                              aperiam quo natus voluptatum, eos laboriosam vel
                              deserunt? Ab rerum eaque aperiam sequi dolore
                              minus itaque eos!
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Creating
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Consectetur
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Adipisicing
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Artificial
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Industry
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Opportunities
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="text-center">
                              <Link href="/services" className="default-btn">
                                Discover More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #4 */}
                    <div id="tab4" className="tabs_item">
                      <div className="row  align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Theme 4</h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Est atque recusandae esse alias
                              reprehenderit.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Ea doloribus molestias illo ad
                              aperiam quo natus voluptatum, eos laboriosam vel
                              deserunt? Ab rerum eaque aperiam sequi dolore
                              minus itaque eos!
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Opportunities
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Creating
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Industries
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Security
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Highest
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Priority
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="text-center">
                              <Link href="/services" className="default-btn">
                                Discover More
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-img right-img">
                            <img
                              src={evpStatementImg4}
                              alt="Image"
                              width={526}
                              height={445}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingHierarchy;
