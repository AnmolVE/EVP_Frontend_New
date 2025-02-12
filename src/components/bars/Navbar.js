import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "boxicons/css/boxicons.min.css";

import "./Navbar.css";

import {
  NavbarStimulaiImage,
  NavbarUserImage,
} from "../../assets/images/images";

function Navbar() {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="">
              <img
                // style={{ marginLeft: "4rem" }}
                src={NavbarStimulaiImage}
                alt="logo"
                width={200}
                height={60}
              />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    EVP <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About EVP</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Create <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About Create</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Measure <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About Measure</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Engage<i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About Engage</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Amplify <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About Amplify</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Attract <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">About Attract</Link>
                    </li>

                    <li className="nav-item">
                      <p style={{ marginLeft: "15px" }}>Launch Module</p>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* <div className="others-options">
                <Link className="default-btn" href="/auth/login/">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
