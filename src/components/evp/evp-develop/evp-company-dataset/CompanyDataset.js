import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "../Develop.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function CompanyDataset({ companyName, accessToken }) {
  const { data, loading } = useSelector((store) => store.inputField);
  console.log(data);
  const [companyDataset, setCompanyDataset] = useState({});

  const getCompanyDataset = async () => {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/companies/${companyName}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setCompanyDataset(responseData);
      } else {
        console.error("Error fetching company data!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getCompanyDataset();
  }, []);

  const handleInputChange = (e) => {
    setCompanyDataset({ ...companyDataset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/companies/${companyName}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(companyDataset),
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-develop">
      <h2 className="custom_h2">Company Dataset</h2>
      <p className="custom_para">
        Review and validate your company data for accuracy.
      </p>
      <div className="evp-develop-container">
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Headquarters</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="headquarters"
              value={companyDataset?.headquarters}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Established Date</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="established_date"
              value={companyDataset?.established_date}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Number of Employees</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="number_of_employees"
              value={companyDataset?.number_of_employees}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Number of Geographies</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="number_of_geographies"
              value={companyDataset?.number_of_geographies}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Industry</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="industry"
              value={companyDataset?.industry}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Top 3 Competitors</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="top_3_competitors"
              value={companyDataset?.top_3_competitors}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">About the Company</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="about_the_company"
              value={companyDataset?.about_the_company}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Company History</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="company_history"
              value={companyDataset?.company_history}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Company Financials</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="company_financials"
              value={companyDataset?.company_financials}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">LinkedIn</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="linked_info"
              value={companyDataset?.linked_info}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Glassdoor</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="glassdoor_score"
              value={companyDataset?.glassdoor_score}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Facebook</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="facebook_info"
              value={companyDataset?.facebook_info}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Instagram</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="instagram_info"
              value={companyDataset?.instagram_info}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Twitter (X)</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="twitter_info"
              value={companyDataset?.twitter_info}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">
              Employee Value Proposition
            </p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="employee_value_proposition"
              value={companyDataset?.employee_value_proposition}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">
              Customer Value Proposition
            </p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="customer_value_proposition"
              value={companyDataset?.customer_value_proposition}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Brand Guidelines</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="brand_guidelines"
              value={companyDataset?.brand_guidelines}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Purpose</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="purpose"
              value={companyDataset?.purpose}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Vision</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="vision"
              value={companyDataset?.vision}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button className="default-btn" onClick={() => handleSubmit()}>
              Save
            </button>
          </div>
        </div>
        <div className="evp-develop-validationContainer">
          <div className="evp-develop-validation">
            <p className="evp-develop-validation-para">Mission</p>
            <div>
              <box-icon type="solid" name="edit-alt"></box-icon>
              <box-icon type="solid" name="edit-alt"></box-icon>
            </div>
          </div>
          <div className="evp-develop-validation-input">
            <textarea
              className="custom_input"
              onChange={handleInputChange}
              name="mission"
              value={companyDataset?.mission}
              placeholder="Enter data"
            />
          </div>
          <div className="evp-develop-validation-buttons">
            <button onClick={() => handleSubmit()} className="default-btn">
              Save
            </button>
          </div>
        </div>
      </div>
      <ContentButtons />
    </div>
  );
}

export default CompanyDataset;
