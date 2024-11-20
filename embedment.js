import React, { useState, useEffect } from "react";

import "./EVPEmbedment.css";

const initialOptions = {
  preHiring: [
    "",
    "Careers Website",
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Tiktok",
    "Twitter X",
    "Job Board",
    "Job Description",
    "Job Ad",
    "Referral Email",
  ],
  hiring: [
    "",
    "Event Toolkit",
    "Interview Talking Points",
    "Application Form",
    "Offer Letter",
  ],
  onboarding: [
    "",
    "Welcome Email",
    "Employee Handbook",
    "Merchandise",
    "Orientation Deck",
  ],
  internalCommunications: ["", "Email Template", "PPT Template"],
  learningAndDevelopment: ["", "Living the EVP Module"],
  performanceManagement: ["", "Goal Setting", "Feedback Mechanism"],
  officeAndFacilities: [
    "",
    "Posters",
    "Wall Branding",
    "Breakout Areas",
    "Overall Layout",
  ],
  compensationAndBenefits: [
    "",
    "Increment Letter",
    "Promotion Letter",
    "Correction Letter",
    "Reward and Recognition Program",
  ],
  employeeEngagement: ["", "Employee Survey", "Engagement Activity Calendar"],
  offBoarding: [
    "",
    "Exit Interview",
    "Exit Process",
    "Farewell Communication Template",
  ],
};

function EVPEmbedment({ companyName, accessToken }) {
  const [preHiringSelects, setPreHiringSelects] = useState([
    initialOptions.preHiring,
  ]);
  const [hiringSelects, setHiringSelects] = useState([initialOptions.hiring]);
  const [onboardingSelects, setOnboardingSelects] = useState([
    initialOptions.onboarding,
  ]);
  const [internalCommunicationsSelects, setInternalCommunicationsSelects] =
    useState([initialOptions.internalCommunications]);
  const [learningAndDevelopmentSelects, setLearningAndDevelopmentSelects] =
    useState([initialOptions.learningAndDevelopment]);
  const [performanceManagementSelects, setPerformanceManagementSelects] =
    useState([initialOptions.performanceManagement]);
  const [officeAndFacilitiesSelects, setOfficeAndFacilitiesSelects] = useState([
    initialOptions.officeAndFacilities,
  ]);
  const [compensationAndBenefitsSelects, setCompensationAndBenefitsSelects] =
    useState([initialOptions.compensationAndBenefits]);
  const [employeeEngagementSelects, setEmployeeEngagementSelects] = useState([
    initialOptions.employeeEngagement,
  ]);
  const [offBoardingSelects, setOffBoardingSelects] = useState([
    initialOptions.offBoarding,
  ]);

  const handleAddSelect = (category, setCategory) => {
    setCategory((prevSelects) => [...prevSelects, initialOptions[category]]);
  };

  const handleTouchPointSubmit = async () => {
    const gatherSelections = (selects, category) => {
      return selects
        .map((selectOptions, index) => {
          const selectElement = document.querySelector(
            `select[data-category="${category}${index}"]`
          );
          return selectElement ? selectElement.value : "";
        })
        .filter((selection) => selection !== "");
    };

    const preHiringValues = gatherSelections(preHiringSelects, "preHiring");
    const hiringValues = gatherSelections(hiringSelects, "hiring");
    const onboardingValues = gatherSelections(onboardingSelects, "onboarding");
    const internalCommunicationsValues = gatherSelections(
      internalCommunicationsSelects,
      "internalCommunications"
    );
    const learningAndDevelopmentValues = gatherSelections(
      learningAndDevelopmentSelects,
      "learningAndDevelopment"
    );
    const performanceManagementValues = gatherSelections(
      performanceManagementSelects,
      "performanceManagement"
    );
    const officeAndFacilitiesValues = gatherSelections(
      officeAndFacilitiesSelects,
      "officeAndFacilities"
    );
    const compensationAndBenefitsValues = gatherSelections(
      compensationAndBenefitsSelects,
      "compensationAndBenefits"
    );
    const employeeEngagementValues = gatherSelections(
      employeeEngagementSelects,
      "employeeEngagement"
    );
    const offBoardingValues = gatherSelections(
      offBoardingSelects,
      "offBoarding"
    );

    const payload = {
      "Pre-hiring": preHiringValues,
      Hiring: hiringValues,
      Onboarding: onboardingValues,
      "Internal Communication": internalCommunicationsValues,
      "Learning and Development": learningAndDevelopmentValues,
      "Performance Management": performanceManagementValues,
      "Office and Facilities": officeAndFacilitiesValues,
      "Compensation and Benefits": compensationAndBenefitsValues,
      "Employee Engagement": employeeEngagementValues,
      "Off Boarding": offBoardingValues,
    };

    const extraInputs = document.querySelectorAll("input.extra-input");
    extraInputs.forEach((input, index) => {
      const category = input.getAttribute("data-category");
      if (input.value.trim() !== "") {
        payload[category] = payload[category] || [];
        payload[category].push(input.value.trim());
      }
    });

    // console.log(payload);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/evp-embedment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          touchpoints: payload,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(
          `Error: ${response.status} ${response.statusText}`,
          errorData
        );
      }

      const responseData = await response.json();
      alert("Data submitted successfully!!!");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="evp-embedment-container">
      <label>Add TouchPoints</label>
      <div className="evp-embedment">
        <div className="evp-embedment-selection">
          <label>Pre-hiring</label>
          <div className="evp-embedment-selection-inside">
            {preHiringSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`preHiring${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === preHiringSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect("preHiring", setPreHiringSelects)
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="preHiring"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Hiring</label>
          <div className="evp-embedment-selection-inside">
            {hiringSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`hiring${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === hiringSelects.length - 1 && (
                  <button
                    onClick={() => handleAddSelect("hiring", setHiringSelects)}
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="hiring"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Onboarding</label>
          <div className="evp-embedment-selection-inside">
            {onboardingSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`onboarding${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === onboardingSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect("onboarding", setOnboardingSelects)
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="onboarding"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Internal Communications</label>
          <div className="evp-embedment-selection-inside">
            {internalCommunicationsSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`internalCommunications${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === internalCommunicationsSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "internalCommunications",
                        setInternalCommunicationsSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="internalCommunications"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Learning and Development</label>
          <div className="evp-embedment-selection-inside">
            {learningAndDevelopmentSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`learningAndDevelopment${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === learningAndDevelopmentSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "learningAndDevelopment",
                        setLearningAndDevelopmentSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="learningAndDevelopment"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Performance Management</label>
          <div className="evp-embedment-selection-inside">
            {performanceManagementSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`performanceManagement${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === performanceManagementSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "performanceManagement",
                        setPerformanceManagementSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="performanceManagement"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Office and Facilities</label>
          <div className="evp-embedment-selection-inside">
            {officeAndFacilitiesSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`officeAndFacilities${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === officeAndFacilitiesSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "officeAndFacilities",
                        setOfficeAndFacilitiesSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="officeAndFacilities"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Compensation and Benefits</label>
          <div className="evp-embedment-selection-inside">
            {compensationAndBenefitsSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`compensationAndBenefits${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === compensationAndBenefitsSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "compensationAndBenefits",
                        setCompensationAndBenefitsSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="compensationAndBenefits"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Employee Engagement</label>
          <div className="evp-embedment-selection-inside">
            {employeeEngagementSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`employeeEngagement${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === employeeEngagementSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect(
                        "employeeEngagement",
                        setEmployeeEngagementSelects
                      )
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="employeeEngagement"
              placeholder="more"
            />
          </div>
        </div>
        <div className="evp-embedment-selection">
          <label>Off Boarding</label>
          <div className="evp-embedment-selection-inside">
            {offBoardingSelects.map((options, index) => (
              <div
                key={index}
                className="evp-embedment-selection-inside-select"
              >
                <select data-category={`offBoarding${index}`}>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
                {index === offBoardingSelects.length - 1 && (
                  <button
                    onClick={() =>
                      handleAddSelect("offBoarding", setOffBoardingSelects)
                    }
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <input
              className="extra-input"
              data-category="offBoarding"
              placeholder="more"
            />
          </div>
        </div>
      </div>
      <div className="evp-embedment-buttons">
        <button onClick={handleTouchPointSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EVPEmbedment;
