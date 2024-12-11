import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./CreativeDirection.css";

function CreativeDirection() {
  const { data } = useSelector((store) => store.inputField);
  const [creativeDirectionData, setCreativeDirectionData] = useState({
    creative_direction_data: "",
  });

  useEffect(() => {
    if (data) {
      setCreativeDirectionData(data);
    }
  }, [data]);

  console.log(creativeDirectionData.creative_direction_data);

  return (
    <div className="evp-creativeDirection">
      <h2 className="custom_h2">Creative Direction</h2>
      <p className="custom_para">
        Validate your Creative Direction data before it goes to next step
      </p>
      <div className="evp-creativeDirection-container">
        <section className="business-area">
          <div className="">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <p className="custom_para2">
                    {creativeDirectionData.creative_direction_data}
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-lg-6 col-sm-6 counter-nth"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <div className="single-counter">
                      <h2>
                        <span className="target">95%</span>
                      </h2>
                      <p>Project Completed</p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6 counter-nth"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <div className="single-counter">
                      <h2>
                        <span className="target">90%</span>
                      </h2>
                      <p>Design</p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6 counter-nth"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <div className="single-counter">
                      <h2>
                        <span className="target">85%</span>
                      </h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6 counter-nth"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <div className="single-counter">
                      <h2>
                        <span className="target">80</span>
                      </h2>
                      <p>Award Win</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreativeDirection;
