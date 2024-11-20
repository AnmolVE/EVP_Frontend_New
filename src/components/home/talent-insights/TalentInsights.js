import React, { useState } from "react";

import "./TalentInsights.css";

import { NavbarUserImage } from "../../../assets/images/images";

import {
  talentInsightsFields,
  talentInsightsGeographies,
} from "./talent_insights_constant";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function TalentInsights() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedSubSkill, setSelectedSubSkill] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedGeography, setSelectedGeography] = useState("");
  const [availableSubSkills, setAvailableSubSkills] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);

  const [candidatePersona, setCandidatePersona] = useState("");

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);
    setSelectedSubSkill("");
    setSelectedRole("");

    // Set sub-skills based on the selected skill
    if (skill) {
      const subSkills = Object.keys(
        talentInsightsFields[skill]?.subSkills || {}
      );
      setAvailableSubSkills(subSkills);
      setAvailableRoles([]);
    } else {
      setAvailableSubSkills([]);
      setAvailableRoles([]);
    }
  };

  const handleSubSkillChange = (e) => {
    const subSkill = e.target.value;
    setSelectedSubSkill(subSkill);
    setSelectedRole("");

    // Set roles based on the selected sub-skill
    if (selectedSkill && subSkill) {
      const roles =
        talentInsightsFields[selectedSkill].subSkills[subSkill] || [];
      setAvailableRoles(roles);
    } else {
      setAvailableRoles([]);
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleGenerateClick = async () => {
    const requestBody = {
      talent_insights: {
        skill: selectedSkill,
        sub_skill: selectedSubSkill,
        role: selectedRole,
        geography: selectedGeography,
      },
    };

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/talent-insights-home/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setCandidatePersona(responseData);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  console.log(candidatePersona);

  return (
    <div className="talent-insights-home-main-container">
      <div className="talent-insights-home-container">
        <div className="talent-insights-home-heading">
          <h1>Talent Insights</h1>
        </div>
        <div className="talent-insights-home-below">
          <div className="talent-insights-home-below-left">
            <div className="talent-insights-home-below-left-top">
              <div className="talent-insights-home-below-left-data">
                <div className="talent-insights-home-below-left-data-fields">
                  <label>Skill</label>
                  <select value={selectedSkill} onChange={handleSkillChange}>
                    <option value="">Select Skill</option>
                    {Object.keys(talentInsightsFields).map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-home-below-left-data">
                <div className="talent-insights-home-below-left-data-fields">
                  <label>Sub Skill</label>
                  <select
                    value={selectedSubSkill}
                    onChange={handleSubSkillChange}
                    disabled={!availableSubSkills.length}
                  >
                    <option value="">Select Sub Skill</option>
                    {availableSubSkills.map((subSkill) => (
                      <option key={subSkill} value={subSkill}>
                        {subSkill}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-home-below-left-data">
                <div className="talent-insights-home-below-left-data-fields">
                  <label>Role</label>
                  <select
                    value={selectedRole}
                    onChange={handleRoleChange}
                    disabled={!availableRoles.length}
                  >
                    <option value="">Select Role</option>
                    {availableRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-home-below-left-data">
                <div className="talent-insights-home-below-left-data-fields">
                  <label>Geography</label>
                  <select
                    value={selectedGeography}
                    onChange={(e) => setSelectedGeography(e.target.value)}
                  >
                    <option value="">Select Geography</option>
                    {talentInsightsGeographies.map((geo) => (
                      <option key={geo} value={geo}>
                        {geo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="talent-insights-home-button">
              <button onClick={handleGenerateClick}>Generate</button>
            </div>
          </div>
          <div className="talent-insights-home-below-right">
            <div className="talent-insights-home-below-right-first">
              <div className="talent-insights-home-below-right-first-top">
                <figure className="talent-insights-home-below-right-first-top-image">
                  <img src={NavbarUserImage} alt="user" />
                </figure>
                <div className="talent-insights-home-below-right-first-top-info">
                  <p>
                    <span>Name: </span>
                    {candidatePersona?.name}
                  </p>
                  <p>
                    <span>Age: </span>
                    {candidatePersona?.age}
                  </p>
                  <p>
                    <span>Location: </span>
                    {candidatePersona?.location}
                  </p>
                  <p>
                    <span>Highest Qualification: </span>
                    {candidatePersona?.highest_qualification}
                  </p>
                  <p>
                    <span>Work Experience: </span>
                    {candidatePersona?.work_experience}
                  </p>
                  <p>
                    <span>Previous Companies: </span>
                    {candidatePersona?.previous_companies}
                  </p>
                  <p>
                    <span>Salary INR: </span>
                    {candidatePersona?.salary_inr}
                  </p>
                </div>
              </div>
              <div className="talent-insights-home-below-right-first-bottom">
                <div className="talent-insights-home-below-right-first-bottom-content">
                  <h2>Personality</h2>
                  <p>{candidatePersona?.personality}</p>
                </div>
              </div>
            </div>
            <div className="talent-insights-home-below-right-second">
              <div className="talent-insights-home-below-right-second-top">
                <div className="talent-insights-home-below-right-second-top-content">
                  <h2>Goals</h2>
                  <p>{candidatePersona?.goals}</p>
                </div>
              </div>
              <div className="talent-insights-home-below-right-second-middle">
                <div className="talent-insights-home-below-right-second-middle-content">
                  <h2>Frustration</h2>
                  <p>{candidatePersona?.frustration}</p>
                </div>
              </div>
              <div className="talent-insights-home-below-right-second-bottom">
                <div className="talent-insights-home-below-right-second-bottom-content">
                  <h2>Bio</h2>
                  <p>{candidatePersona?.bio}</p>
                </div>
              </div>
            </div>
            <div className="talent-insights-home-below-right-third">
              <div className="talent-insights-home-below-right-third-top">
                <div className="talent-insights-home-below-right-third-top-content">
                  <h2>Motivation</h2>
                  <p>{candidatePersona?.motivation}</p>
                </div>
              </div>
              <div className="talent-insights-home-below-right-third-middle">
                <div className="talent-insights-home-below-right-third-middle-content">
                  <h2>Topics of Interest</h2>
                  <p>{candidatePersona?.topics_of_interest}</p>
                </div>
              </div>
              <div className="talent-insights-home-below-right-third-bottom">
                <div className="talent-insights-home-below-right-third-bottom-content">
                  <h2>Preferred Channels</h2>
                  <p>{candidatePersona?.preferred_channels}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentInsights;
