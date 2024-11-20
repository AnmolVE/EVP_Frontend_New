import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./EVPAudit.css";

function EVPAudit() {
  const { data } = useSelector((store) => store.inputField);

  const [evpAuditData, setEvpAuditData] = useState(null);

  useEffect(() => {
    if (data) {
      setEvpAuditData(data);
    }
  }, [data]);

  return (
    <div className="evp-audit-main-container">
      <div className="evp-audit-table-container">
        <table className="evp-audit-table">
          <thead>
            <tr className="evp-audit-table-thead-tr">
              <th className="evp-audit-table-thead-th">Themes</th>
              <th className="evp-audit-table-thead-th">
                What makes this credible
              </th>
              <th className="evp-audit-table-thead-th">
                Where do we need to stretch
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(evpAuditData) &&
              evpAuditData.map((item) => (
                <tr key={item.id}>
                  <td className="evp-audit-table-tbody-td fixed-column">
                    {item.theme}
                  </td>
                  <td className="evp-audit-table-tbody-td">
                    {item.what_makes_this_credible}
                  </td>
                  <td className="evp-audit-table-tbody-td">
                    {item.where_do_we_need_to_stretch}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="evp-audit-buttons">
        <button>Save</button>
      </div>
    </div>
  );
}

export default EVPAudit;
