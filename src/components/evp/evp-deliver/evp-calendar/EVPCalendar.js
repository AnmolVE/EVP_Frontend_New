import React, { useState, useEffect } from "react";

import { BsJournalBookmark } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPCalendar.css";

function EVPCalendar() {
  return (
    <div className="evp-announcement">
      <h2 className="custom_h2">EVP Announcement</h2>
      <p className="custom_para">
        Create a tailored plan to launch your EVP to stakeholders.
      </p>
      <div className="evp-announcement-content">
        <div className="evp-announcement-buttons">
          <div className="evp-announcement-buttons-tab">
            <span>
              <BsJournalBookmark />
            </span>
            <button className="default-btn">Basic Plan</button>
          </div>
          <div className="evp-announcement-buttons-tab">
            <span>
              <MdWorkspacePremium />
            </span>
            <button className="default-btn">Premium Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EVPCalendar;
