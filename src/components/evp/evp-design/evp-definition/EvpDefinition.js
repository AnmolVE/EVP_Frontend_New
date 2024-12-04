import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../Design.css";

function EvpDefinition() {
  const { data } = useSelector((store) => store.inputField);

  const [evpDefinitionData, setEvpDefinitionData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpDefinitionData(data);
    }
  }, [data]);

  return (
    <div className="evp-definition">
      <h2 className="custom_h2">EVP Definition</h2>
      <p className="custom_para">
        Validate your Definition data before it goes to next step.
      </p>
      <div className="evp-design-container">
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What it means</th>
              <th scope="col">What it does not mean</th>
            </tr>
          </thead>
          <tbody>
            {evpDefinitionData &&
              evpDefinitionData.map((item) => (
                <tr key={item.id}>
                  <td>{item.theme}</td>
                  <td>{item.what_it_means}</td>
                  <td>{item.what_it_does_not_mean}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvpDefinition;
