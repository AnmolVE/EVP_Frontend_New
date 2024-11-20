import React, { useState, useEffect } from "react";

import "./EVPDefinition.css";

import { useSelector } from "react-redux";

function EVPDefinition() {
  const { data } = useSelector((store) => store.inputField);

  const [evpDefinitionData, setEvpDefinitionData] = useState(null);

  useEffect(() => {
    if (data) {
      setEvpDefinitionData(data);
    }
  }, [data]);

  return (
    <div className="evp-definition-main-container">
      <div className="evp-definition-table-container">
        <table className="evp-definition-table">
          <thead>
            <tr className="evp-definition-table-thead-tr">
              <th className="evp-definition-table-thead-th">Themes</th>
              <th className="evp-definition-table-thead-th">What it means</th>
              <th className="evp-definition-table-thead-th">
                What it does not mean
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(evpDefinitionData) &&
              evpDefinitionData.map((item) => (
                <tr key={item.id}>
                  <td className="evp-definition-table-tbody-td fixed-column">
                    {item.theme}
                  </td>
                  <td className="evp-definition-table-tbody-td">
                    {item.what_it_means}
                  </td>
                  <td className="evp-definition-table-tbody-td">
                    {item.what_it_does_not_mean}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="evp-definition-buttons">
        <button>Save</button>
      </div>
    </div>
  );
}

export default EVPDefinition;
