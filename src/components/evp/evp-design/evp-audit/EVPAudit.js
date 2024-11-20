import React from "react";

import "../Design.css";

const evpAuditData = [
  {
    id: "1",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "2",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "3",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "4",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "5",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    id: "6",
    theme: "Theme 1",
    what_makes_this_credible:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    whare_do_we_need_to_stretch:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

function EVPAudit() {
  return (
    <div className="evp-audit">
      <h2 className="evp-develop-heading">EVP Audit</h2>
      <p className="evp-develop-para">
        Validate your Definition data before it goes to next step.
      </p>
      <div className="evp-design-container">
        <table class="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Themes</th>
              <th scope="col">What makes this credible</th>
              <th scope="col">Where do we need to stretch</th>
            </tr>
          </thead>
          <tbody>
            {evpAuditData &&
              evpAuditData.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.theme}</td>
                  <td>{data.what_makes_this_credible}</td>
                  <td>{data.whare_do_we_need_to_stretch}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EVPAudit;
