export default function Web_development() {
  return (
    <div>
      <div className="section about-section section-padding">
        <div className="container">
          {/* About Wrap Start */}
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                {/* About Thumb Wrap Start */}
                <div className="about-thumb-wrap">
                  <div className="about-thumb-small">
                    <img src="assets/images/service/pexels-kevin-ku-577585.jpg" alt="" height={250} />
                  </div>
                  <div className="about-thumb-big">
                    <img src="assets/images/service/pixlr-bg-result (4).png" alt="" height={265} width={400} />
                  </div>
                  <div className="about-thumb-shape">
                    <img src="assets/images/ab-shape.png" alt="" />
                  </div>
                  {/* <div class="play-btn">
                                  <a class="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"><i class="fas fa-play"></i></a>
                              </div> */}
                </div>
                {/* About Thumb Wrap End */}
              </div>
              <div className="col-lg-6">
                {/* About Content Start */}
                <div className="about-content">
                  <div className="section-title">
                    <h3 className="sub-title">Who We AreWEB Development</h3>
                    <h2 className="title">We offer a world class web development service to our clients.Our services are unique and up to date with the current state of art technologies.
                    </h2>
                  </div>
                  <p>LancolaTech company has talented web designers and programmers and we are trusted by hundreds of clients across the country for whom we have developed the most prestigious, interactive brands. We develop Ecommerce, Enterprise and Small business web applications</p>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
          {/* About Wrap End */}
        </div>
      </div>
      {/* Cta Start */}
      <div className="section cta-section-3 section-padding-03" style={{backgroundImage: 'url(assets/images/bg/counter-bg.jpg)'}}>
        <div className="container">
          {/* Cta Wrap Start */}
          <div className="cta-wrap-3">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-content text-center">
                  <h2 className="title">Make a great project with us</h2>
                  <p>To make requests for further information, <a>Contact US</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* Cta Wrap End */}
        </div>
      </div>
      {/* Cta End */}
      {/* Footer Section Start */}
      <div className="section footer-section footer-section-2" style={{backgroundImage: 'url(assets/images/bg/footer-bg-2.jpg)'}}>
        <div className="container">
          {/* Footer Widget Wrap Start */}
          <div className="footer-widget-wrap footer-widget-wrap-2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* Footer Widget Start */}
                <div className="footer-widget-about">
                  <a className="footer-logo" href="./"><img src="assets/images/logo.png" alt="Logo" /></a>
                  <div className="widget-info widget-info-2">
                    <ul>
                      <li>
                        <div className="info-icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="info-text">
                          <span><a href="tel:254115588872">+254 115 588 872</a></span>
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <i className="far fa-envelope-open" />
                        </div>
                        <div className="info-text">
                          <span><a href="mailto:info@lancolatech.co.ke">info@lancolatech.co.ke</a></span>
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
                      <li><a href="terms-and-conditions.txt" target="_blank">Terms &amp; Conditions</a></li>
                      <li><a href="about.html">About Company</a></li>
                      <li><a href="privacy-policy.html">Policy</a></li>
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
                      <li><a href="bulk-sms.html">Bulk SMS</a></li>
                      <li><a href="management-systems.html">Managment Systems</a></li>
                      <li><a href="computer-solutions.html">Computer Solutions</a></li>
                      <li><a href="digital-marketing.html">Digital Marketing</a></li>
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
                      <li><a href="support.html">Support</a></li>
                      <li><a href="faqs.html">FAQS</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget End */}
              </div>
            </div>
          </div>
          {/* Footer Widget Wrap End */}
        </div>
      </div></div>
  );
}