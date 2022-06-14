// import { Link } from 'react-router-dom';

// import Faqs from './Faqs';
// import Privacy_policy from './Privacy_policy';
// import Support from './Support';
export default function Footer() {
  return (
    <div
      className="section footer-section footer-section-2"
      style={{ backgroundImage: "url(assets/images/bg/footer-bg-2.jpg)" }}
    >
      <div className="container">
        {/* Footer Widget Wrap Start */}
        <div className="footer-widget-wrap footer-widget-wrap-2">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/* Footer Widget Start */}
              <div className="footer-widget-about">
                <a className="footer-logo" href="/">
                  <img src="assets/images/logo.png" alt="Logo" />
                </a>
                <div className="widget-info widget-info-2">
                  <ul>
                    <li>
                      <div className="info-icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="info-text">
                        <span>
                          <a href="tel:254115588872">+254 115 588 872</a>
                        </span>
                        <span>
                          <a href="tel:254715223428">+254 715 223 428</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="info-icon">
                        <i className="far fa-envelope-open" />
                      </div>
                      <div className="info-text">
                        <span>
                          <a href="mailto:info@lancolatech.co.ke">
                            info@lancolatech.co.ke
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="info-icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="info-text">
                        <span>Grand Pri 3rd Floor Room 301, Eldoret</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Footer Widget Start */}
              <div className="footer-widget footer-widget-2">
                <h4 className="footer-widget-title">Useful Links</h4>
                <div className="widget-link">
                  <ul className="link">
                    <li>
                      <a href="/terms-and-conditions.txt" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="About">About Company</a>
                    </li>
                    <li>
                      <a href="Privacy_policy">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Footer Widget Start */}
              <div className="footer-widget footer-widget-2">
                <h4 className="footer-widget-title">Our Services</h4>
                <div className="widget-link">
                  <ul className="link">
                    <li>
                      <a href="Bulk_sms">Bulk SMS</a>
                    </li>
                    <li>
                      <a href="Management_systems">Managment Systems</a>
                    </li>
                    <li>
                      <a href="Computer_solutions">Computer Solutions</a>
                    </li>
                    <li>
                      <a href="Digital_marketing">Digital Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Footer Widget Start */}
              <div className="footer-widget footer-widget-2">
                <h4 className="footer-widget-title">Support</h4>
                <div className="widget-link">
                  <ul className="link">
                    <li>
                      <a href="Support">Support</a>
                    </li>
                    <li>
                      <a href="Faqs">FAQS</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget End */}
            </div>
          </div>
        </div>
        {/* Footer Widget Wrap End */}
      </div>
      {/* Footer Copyright Start */}
      <div className="footer-copyright-area footer-copyright-2">
        <div className="container">
          <div className="footer-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                {/* Footer Copyright Text Start */}
                <div className="copyright-text">
                  <p>
                    {" "}
                    ©{" "}
                    <a
                      href="https://lancolatech.co.ke/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lancola Tech Company
                    </a>
                  </p>
                </div>
                {/* Footer Copyright Text End */}
              </div>
              <div className="col-lg-6 col-md-6">
                {/* Footer Copyright Social Start */}
                <div className="copyright-social">
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/Lancola-Tech-246152853989129"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Copyright Social End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </div>
  );
}
