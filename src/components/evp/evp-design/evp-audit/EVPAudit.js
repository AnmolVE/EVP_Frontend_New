import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "../Design.css";

function EVPAudit() {
  const { data, loading } = useSelector((store) => store.inputField);
  console.log(data);

  const [evpAuditData, setEvpAuditData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpAuditData(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-audit">
      <h2 className="custom_h2">EVP Audit</h2>
      <p className="custom_para">
        Assess where your EVP is strong and where it can grow.
      </p>
      <div className="evp-design-container">
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What makes this credible</th>
              <th scope="col">Where do we need to stretch</th>
            </tr>
          </thead>
          <tbody>
            {evpAuditData &&
              evpAuditData.map((item) => (
                <tr key={item.id}>
                  <td>{item.theme}</td>
                  <td>{item.what_makes_this_credible}</td>
                  <td>{item.where_do_we_need_to_stretch}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ContentButtons />
    </div>
  );
}

export default EVPAudit;
