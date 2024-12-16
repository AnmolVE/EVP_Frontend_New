import React from "react";

import "./SingleAttribute.css";

function SingleAttribute({ isOpen, onClose, title, content, image }) {
  if (!isOpen) return null;

  return (
    <div className="singleAttribute-overlay">
      <div className="singleAttribute-content">
        <button className="singleAttribute-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <img src={image} alt={title} className="singleAttribute-image" />
        <p className="custom_para2 para">{content}</p>
      </div>
    </div>
  );
}

export default SingleAttribute;
