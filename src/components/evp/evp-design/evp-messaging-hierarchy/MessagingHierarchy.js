import React from "react";

import { Link } from "react-router-dom";

import {
  MessagingHierarchyImg1,
  MessagingHierarchyImg2,
  MessagingHierarchyImg3,
  MessagingHierarchyImg4,
} from "../../../../assets/images/images";

import "./MessagingHierarchy.css";

function MessagingHierarchy() {
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
      <h2 className="evp-design-heading">Messaging Hierarchy</h2>
      <p className="evp-design-para">
        Validate your Messaging Hierarchy data before it goes to next step
      </p>
      <div className="evp-messagingHierarchy-container">
        <div className="industries-area">
          <div className="">
            <div className="tab industries-list-tab">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  {/* Tabs navs */}
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => openTabSection(e, "tab1")}
                    >
                      <span>
                        <i className="flaticon-machine-learning"></i>
                        <h3>Theme 1</h3>
                      </span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab2")}>
                      <span>
                        <i className="flaticon-artificial-intelligence"></i>
                        <h3>Theme 2</h3>
                      </span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab3")}>
                      <span>
                        <i className="flaticon-health"></i>
                        <h3>Theme 3</h3>
                      </span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab4")}>
                      <span>
                        <i className="flaticon-automation"></i>
                        <h3>Theme 4</h3>
                      </span>
                    </li>
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
                              src={MessagingHierarchyImg1}
                              alt="Image"
                              width={370}
                              height={390}
                            />
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
                              src={MessagingHierarchyImg2}
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
                              src={MessagingHierarchyImg3}
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
                              src={MessagingHierarchyImg4}
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
