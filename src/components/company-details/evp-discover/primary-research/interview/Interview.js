import React, { useState } from "react";

import "./Interview.css";

function Interview() {
  const [interviewInputFields, setInterviewInputFields] = useState([
    { id: 1, name: "", email: "" },
  ]);
  const maxInterviewInputFields = 5;

  const handleAddInterviewInputField = () => {
    setInterviewInputFields([
      ...interviewInputFields,
      { id: interviewInputFields.length + 1, name: "", email: "" },
    ]);
  };

  const handleInterviewInputChange = (index, e) => {
    const { name, value } = e.target;
    const fields = [...interviewInputFields];
    fields[index][name] = value;
    setInterviewInputFields(fields);
  };

  return (
    <div className="interview-container">
      <div className="interview-middle">
        <div className="interview-middle-add">
          <p>Add People</p>
          <div className="interview-middle-add-information-area">
            {interviewInputFields.map((field, index) => (
              <div className="interview-middle-add-information">
                <input
                  type="text"
                  name="name"
                  value={field.name}
                  onChange={(e) => handleInterviewInputChange(index, e)}
                  placeholder="Enter name"
                />
                <input
                  type="email"
                  name="email"
                  value={field.email}
                  onChange={(e) => handleInterviewInputChange(index, e)}
                  placeholder="Enter email"
                />
                {index === interviewInputFields.length - 1 &&
                  interviewInputFields.length < maxInterviewInputFields && (
                    <div className="interview-middle-add-information-button">
                      <button onClick={handleAddInterviewInputField}>+</button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="interview-middle-calendly">
          <div className="interview-middle-calendly-schedule">
            <p>Schedule Easily</p>
            <input type="text" placeholder="Calendly Link" />
          </div>
          <div className="interview-middle-calendly-link">
            <a href="https://calendly.com/login" target="_blank">
              Create Calendly Account
            </a>
          </div>
        </div>
      </div>
      <div className="interview-footer">
        <button>Create</button>
      </div>
    </div>
  );
}

export default Interview;
