import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { BsJournalBookmark } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPCalendar.css";
import Loading from "../../../utils/loading/Loading";
import CalendarPopup from "./CalendarPopup";

function EVPCalendar() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [calendarData, setCalendarData] = useState([]);

  const [modalData, setModalData] = useState({
    isOpen: false,
    calendar_data: "",
  });

  const closeModal = () => {
    setModalData({ isOpen: false, calendar_data: "" });
  };

  useEffect(() => {
    if (data) {
      setCalendarData(data);
      setModalData({ isOpen: true });
    }
  }, [data]);

  if (loading) {
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
            <button className="default-btn">Basic Plan</button>
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
