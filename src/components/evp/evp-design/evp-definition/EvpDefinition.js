import React from "react";

import "../Design.css";

const evpDefinitionData = [
  {
    id: "1",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "2",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "3",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "4",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "5",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "6",
    theme: "Theme 1",
    what_it_means:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_it_does_not_mean:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

function EvpDefinition() {
  return (
    <div className="evp-definition">
      <h2 className="evp-design-heading">EVP Definition</h2>
      <p className="evp-design-para">
        Validate your Definition data before it goes to next step.
      </p>
      <div className="evp-design-container">
        <table class="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What it means</th>
              <th scope="col">What it does not mean</th>
            </tr>
          </thead>
          <tbody>
            {evpDefinitionData &&
              evpDefinitionData.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.theme}</td>
                  <td>{data.what_it_means}</td>
                  <td>{data.what_it_does_not_mean}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvpDefinition;
