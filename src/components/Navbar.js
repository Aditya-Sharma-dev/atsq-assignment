import React from "react";
import img from "../assets/kula.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* <div class="container"> */}
          <a className="navbar-brand" href="/">
            <img src={img} alt="Bootstrap" width="35px" height="35px" />
          </a>
          {/* </div> */}
          {/* <a className="navbar-brand" href="/">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Kula Outreach
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Kula Circles
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Our Story
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Guides
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search"> */}
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn btn-outline-success demo-btn" type="submit">
                Book a demo
              </button>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
