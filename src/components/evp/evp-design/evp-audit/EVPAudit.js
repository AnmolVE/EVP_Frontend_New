import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../Design.css";

function EVPAudit() {
  const { data } = useSelector((store) => store.inputField);
  console.log(data);

  const [evpAuditData, setEvpAuditData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpAuditData(data);
    }
  }, [data]);

  return (
    <div className="evp-audit">
      <h2 className="custom_h2">EVP Audit</h2>
      <p className="custom_para">
        Validate your Definition data before it goes to next step.
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
    </div>
  );
}

export default EVPAudit;
