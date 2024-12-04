import React, { useState } from "react";

import "./ThinkTank.css";

function ThinkTank() {
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
        <button className="default-btn">Create</button>
      </div>
    </div>
  );
}

export default ThinkTank;
