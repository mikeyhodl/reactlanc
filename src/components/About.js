import React from 'react';

export default function App() {
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
                    <img src="assets/images/about-1.jpg" alt="" />
                  </div>
                  <div className="about-thumb-big">
                    <img src="assets/images/about-2.jpg" alt="" />
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
                    <h3 className="sub-title">Who We Are</h3>
                    <h2 className="title">A company with a mission of providing IT solutions to all our clients irrespective of
                      their sizes.</h2>
                  </div>
                  <p><strong>LancolaTech Company</strong> was established in response to a growing niche market for IT
                    solution within diverse sectors including government, non-governmental rganizations,
                    cooperatives, and state corporations, private industrial and commercial corporations; Among other
                    consumers of products and services.</p>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
          {/* About Wrap End */}
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="section service-section service-section-5">
        <div className="container">
          <div className="service-wrap">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/* Service Item Start */}
                <div className="service-item about-service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <img src="assets/images/service/s-shape-2.png" alt="" />
                  </div>
                  <div className="service-icon">
                    <img src="assets/images/service/service-1.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title"><a href="#">Mission</a></h3>
                    <p>To provide practical innovative and cutting edgesolutions to our clients diverse supply chain requirements by delivering quality value efficiencies in our products and services.</p>
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Service Item Start */}
                <div className="service-item about-service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <img src="assets/images/service/s-shape-2.png" alt="" />
                  </div>
                  <div className="service-icon">
                    <img src="assets/images/service/service-2.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title"><a href="#">Vision</a></h3>
                    <p>To be an outstanding brand and market leader provider in “IT Solutions provision “of quality services synonymous with reliability, integrity and success.</p>
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Service Item Start */}
                <div className="service-item about-service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <img src="assets/images/service/s-shape-2.png" alt="" />
                  </div>
                  <div className="service-icon">
                    <img src="assets/images/service/service-3.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title"><a href="#">Our Objectives</a></h3>
                    <p /><ul>
                      <li>To exceed customer expectations through continuous improvement in quality, service productivity and time compression.</li>
                      <li>To build long term partnership with our clients.</li>
                    </ul> <p />
                  </div>
                </div>
                {/* Service Item End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/*  Skill Start */}
      <div className="section skill-section skill-section-2">
        <div className="container">
          <div className="skill-wrap">
            {/*  Skill Content Wrap Start */}
            <div className="skill-content-wrap">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  {/*  Skill Content Left Start */}
                  <div className="skill-content-left">
                    <div className="experience">
                      <h2 className="number">6+</h2>
                      <span>Years of experience</span>
                    </div>
                    <h3 className="title">We run all kinds of <span>IT services</span> that vow your success</h3>
                  </div>
                  {/*  Skill Content Left End */}
                </div>
                <div className="col-lg-7">
                  {/*  Skill Content Right Start */}
                  <div className="skill-content-right">
                    <h3 className="title">Accelerate innovation with world-class tech teams We’ll match you to an entire remote technology</h3>
                    <div className="skill-bar-wrap">
                      {/*  Skill Item Start  */}
                      <div className="skill-item">
                        <div className="skill-header">
                          <h5 className="skill-title">IT Managment</h5>
                          <span className="skill-percentage">
                            <span className="counter">90</span>
                            %
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="progress-line" data-width={90} />
                          </div>
                        </div>
                      </div>
                      {/*  Skill Item End  */}
                      {/*  Skill Item Start  */}
                      <div className="skill-item">
                        <div className="skill-header">
                          <h5 className="skill-title">Data Security</h5>
                          <span className="skill-percentage">
                            <span className="counter">90</span>
                            %
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="progress-line" data-width={90} />
                          </div>
                        </div>
                      </div>
                      {/*  Skill Item End  */}
                      {/*  Skill Item Start  */}
                      <div className="skill-item">
                        <div className="skill-header">
                          <h5 className="skill-title">Solutions</h5>
                          <span className="skill-percentage">
                            <span className="counter">95</span>
                            %
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="progress-line" data-width={90} />
                          </div>
                        </div>
                      </div>
                      {/*  Skill Item End  */}
                    </div>
                  </div>
                  {/*  Skill Content Right End */}
                </div>
              </div>
            </div>
            {/*  Skill Content Wrap End */}
          </div>
        </div>
      </div>
      {/*  Skill End */}
      {/* Counter Start */}
      <div className="section counter-section" style={{backgroundImage: 'url(assets/images/bg/counter-bg.jpg)'}}>
        <div className="container">
          <div className="counter-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* Counter Item Start */}
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="assets/images/counter/counter-1.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">10</span>+
                    </span>
                    <p>Completed Projects</p>
                  </div>
                </div>
                {/* Counter Item End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Counter Item Start */}
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="assets/images/counter/counter-2.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">100</span>+
                    </span>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                {/* Counter Item End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Counter Item Start */}
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="assets/images/counter/counter-3.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">50</span>+
                    </span>
                    <p>Websites Designed </p>
                  </div>
                </div>
                {/* Counter Item End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Counter Item Start */}
                <div className="counter-item text-center">
                  <div className="counter-icon">
                    <img src="assets/images/counter/counter-4.png" alt="" />
                  </div>
                  <div className="counter-text">
                    <span>
                      <span className="counter">100</span>+
                    </span>
                    <p>Clients Supoort Done</p>
                  </div>
                </div>
                {/* Counter Item End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter End */}
      {/* Testimonial Start */}
      {/* Testimonial End */}
      {/* Brand Logo Start */}
      <div className="section Brand-section Brand-section-2">
        <div className="container">
          {/* Brand Wrapper Start */}
          <div className="brand-wrapper brand-wrapper-2 text-center">
            <h3 className="brand-title">Trusted by <span>Multiple</span> companies</h3>
            {/* Brand Active Start */}
            <div className="brand-active">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-1.jpg" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-2.png" alt="Brand" height={75} width={75} />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-3.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-4.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-5.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-6.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-7.jpg" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-8.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                  {/* Single Brand Start */}
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-9.png" alt="Brand" />
                  </div>
                  <div className="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-10.png" alt="Brand" />
                  </div>
                  {/* Single Brand End */}
                </div>
              </div>
            </div>
            {/* Brand Active End */}
          </div>
          {/* Brand Wrapper End */}
        </div>
      </div>
    </div>
  );
}