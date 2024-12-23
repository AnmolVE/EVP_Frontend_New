import React, { useState, useEffect } from "react";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPHandbook.css";

function EVPHandbook() {
  return (
    <div className="evp-handbook">
      <h2 className="custom_h2">EVP Handbook</h2>
      <p className="custom_para">
        Download a PDF summarising all EVP information to date.
      </p>
      <div className="evp-handbook-content">
        <figure className="evp-handbook-thumbnail">
          <img src={evp_handbook_thumbnail} alt="Image" />
        </figure>
        <div className="evp-handbook-buttons">
          <button className="default-btn">
            <a
              href="assets\docs\Interview.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </button>
          <button className="default-btn">
            <a href="assets/docs/Interview.pdf" download="Interview.pdf">
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EVPHandbook;
