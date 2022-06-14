import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Bulk_SMS from "./Bulk_SMS";
import Contact from "./Contact";
import Home from "./Home";
import CCTV_installations from "./CCTV_installations";
// import Gallery from './Gallery';
import Management_systems from "./Management_systems";
import Computer_accessories from "./Computer_accessories";
import Computer_solutions from "./Computer_solutions";
import Digital_marketing from "./Digital_marketing";
import Team from "./Team";
import Web_development from "./Web_development";
import Structured_cabling_and_networking from "./Structured_cabling_and_networking";

export default function Header() {
  return (
    <div>
      <Router>
        <div
          id="header"
          className="section header-section header-section-2 transparent-header"
        >
          <div className="container">
            {/* Header Wrap Start  */}
            <div className="header-wrap">
              <div className="header-logo">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="header-menu header-menu-2 d-none d-lg-block">
                <ul className="main-menu">
                  <li className="active-menu">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About Us</Link>
                  </li>
                  <li>
                    <a href="javascript:;">Our Services</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/Bulk_SMS">Bulk SMS</Link>
                      </li>
                      <li>
                        <Link to="/Management_systems">Management Systems</Link>
                      </li>
                      <li>
                        <Link to="/Computer_solutions">Computer Solutions</Link>
                      </li>
                      <li>
                        <Link to="/Computer_accessories">
                          Computer Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/CCTV_installations">CCTV Installtions</Link>
                      </li>
                      <li>
                        <Link to="/Structured_cabling_and_networking">
                          Structured Cabling and Networking
                        </Link>
                      </li>
                      <li>
                        <Link to="/Digital_marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/Web_development">Web Development</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://blog.lancolatech.co.ke"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link to="/Team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Header Meta Start */}
              <div className="header-meta">
                <div className="header-info d-none d-md-flex">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="info-text">
                    <span>For Enquiries</span>
                    <span className="number">
                      <a href="tel:254115588872">+254 115 588 872</a>
                    </span>
                    <span className="number">
                      <a href="tel:254715223428">+254 715 223 428</a>
                    </span>
                  </div>
                </div>
                {/* Header Info End */}
                <div className="header-btn-2 d-none d-xl-block">
                  <a
                    className="btn"
                    href="mailto:info@lancolatech.co.ke"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email Us!
                  </a>
                </div>
                {/* Header Toggle Start */}
                <div className="header-toggle d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
                {/* Header Toggle End */}
              </div>
              {/* Header Meta End  */}
            </div>
            {/* Header Wrap End  */}
          </div>
        </div>
        {/* Header End */}
        {/* Offcanvas Start*/}
        <div className="offcanvas offcanvas-start" id="offcanvasExample">
          <div className="offcanvas-header">
            {/* Offcanvas Logo Start */}
            <div className="offcanvas-logo">
              <Link to="/">
                <img src="assets/images/logo-white.png" alt="" />
              </Link>
            </div>
            {/* Offcanvas Logo End */}
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="offcanvas"
            >
              <i className="flaticon-close" />
            </button>
          </div>
          {/* Offcanvas Body Start */}
          <div className="offcanvas-body">
            <div className="offcanvas-menu">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About Us</Link>
                </li>
                <li>
                  <a href="/javascript:;">Our Services</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/Bulk_SMS">Bulk SMS</Link>
                    </li>
                    <li>
                      <Link to="/Management_systems">Management Systems</Link>
                    </li>
                    <li>
                      <Link to="/Computer_solutions">Computer Solutions</Link>
                    </li>
                    <li>
                      <Link to="/Computer_accessories">
                        Computer Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="/CCTV_installations">CCTV Installtions</Link>
                    </li>
                    <li>
                      <Link to="/Structured_cabling_and_networking">
                        Structured Cabling and Networking
                      </Link>
                    </li>
                    <li>
                      <Link to="/Digital-marketing">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/Web-development">Web Development</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://blog.lancolatech.co.ke"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link to="/Team">Our Team</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Offcanvas Body End */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Bulk_SMS" element={<Bulk_SMS />} />
          <Route path="/Management_systems" element={<Management_systems />} />
          <Route path="/Computer_solutions" element={<Computer_solutions />} />
          <Route
            path="/Computer_accessories"
            element={<Computer_accessories />}
          />
          <Route path="/CCTV_installations" element={<CCTV_installations />} />
          <Route
            path="/Structured_cabling_and_networking"
            element={<Structured_cabling_and_networking />}
          />
          <Route path="/Digital-marketing" element={<Digital_marketing />} />
          <Route path="/Web-development" element={<Web_development />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
