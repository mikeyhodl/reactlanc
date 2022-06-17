import React from 'react';
// import '../App.css';
// import '../gallery.css';
// import '../baguetteBox.css';
// import '../bootstrap.css';
// import { Helmet } from "react-helmet";

export default function Gallery() {
  return (
    <div>
      <div className="section about-section section-padding">
        <div className="container">
          {/* About Wrap Start */}
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="container gallery-container">
                  <h1>Welcome to our Gallery</h1>
                  <p className="page-description text-center">A gallery shocasing some of our services</p>
                  <div className="tz-gallery">
                    <div className="row">
                      <div className="col-sm-12 col-md-4">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge" />
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park" />
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel" />
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-8">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic" />
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast" />
                        </a>
                      </div> 
                      <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                          <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* About Thumb Wrap Start */}
                {/* <div class="about-thumb-wrap">
                                <div class="about-thumb-small">
                                    <img src="assets/images/service/pixlr-bg-result234.png" alt="" height="250">
                                </div>
                                <div class="about-thumb-big">
                                    <img src="assets/images/service/clipart1515675.png" alt="" height="265" width="300">
                                </div>
                                <div class="about-thumb-shape">
                                    <img src="assets/images/ab-shape.png" alt="">
                                </div>
                                
                            </div> */}
                {/* About Thumb Wrap End */}
              </div>
            </div>
          </div>
          {/* About Wrap End */}
        </div>
      </div>
    </div>
    );
  }
