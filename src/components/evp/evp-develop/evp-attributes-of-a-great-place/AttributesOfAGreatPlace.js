import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SingleAttribute from "./SingleAttribute";
import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

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

import "../Develop.css";
import "./AttributesOfAGreatPlace.css";

function AttributesOfAGreatPlace() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [attributesData, setAttributesData] = useState([]);
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setAttributesData(data);
    }
  }, [data]);

  const handleReadMore = (title, content, image) => {
    setModalData({ isOpen: true, title, content, image });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", content: "", image: "" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-develop">
      <h2 className="custom_h2">Attributes of an Attractive Workplace</h2>
      <p className="custom_para">
        Evaluate how your workplace excels on key attributes.
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

                  <p className="two-line-text custom_para2">
                    {attributesData.culture}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Culture",
                        attributesData.culture,
                        Attribute1
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.purpose_and_values}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Purpose and Values",
                        attributesData.purpose_and_values,
                        Attribute2
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.benefits_perks}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Benefits and Perks",
                        attributesData.benefits_perks,
                        Attribute3
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.career_development}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Career Development",
                        attributesData.career_development,
                        Attribute4
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.office_and_facilities}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Office and Facilities",
                        attributesData.office_and_facilities,
                        Attribute4
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.leadership_and_management}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Leadership and Management",
                        attributesData.leadership_and_management,
                        Attribute6
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.rewards_and_recognition}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Rewards and Recognition",
                        attributesData.rewards_and_recognition,
                        Attribute7
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.teamwork_and_collaboration}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Teamwork and Collaboration",
                        attributesData.teamwork_and_collaboration,
                        Attribute8
                      )
                    }
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

                  <p className="two-line-text custom_para2">
                    {attributesData.brand_and_reputation}
                  </p>

                  <div
                    className="read-more"
                    onClick={() =>
                      handleReadMore(
                        "Brand and Reputation",
                        attributesData.brand_and_reputation,
                        Attribute9
                      )
                    }
                  >
                    Read More <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentButtons />
      <SingleAttribute
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
        image={modalData.image}
      />
    </div>
  );
}

export default AttributesOfAGreatPlace;
