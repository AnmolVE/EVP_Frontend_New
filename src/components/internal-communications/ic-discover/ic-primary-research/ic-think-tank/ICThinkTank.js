import React, { useState } from "react";

import "./ICThinkTank.css";

function ICThinkTank() {
  const [icThinkTankInputFields, setIcThinkTankInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxThinkTankInterviewFields = 10;

  const handleAddIcThinkTankInputField = () => {
    setIcThinkTankInputFields([
      ...icThinkTankInputFields,
      { id: icThinkTankInputFields.length + 1, name: "", email: "" },
    ]);
  };

  const handleIcThinkTankInputChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...icThinkTankInputFields];
    fields[index][name] = value;
    setIcThinkTankInputFields(fields);
  };

  return (
    <div className="ic-thinkTank-container">
      <div className="ic-thinkTank-middle">
        <p>Add People</p>
        <div className="ic-thinkTank-middle-add-information-area">
          {icThinkTankInputFields.map((field, index) => (
            <div className="ic-thinkTank-middle-add-information">
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleIcThinkTankInputChange(index, e)}
                placeholder="Enter name"
              />
              <input
                type="email"
                name="email"
                value={field.email}
                onChange={(e) => handleIcThinkTankInputChange(index, e)}
                placeholder="Enter email"
              />
              {index === icThinkTankInputFields.length - 1 &&
                icThinkTankInputFields.length < maxThinkTankInterviewFields && (
                  <div className="ic-thinkTank-middle-add-information-button">
                    <button onClick={handleAddIcThinkTankInputField}>+</button>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className="ic-thinkTank-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default ICThinkTank;
