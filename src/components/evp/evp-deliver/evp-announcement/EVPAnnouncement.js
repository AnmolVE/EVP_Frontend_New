// import React, { useState, useEffect } from "react";

// import "./EVPAnnouncement.css";

// function EVPAnnouncement() {
//   const [days, setDays] = useState("");
//   const [hours, setHours] = useState("");
//   const [minutes, setMinutes] = useState("");
//   const [seconds, setSeconds] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       commingSoonTime();
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const commingSoonTime = () => {
//     let endTime = new Date("August 23, 2024 17:00:00 PDT");
//     let endTimeParse = Date.parse(endTime) / 1000;
//     let now = new Date();
//     let nowParse = Date.parse(now) / 1000;
//     let timeLeft = endTimeParse - nowParse;
//     let days = Math.floor(timeLeft / 86400);
//     let hours = Math.floor((timeLeft - days * 86400) / 3600);
//     let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
//     let seconds = Math.floor(
//       timeLeft - days * 86400 - hours * 3600 - minutes * 60
//     );
//     if (hours < "10") {
//       hours = "0" + hours;
//     }
//     if (minutes < "10") {
//       minutes = "0" + minutes;
//     }
//     if (seconds < "10") {
//       seconds = "0" + seconds;
//     }
//     setDays(days);
//     setHours(hours);
//     setMinutes(minutes);
//     setSeconds(seconds);
//   };

//   return (
//     <div className="evp-announcement">
//       <div className="coming-soon-area">
//         <div className="d-table">
//           <div className="d-table-cell">
//             <div className="container">
//               <div className="coming-soon-content">
//                 <h1>Coming Soon</h1>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Quis ipsum suspendisse ultrices.
//                 </p>

//                 <div id="timer">
//                   <div id="days">
//                     {days} <span>Days</span>
//                   </div>
//                   <div id="hours">
//                     {hours} <span>Hours</span>
//                   </div>
//                   <div id="minutes">
//                     {minutes} <span>Minutes</span>
//                   </div>
//                   <div id="seconds">
//                     {seconds} <span>Seconds</span>
//                   </div>
//                 </div>

//                 <form className="newsletter-form">
//                   <input
//                     type="email"
//                     className="input-newsletter"
//                     placeholder="Enter email address"
//                     name="email"
//                     required
//                   />

//                   <button type="submit" className="default-btn">
//                     Notify Me
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EVPAnnouncement;

import React, { useState, useEffect } from "react";

import { BsJournalBookmark } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

import { evp_handbook_thumbnail } from "../../../../assets/images/images";

import "./EVPAnnouncement.css";

function EVPAnnouncement() {
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

export default EVPAnnouncement;
