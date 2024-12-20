import React, { useState } from "react";

import "./Interview.css";

function Interview({ companyName }) {
  const [inputFields, setInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxInputFields = 5;

  const [calendlyLink, setCalendlyLink] = useState("");

  const handleAddInputField = () => {
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

  const handleOpenEmailBox = async () => {
    const validFields = inputFields.filter(
      (field) => field.name && field.email
    );

    if (validFields.length > 0) {
      for (const field of validFields) {
        const subject = "Interview Invitation";
        const body = `Dear ${field.name},\n\nYou have been selected to participate in an Employee Value Proposition (EVP) development exercise.\nPlease click on the link below to select a suitable slot for the 1-to-1 interview:\n\n${calendlyLink}\n\nBest regards,\n${companyName}`;

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          field.email
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, "_blank");
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    } else {
      alert("Please enter at least one valid name and email address");
    }
  };

  return (
    <div className="evp-interview">
      <div className="evp-interview-addPeople">
        <p>Add People</p>
        <div className="evp-interview-addPeople-container">
          {inputFields.map((field, index) => (
            <div key={index} className="evp-interview-addPeople-input">
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
                  <button onClick={handleAddInputField}>+</button>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className="evp-interview-scheduleCalendly">
        <p>Schedule Calendly</p>
        <input
          className="custom_input"
          placeholder="Calendly Link"
          onChange={(e) => setCalendlyLink(e.target.value)}
        />
      </div>
      <div className="evp-interview-button">
        <button className="default-btn" onClick={() => handleOpenEmailBox()}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Interview;
