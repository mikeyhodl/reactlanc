export default function Header() {
  return (
    <div>
      <div
        id="header"
        className="section header-section header-section-2 transparent-header"
      >
        <div className="container">
          {/* Header Wrap Start  */}
          <div className="header-wrap">
            <div className="header-logo">
              <a href="./">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="header-menu header-menu-2 d-none d-lg-block">
              <ul className="main-menu">
                <li className="active-menu">
                  <a href="./">Home</a>
                  {/* <ul class="sub-menu">
                                  <li><a href="./">Home One</a></li>
                                  <li class="active"><a href="index-2.html">Home Two</a></li>
                                  <li><a href="index-3.html">Home Three</a></li>
                                  <li><a href="index-4.html">Home Four</a></li>
                                  <li><a href="index-5.html">Home Five</a></li>
                                  <li><a href="index-6.html">Home Six</a></li>
                              </ul> */}
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="javascript:;">Our Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="bulk-sms.html">Bulk SMS</a>
                    </li>
                    <li>
                      <a href="management-systems.html">Management Systems</a>
                    </li>
                    <li>
                      <a href="computer-solutions.html">Computer Solutions</a>
                    </li>
                    <li>
                      <a href="computer-accessories.html">
                        Computer Accessories
                      </a>
                    </li>
                    <li>
                      <a href="CCTV-installations.html">CCTV Installtions</a>
                    </li>
                    <li>
                      <a href="structured-cabling-and-networking.html">
                        Structured Cabling and Networking
                      </a>
                    </li>
                    <li>
                      <a href="digital-marketing.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="web-development.html">Web Development</a>
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
                  {/* <ul class="sub-menu">
                                  <li><a href="blog.html">Blog Grid</a></li>
                                  <li><a href="blog-standard.html">Latest News</a></li>
                                  <li><a href="blog-details.html">Blog Details</a></li>
                              </ul> */}
                </li>
                <li>
                  <a href="team.html">Our Team</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/* Header Meta Start */}
            <div className="header-meta">
              {/* Header Search Start */}
              {/* Header Search End */}
              {/* Header Cart Start */}
              {/* Header Cart End */}
              {/* Header Info Start */}
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
            <a href="./">
              <img src="assets/images/logo-white.png" alt="" />
            </a>
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
                <a href="./">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="javascript:;">Our Services</a>
                <ul className="sub-menu">
                  <li>
                    <a href="bulk-sms.html">Bulk SMS</a>
                  </li>
                  <li>
                    <a href="management-systems.html">Management Systems</a>
                  </li>
                  <li>
                    <a href="computer-solutions.html">Computer Solutions</a>
                  </li>
                  <li>
                    <a href="computer-accessories.html">Computer Accessories</a>
                  </li>
                  <li>
                    <a href="CCTV-installations.html">CCTV Installtions</a>
                  </li>
                  <li>
                    <a href="structured-cabling-and-networking.html">
                      Structured Cabling and Networking
                    </a>
                  </li>
                  <li>
                    <a href="digital-marketing.html">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="web-development.html">Web Development</a>
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
                <a href="team.html">Our Team</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Offcanvas Body End */}
      </div>
    </div>
  );
}
