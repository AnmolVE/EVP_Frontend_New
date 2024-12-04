import React, { useState } from "react";

import "./Interview.css";

function Interview() {
  const [inputFields, setInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxInputFields = 5;

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
        <input className="custom_input" placeholder="Calendly Link" />
      </div>
      <div className="evp-interview-button">
        <button className="default-btn">Create</button>
      </div>
    </div>
  );
}

export default Interview;
