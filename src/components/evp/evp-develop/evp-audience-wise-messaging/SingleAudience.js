import React from "react";

import "./SingleAudience.css";

function SingleAudience({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="singleAudience-overlay">
      <div className="singleAudience-content">
        <button className="singleAudience-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default SingleAudience;
