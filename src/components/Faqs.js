export default function Faqs() {
  return (
    <div>
      <div className="offcanvas offcanvas-start" id="offcanvasExample">
        <div className="offcanvas-header">
          {/* Offcanvas Logo Start */}
          <div className="offcanvas-logo">
            <a href="./"><img src="assets/images/logo-white.png" alt="" /></a>
          </div>
          {/* Offcanvas Logo End */}
          <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="flaticon-close" /></button>
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
              <li><a href="javascript:;">Our Services</a>
                <ul className="sub-menu">
                  <li><a href="bulk-sms.html">Bulk SMS</a></li>
                  <li><a href="management-systems.html">Management Systems</a></li>
                  <li><a href="computer-solutions.html">Computer Solutions</a></li>
                  <li><a href="computer-accessories.html">Computer Accessories</a></li>
                  <li><a href="CCTV-installations.html">CCTV Installtions</a></li>
                  <li><a href="structured-cabling-and-networking.html">Structured Cabling and Networking</a></li>
                  <li><a href="digital-marketing.html">Digital Marketing</a></li>
                  <li><a href="web-development.html">Web Development</a></li>
                </ul>
              </li>
              <li><a href="https://blog.lancolatech.co.ke" target="_blank">Blog</a>
              </li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* Offcanvas Body End */}
      </div>
      {/* Offcanvas End */}
      {/* Features Start */}
      <div className="section features-section-3 features-section-4 section-padding">
        <div className="container">
          {/* Features Wrap Start */}
          <div className="features-wrap-3">
            <div className="section-title2 text-center">
              <h2 className="title">We run all kinds of <span>IT services</span> that vow your success</h2>
            </div>
          </div>
          {/* Features Wrap End */}
        </div>
      </div>
      {/* Features End */}
      {/*  Skill Start */}
      {/*  Skill End */}
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
    </div>
  );
}