import React from "react";
import { FaRegEye } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

import "./ContentButtons.css";

function ContentButtons() {
  return (
    <div className="download-contentButtons">
      <button>
        <FaRegEye />
      </button>
      <button>
        <IoCloudDownloadOutline />
      </button>
    </div>
  );
}

export default ContentButtons;
