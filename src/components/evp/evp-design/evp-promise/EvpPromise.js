import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../Design.css";

function EvpPromise() {
  const { data } = useSelector((store) => store.inputField);

  const [evpPromiseData, setEvpPromiseData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpPromiseData(data);
    }
  }, [data]);

  return (
    <div className="evp-promise">
      <h2 className="custom_h2">EVP Promise</h2>
      <p className="custom_para">
        Validate your Definition data before it goes to next step.
      </p>
      <div className="evp-design-container">
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What employees can expect</th>
              <th scope="col">What is expected of employees</th>
            </tr>
          </thead>
          <tbody>
            {evpPromiseData &&
              evpPromiseData.map((item) => (
                <tr key={item.id}>
                  <td>{item.theme}</td>
                  <td>{item.what_employees_can_expect}</td>
                  <td>{item.what_is_expected_of_employees}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvpPromise;
