import React, { useState } from "react";

import "./ThinkTank.css";

function ThinkTank() {
  const [thinkTankInputFields, setThinkTankInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxThinkTankInterviewFields = 10;

  const handleAddThinkTankInputField = () => {
    setThinkTankInputFields([
      ...thinkTankInputFields,
      { id: thinkTankInputFields.length + 1, name: "", email: "" },
    ]);
  };

  const handleThinkTankInputChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...thinkTankInputFields];
    fields[index][name] = value;
    setThinkTankInputFields(fields);
  };

  return (
    <div className="thinkTank-container">
      <div className="thinkTank-middle">
        <p>Add People</p>
        <div className="thinkTank-middle-add-information-area">
          {thinkTankInputFields.map((field, index) => (
            <div className="thinkTank-middle-add-information">
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleThinkTankInputChange(index, e)}
                placeholder="Enter name"
              />
              <input
                type="email"
                name="email"
                value={field.email}
                onChange={(e) => handleThinkTankInputChange(index, e)}
                placeholder="Enter email"
              />
              {index === thinkTankInputFields.length - 1 &&
                thinkTankInputFields.length < maxThinkTankInterviewFields && (
                  <div className="thinkTank-middle-add-information-button">
                    <button onClick={handleAddThinkTankInputField}>+</button>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className="thinkTank-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default ThinkTank;
