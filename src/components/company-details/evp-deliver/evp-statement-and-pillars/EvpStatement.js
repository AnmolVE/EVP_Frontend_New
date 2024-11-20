import React from "react";
import { useSelector } from "react-redux";

import "./EvpStatement.css";

function EvpStatement() {
  const { data } = useSelector((store) => store.inputField);

  const evpStatement = data && data.length > 0 ? data[0] : null;
  const {
    evp_statement_thumbnail,
    evp_statement_document,
    evp_statement_text,
  } = evpStatement || {};

  const BASE_URL = "http://127.0.0.1:8000";

  const fullDocumentUrl = evp_statement_document
    ? `${BASE_URL}${evp_statement_document}`
    : "";
  const fullThumbnailUrl = evp_statement_thumbnail
    ? `${BASE_URL}${evp_statement_thumbnail}`
    : "";

  const handleViewDocument = () => {
    if (fullDocumentUrl) {
      window.open(fullDocumentUrl, "_blank");
    }
  };

  return (
    <div className="evp-statement-main-container">
      <div className="evp-statement-main-container-text">
        <p>{evp_statement_text || "Not Found"}</p>
      </div>
      <div className="evp-statement-main-container-document">
        {evp_statement_thumbnail ? (
          <img src={fullThumbnailUrl} alt="EVP Statement Thumbnail" />
        ) : (
          <img src="" alt="Default Image" />
        )}
      </div>
      <div className="evp-statement-main-container-document-buttons">
        <button onClick={handleViewDocument}>View & Download</button>
      </div>
    </div>
  );
}

export default EvpStatement;
