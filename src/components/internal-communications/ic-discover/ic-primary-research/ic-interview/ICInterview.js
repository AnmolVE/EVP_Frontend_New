import React, { useState } from "react";

import "./ICInterview.css";

function ICInterview() {
  const [icInterviewInputFields, setIcInterviewInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxIcInterviewInputFields = 5;

  const handleAddIcInterviewInputField = () => {
    setIcInterviewInputFields([
      ...icInterviewInputFields,
      { id: icInterviewInputFields.length + 1, name: "", email: "" },
    ]);
  };

  const handleIcInterviewInputChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...icInterviewInputFields];
    fields[index][name] = value;
    setIcInterviewInputFields(fields);
  };

  return (
    <div className="ic-interview-container">
      <div className="ic-interview-middle">
        <div className="ic-interview-middle-add">
          <p>Add People</p>
          <div className="ic-interview-middle-add-information-area">
            {icInterviewInputFields.map((field, index) => (
              <div className="ic-interview-middle-add-information">
                <input
                  type="text"
                  name="name"
                  value={field.name}
                  onChange={(e) => handleIcInterviewInputChange(index, e)}
                  placeholder="Enter name"
                />
                <input
                  type="email"
                  name="email"
                  value={field.email}
                  onChange={(e) => handleIcInterviewInputChange(index, e)}
                  placeholder="Enter email"
                />
                {index === icInterviewInputFields.length - 1 &&
                  icInterviewInputFields.length < maxIcInterviewInputFields && (
                    <div className="ic-interview-middle-add-information-button">
                      <button onClick={handleAddIcInterviewInputField}>
                        +
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="ic-interview-middle-calendly">
          <div className="ic-interview-middle-calendly-schedule">
            <p>Schedule Easily</p>
            <input type="text" placeholder="Calendly Link" />
          </div>
          <div className="ic-interview-middle-calendly-link">
            <a href="https://calendly.com/login" target="_blank">
              Create Calendly Account
            </a>
          </div>
        </div>
      </div>
      <div className="ic-interview-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default ICInterview;
