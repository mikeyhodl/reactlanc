import React from 'react';

export default function Digital_marketing() {
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
                    <img src="assets/images/service/Digital-Marketing.jpg" alt="" height={250} />
                  </div>
                  <div className="about-thumb-big">
                    <img src="assets/images/service/pixlr-bg-result (5).png" alt="" height={225} width={300} />
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
                    <h3 className="sub-title">digital marketing</h3>
                    <h2 className="title">We offer digital marketing at an Affordable market price. We do market :</h2>
                  </div>
                  <p>
                    <strong>
                      Businesses
                    </strong>
                    <br />
                    <strong>
                      Institutions
                    </strong>
                    <br />
                    <strong>
                      Events
                    </strong>
                    <br />
                    <strong>
                      Personalities
                    </strong>
                    <br />
                    <strong>
                      products and Services
                    </strong>
                  </p>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
          {/* About Wrap End */}
        </div>
      </div>
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
                  <p>To make requests for further information, <a href="contact.html">Contact US</a></p>
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