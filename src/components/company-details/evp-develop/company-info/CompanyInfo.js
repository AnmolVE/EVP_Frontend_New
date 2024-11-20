import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./CompanyInfo.css";

function CompanyInfo({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [companyInfoData, setCompanyInfoData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setCompanyInfoData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setCompanyInfoData({ ...companyInfoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseApiEndpoint = listItemEndpointMapping[currentListItem];
    if (!baseApiEndpoint) {
      alert("API endpoint not configured for this section");
      return;
    }

    try {
      const response = await fetch(`${baseApiEndpoint}/${companyName}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(companyInfoData),
      });
      const responseData = await response.json();
      // alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  console.log(currentListItem);

  return (
    <>
      <div className="company-info-main-container">
        <div className="company-info-top">
          <p className="company-info-para-heading">Company Dataset</p>
          <p className="company-info-para">
            Validate your Company data before it goes to next step.
          </p>
        </div>
        <div className="company-info-information">
          <div className="company-info-information-top">
            <div className="company-info-information-top-left">
              <div className="company-info-information-top-left-fields">
                <label>Headquarters</label>
                <textarea
                  onChange={handleInputChange}
                  name="headquarters"
                  value={companyInfoData?.headquarters}
                ></textarea>
              </div>
              <div className="company-info-information-top-left-fields">
                <label>Established Date</label>
                <textarea
                  onChange={handleInputChange}
                  name="established_date"
                  value={companyInfoData?.established_date}
                ></textarea>
              </div>
              <div className="company-info-information-top-left-fields">
                <label>Number of Employees</label>
                <textarea
                  onChange={handleInputChange}
                  name="number_of_employees"
                  value={companyInfoData?.number_of_employees}
                ></textarea>
              </div>
              <div className="company-info-information-top-left-fields">
                <label>Number of Geographies</label>
                <textarea
                  onChange={handleInputChange}
                  name="number_of_geographies"
                  value={companyInfoData?.number_of_geographies}
                ></textarea>
              </div>
              <div className="company-info-information-top-left-fields">
                <label>Industry</label>
                <textarea
                  onChange={handleInputChange}
                  name="industry"
                  value={companyInfoData?.industry}
                ></textarea>
              </div>
              <div className="company-info-information-top-left-fields">
                <label>Top 3 Competitors</label>
                <textarea
                  onChange={handleInputChange}
                  name="top_3_competitors"
                  value={companyInfoData?.top_3_competitors}
                ></textarea>
              </div>
            </div>
            <div className="company-info-information-top-middle">
              <div className="company-info-information-top-middle-fields">
                <label>About the Company</label>
                <textarea
                  onChange={handleInputChange}
                  name="about_the_company"
                  value={companyInfoData?.about_the_company}
                ></textarea>
              </div>
              <div className="company-info-information-top-middle-fields">
                <label>Company History</label>
                <textarea
                  onChange={handleInputChange}
                  name="company_history"
                  value={companyInfoData?.company_history}
                ></textarea>
              </div>
              <div className="company-info-information-top-middle-fields">
                <label>Company Financials</label>
                <textarea
                  onChange={handleInputChange}
                  name="company_financials"
                  value={companyInfoData?.company_financials}
                ></textarea>
              </div>
            </div>
            <div className="company-info-information-top-right">
              <div className="company-info-information-top-right-fields">
                <label>LinkedIn</label>
                <textarea
                  onChange={handleInputChange}
                  name="linked_info"
                  value={companyInfoData?.linked_info}
                ></textarea>
              </div>
              <div className="company-info-information-top-right-fields">
                <label>Glassdoor</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="glassdoor_score"
                  value={companyInfoData?.glassdoor_score}
                ></textarea>
              </div>
              <div className="company-info-information-top-right-fields">
                <label>Facebook</label>
                <textarea
                  onChange={handleInputChange}
                  name="facebook_info"
                  value={companyInfoData?.facebook_info}
                ></textarea>
              </div>
              <div className="company-info-information-top-right-fields">
                <label>Instagram</label>
                <textarea
                  onChange={handleInputChange}
                  name="instagram_info"
                  value={companyInfoData?.instagram_info}
                ></textarea>
              </div>
              <div className="company-info-information-top-right-fields">
                <label>Twitter (X)</label>
                <textarea
                  onChange={handleInputChange}
                  name="twitter_info"
                  value={companyInfoData?.twitter_info}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="company-info-information-bottom">
            <div className="company-info-information-bottom-left">
              <div className="company-info-information-bottom-left-fields">
                <label>Employee Value Proposition</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="employee_value_proposition"
                  value={companyInfoData?.employee_value_proposition}
                ></textarea>
              </div>
              <div className="company-info-information-bottom-left-fields">
                <label>Culture and Values</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="culture_and_values"
                  value={companyInfoData?.culture_and_values}
                ></textarea>
              </div>
              <div className="company-info-information-bottom-left-fields">
                <label>Customer Value Proposition</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="customer_value_proposition"
                  value={companyInfoData?.customer_value_proposition}
                ></textarea>
              </div>
              <div className="company-info-information-bottom-left-fields">
                <label>Brand Guidelines</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="brand_guidelines"
                  value={companyInfoData?.brand_guidelines}
                ></textarea>
              </div>
            </div>
            <div className="company-info-information-bottom-right">
              <div className="company-info-information-bottom-right-fields">
                <label>Purpose</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="purpose"
                  value={companyInfoData?.purpose}
                ></textarea>
              </div>
              <div className="company-info-information-bottom-right-fields">
                <label>Vision</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="vision"
                  value={companyInfoData?.vision}
                ></textarea>
              </div>
              <div className="company-info-information-bottom-right-fields">
                <label>Mission</label>
                <textarea
                  placeholder="User Input"
                  onChange={handleInputChange}
                  name="mission"
                  value={companyInfoData?.mission}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="company-info-buttons">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
