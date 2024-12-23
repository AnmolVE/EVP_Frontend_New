import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "../Design.css";

function EvpPromise() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [evpPromiseData, setEvpPromiseData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpPromiseData(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-promise">
      <h2 className="custom_h2">EVP Promise</h2>
      <p className="custom_para">
        Outline mutual expectations between your organisation and employees.
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
      <ContentButtons />
    </div>
  );
}

export default EvpPromise;
