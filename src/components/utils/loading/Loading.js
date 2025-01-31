import React from "react";

import { LoadingImage } from "../../../assets/images/images";

import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img width={150} height={150} src={LoadingImage} alt="Loading" />
    </div>
  );
}

export default Loading;
