import React, { useState, useEffect } from "react";

import { BsJournalBookmark } from "react-icons/bs";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

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
        <div className="evp-handbook-buttons">
          <div className="evp-handbook-buttons-tab">
            <span>
              <BsJournalBookmark />
            </span>
            <button className="default-btn">Basic Handbook</button>
          </div>
          <div className="evp-handbook-buttons-tab">
            <span>
              <VscGitPullRequestGoToChanges />
            </span>
            <button className="default-btn">Premium Handbook</button>
          </div>
        </div>
      </div>
    </div>
    // <div className="evp-handbook-dummyData">
    //   <p className="custom_para">
    //     Hold tight! We're preparing the EVP handbook, insights, recommendations,
    //     and visual identity. Your deliverables will be ready shortly.
    //   </p>
    // </div>
  );
}

export default EVPHandbook;
