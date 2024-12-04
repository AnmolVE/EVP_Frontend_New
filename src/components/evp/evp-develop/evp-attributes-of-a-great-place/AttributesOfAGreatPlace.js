import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../Develop.css";
import "./AttributesOfAGreatPlace.css";

import {
  Attribute1,
  Attribute2,
  Attribute3,
  Attribute4,
  Attribute5,
  Attribute6,
  Attribute7,
  Attribute8,
  Attribute9,
} from "../../../../assets/images/images";

function AttributesOfAGreatPlace() {
  const { data } = useSelector((store) => store.inputField);

  const [attributesData, setAttributesData] = useState([]);

  useEffect(() => {
    if (data) {
      setAttributesData(data);
    }
  }, [data]);

  console.log(attributesData);

  const navigate = useNavigate();

  return (
    <div className="evp-develop">
      <h2 className="custom_h2">Attributes of a Great Place</h2>
      <p className="custom_para">
        This is how you fare on the key attributes of a great work environment
      </p>
      <section className="news-area">
        <div className="">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute1}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Culture</h3>
                  </div>

                  <p className="two-line-text">{attributesData.culture}</p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute2}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Purpose and Values</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.purpose_and_values}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute3}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Benefits and Perks</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.benefits_perks}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute4}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Career Development</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.career_development}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute5}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Office and Facilities</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.office_and_facilities}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute6}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Leadership and Management</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.leadership_and_management}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute7}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Rewards and Recognition</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.rewards_and_recognition}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute8}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Teamwork and Collaboration</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.teamwork_and_collaboration}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details">
                    <img
                      src={Attribute9}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <div href="/news/news-details">
                    <h3>Brand and Reputation</h3>
                  </div>

                  <p className="two-line-text">
                    {attributesData.brand_and_reputation}
                  </p>

                  <div
                    className="read-more"
                    onClick={() => navigate("/single-attribute")}
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AttributesOfAGreatPlace;
