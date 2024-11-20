import React, { useState, useEffect } from "react";

import "./EVPPromise.css";

import { useSelector } from "react-redux";

function EVPPromise() {
  const { data } = useSelector((store) => store.inputField);

  const [evpPromiseData, setEvpPromiseData] = useState(null);

  useEffect(() => {
    if (data) {
      setEvpPromiseData(data);
    }
  }, [data]);

  return (
    <div className="evp-promise-main-container">
      <div className="evp-promise-table-container">
        <table className="evp-promise-table">
          <thead>
            <tr className="evp-promise-table-thead-tr">
              <th className="evp-promise-table-thead-th">Themes</th>
              <th className="evp-promise-table-thead-th">
                What employees can expect
              </th>
              <th className="evp-promise-table-thead-th">
                What is expected of employees
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(evpPromiseData) &&
              evpPromiseData.map((item) => (
                <tr key={item.id}>
                  <td className="evp-promise-table-tbody-td fixed-column">
                    {item.theme}
                  </td>
                  <td className="evp-promise-table-tbody-td">
                    {item.what_employees_can_expect}
                  </td>
                  <td className="evp-promise-table-tbody-td">
                    {item.what_is_expected_of_employees}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="evp-promise-buttons">
        <button>Save</button>
      </div>
    </div>
  );
}

export default EVPPromise;
