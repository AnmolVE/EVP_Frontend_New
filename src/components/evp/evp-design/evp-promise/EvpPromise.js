import React from "react";

import "../Design.css";

const evpPromiseData = [
  {
    id: "1",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "2",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "3",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "4",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "5",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "6",
    theme: "Theme 1",
    what_employees_can_expect:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    what_is_expected_of_employees:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

function EvpPromise() {
  return (
    <div className="evp-promise">
      <h2 className="evp-develop-heading">EVP Promise</h2>
      <p className="evp-develop-para">
        Validate your Definition data before it goes to next step.
      </p>
      <div className="evp-design-container">
        <table class="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What employees can expect</th>
              <th scope="col">What is expected of employees</th>
            </tr>
          </thead>
          <tbody>
            {evpPromiseData &&
              evpPromiseData.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.theme}</td>
                  <td>{data.what_employees_can_expect}</td>
                  <td>{data.what_is_expected_of_employees}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvpPromise;
