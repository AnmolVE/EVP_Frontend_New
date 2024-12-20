import React, { useState } from "react";

import "./ThinkTank.css";

function ThinkTank({ companyName }) {
  const [inputFields, setInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxInputFields = 10;

  const handleAddInputFields = () => {
    setInputFields([
      ...inputFields,
      { id: inputFields.length + 1, name: "", email: "" },
    ]);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...inputFields];
    fields[index][name] = value;
    setInputFields(fields);
  };

  const handleOpenEmailBox = () => {
    const emailAddresses = inputFields
      .map((field) => field.name && field.email)
      .filter((email) => email);
    if (inputFields.length >= 1) {
      console.log(inputFields.length);
      const subject = "Interview Invitation";
      const body = `Dear Candidate,\n\nYou have been selected to participate in an Employee Value Proposition (EVP) development exercise.\n\nBest regards,\n${companyName}`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        emailAddresses.join(",")
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    } else {
      alert("Please enter at least one email address");
    }
  };

  return (
    <div className="evp-thinkTank">
      <div className="evp-thinkTank-addPeople">
        <p>Add People</p>
        <div className="evp-thinkTank-addPeople-container">
          {inputFields.map((field, index) => (
            <div key={index} className="evp-thinkTank-addPeople-input">
              <input
                className="custom_input"
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter name"
              />
              <input
                className="custom_input"
                type="email"
                name="email"
                value={field.email}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter email"
              />
              {index === inputFields.length - 1 &&
                inputFields.length < maxInputFields && (
                  <button onClick={handleAddInputFields}>+</button>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className="evp-thinkTank-button">
        <button className="default-btn" onClick={() => handleOpenEmailBox()}>
          Create
        </button>
      </div>
    </div>
  );
}

export default ThinkTank;
