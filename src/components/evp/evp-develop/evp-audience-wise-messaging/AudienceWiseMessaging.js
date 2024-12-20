import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SingleAudience from "./SingleAudience";
import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "./AudienceWiseMessaging.css";
import "../Develop.css";

function AudienceWiseMessaging() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [audienceData, setAudienceData] = useState([]);
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const handleReadMore = (title, content) => {
    setModalData({ isOpen: true, title: title, content: content });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", content: "" });
  };

  useEffect(() => {
    if (data) {
      setAudienceData(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

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
                <p className="two-line-text custom_para2">
                  {audienceData.existing_employees}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore(
                      "Existing Employees",
                      audienceData.existing_employees
                    )
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Alumni</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.alumni}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() => handleReadMore("Alumni", audienceData.alumni)}
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Targeted Talent</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.targeted_talent}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore(
                      "Targeted Talent",
                      audienceData.targeted_talent
                    )
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-technical-support"></i>
                <h3>Leadership</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.leadership}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore("Leadership", audienceData.leadership)
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-shield"></i>
                <h3>Recruiters</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.recruiters}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore("Recruiters", audienceData.recruiters)
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Clients</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.clients}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore("Clients", audienceData.clients)
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-machine-learning"></i>
                <h3>Offer Drops</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.offer_drops}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore("Offer Drops", audienceData.offer_drops)
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>Exit Interview Feedback</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.exit_interview_feedback}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore(
                      "Exit Interview Feedback",
                      audienceData.exit_interview_feedback
                    )
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-health"></i>
                <h3>Employee Feedback Summary</h3>
                <p className="two-line-text custom_para2">
                  {audienceData.employee_feedback_summary}
                </p>

                <div
                  className="read-more-icon"
                  onClick={() =>
                    handleReadMore(
                      "Employee Feedback Summary",
                      audienceData.employee_feedback_summary
                    )
                  }
                >
                  <span className="flaticon-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentButtons />
      <SingleAudience
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
      />
    </div>
  );
}

export default AudienceWiseMessaging;
