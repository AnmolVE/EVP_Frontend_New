import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContentButtons from "../../download-content/ContentButtons";
import Loading from "../../../utils/loading/Loading";

import "../Design.css";

function EvpDefinition() {
  const { data, loading } = useSelector((store) => store.inputField);

  const [evpDefinitionData, setEvpDefinitionData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setEvpDefinitionData(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="evp-definition">
      <h2 className="custom_h2">EVP Definition</h2>
      <p className="custom_para">
        Clarify what your EVP means and does not mean.
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
      <ContentButtons />
    </div>
  );
}

export default EvpDefinition;
