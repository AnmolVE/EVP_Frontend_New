import { React } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../bars/Navbar";
import "./CustomerDetail.css";

function CustomerDetail() {
  const navigate = useNavigate();

  const handlePlusClick = () => {
    navigate("/company-input");
  };

  const handlePrimaryResearchClick = () => {
    navigate("/primary-research");
  };

  return (
    <>
      <Navbar />
      <div className="customer-detail-container">
        <div className="customer-detail-upper">
          <button className="customer-detail-button" onClick={handlePlusClick}>
            +
          </button>
        </div>
        <hr />
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Company Name</th>
                <th>Website URL</th>
                <th>Updated AT</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>www.google.com</td>
                <td>12/12/2023</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handlePrimaryResearchClick}>
                    Primary Research
                  </button>
                  <button>Secondary Research</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerDetail;
