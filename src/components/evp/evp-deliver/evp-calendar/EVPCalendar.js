import React, { useState } from "react";

import { BsJournalBookmark } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPCalendar.css";
import Loading from "../../../utils/loading/Loading";
import CalendarPopup from "./CalendarPopup";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPCalendar({ companyName, accessToken }) {
  const [calendarData, setCalendarData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modalData, setModalData] = useState({
    isOpen: false,
    calendar_data: "",
  });

  const closeModal = () => {
    setModalData({ isOpen: false, calendar_data: "" });
  };

  const handleCalendarCreate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-calendar/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate calendar");
      }

      const responseData = await response.json();
      setCalendarData(responseData);
    } catch (error) {
      console.error("Error generating calendar:", error);
      alert("An error occurred while generating calendar.");
    } finally {
      setIsLoading(false);
    }
    setModalData({ isOpen: true });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="evp-calendar">
      <h2 className="custom_h2">EVP Calendar</h2>
      <p className="custom_para">
        Create a tailored plan to launch your EVP to stakeholders.
      </p>
      <div className="evp-calendar-content">
        <div className="evp-calendar-buttons">
          <div className="evp-calendar-buttons-tab">
            <span>
              <BsJournalBookmark />
            </span>
            <button className="default-btn" onClick={handleCalendarCreate}>
              Basic Plan
            </button>
          </div>
          <div className="evp-calendar-buttons-tab">
            <span>
              <MdWorkspacePremium />
            </span>
            <button className="default-btn">Premium Plan</button>
          </div>
        </div>
      </div>
      <CalendarPopup
        isOpen={modalData.isOpen}
        onClose={closeModal}
        calendar_data={calendarData.calendar_data}
      />
    </div>
  );
}

export default EVPCalendar;
