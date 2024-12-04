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
            <Link href="/" className="navbar-brand">
              <img
                src={NavbarStimulaiImage}
                alt="logo"
                width={150}
                height={50}
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
                    Home <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/">Home One</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/index-2/">Home Two</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/index-3/">Home Three</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/index-4/">Home Four</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/index-5/">Home Five</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    About <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about/">About Style One</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about-2/">About Style Two</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/services/">Services Style One</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services/style-2/">Services Style Two</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services/style-3/">
                        Services Style Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services/style-4/">Services Style Four</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services/service-details/">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/contact/">Contact Style One</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact-2/">Contact Style Two</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <Link className="default-btn" href="/auth/login/">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
