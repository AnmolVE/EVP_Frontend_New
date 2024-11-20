import React, { useEffect, useState } from "react";

import "./ICICSI.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function ICICSI({ companyName, accessToken }) {
  const [icsiData, setIcsiData] = useState({});

  const getICSIData = async () => {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/icicsi/${companyName}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setIcsiData(responseData);
      } else {
        console.error("Error fetching data : ", response.statusText);
      }
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  useEffect(() => {
    getICSIData();
  }, []);

  const handleInputChange = (e) => {
    setIcsiData({ ...icsiData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/icicsi/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          ...icsiData,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setIcsiData(responseData);
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  return (
    <div className="ic-designPrinciples-main-container">
      <div className="ic-designPrinciples-header">
        <p className="ic-designPrinciples-header-paraHeading">
          Internal Communications Strategy Inputs
        </p>
      </div>
      <div className="ic-designPrinciples-content">
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the primary goals of your communications strategy?
          </label>
          <textarea
            name="question_1"
            value={icsiData?.question_1 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Who is your key target audience, both internally and externally?
          </label>
          <textarea
            name="question_2"
            value={icsiData?.question_2 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the key messages you want to convey to each audience?
          </label>
          <textarea
            name="question_3"
            value={icsiData?.question_3 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What channels or platforms are most effective for reaching your
            audience?
          </label>
          <textarea
            name="question_4"
            value={icsiData?.question_4 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            How do you currently measure the success of your communications
            efforts?
          </label>
          <textarea
            name="question_5"
            value={icsiData?.question_5 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the biggest challenges or pain points in your current
            communications?
          </label>
          <textarea
            name="question_6"
            value={icsiData?.question_6 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Are there any upcoming events, changes, or initiatives that need
            focused communication efforts?
          </label>
          <textarea
            name="question_7"
            value={icsiData?.question_7 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            How do you handle feedback and engagement from employees or external
            stakeholders?
          </label>
          <textarea
            name="question_8"
            value={icsiData?.question_8 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What tone and style of communication align with your company culture
            and brand?
          </label>
          <textarea
            name="question_9"
            value={icsiData?.question_9 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Who will be responsible for executing and managing the
            communications plan?
          </label>
          <textarea
            name="question_10"
            value={icsiData?.question_10 || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="ic-designPrinciples-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ICICSI;
