import React from 'react';

export default function Computer_accessories() {
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
                    <img src="assets/images/service/pixlr-bg-result (1).png" alt="" height={250} />
                  </div>
                  <div className="about-thumb-big">
                    <img src="assets/images/service/pixlr-bg-result (2).png" alt="" height={225} width={300} />
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
                    <h3 className="sub-title">computer accessories</h3>
                    <h2 className="title"> We provide quality and Affordable Laptops, Laptops' accessories and Computer Repair
                      Services to Residential and Commercial customers.</h2>
                  </div>
                  <p>Our products are legitimate and tested for full functionality. </p>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
          {/* About Wrap End */}
        </div>
      </div>
      {/* Page Banner Start */}
      {/* <div class="section page-banner-section" style="background-image: url(assets/images/page-banner.jpg);">
          <div class="shape-2"></div>
          <div class="container">
              <div class="page-banner-wrap">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="page-banner text-center">
                              <h2 class="title">IT Services</h2>
                              <ul class="breadcrumb justify-content-center">
                                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                                  <li class="breadcrumb-item active" aria-current="page">IT Services</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
      {/* Page Banner End */}
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