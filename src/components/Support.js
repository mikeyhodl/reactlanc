export default function Support() {
  return (
    <div>
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
      {/* Cta End */}
      {/* Contact Start */}
      <div className="section contact-section contact-section-2 section-padding" style={{backgroundImage: 'url(assets/images/bg/ab-contact.jpg)'}}>
        <div className="container">
          {/* Contact Wrap Start */}
          <div className="contact-wrap">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                {/* Contact Info Start */}
                <div className="contact-info">
                  <h3 className="info-title">Need a Quick Query?</h3>
                  <ul>
                    <li>
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item d-flex align-items-center">
                        <div className="contact-info-icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="contact-info-text">
                          <h4 className="title">Contact Number</h4>
                          <p>+254 115 588 872</p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                    </li>
                    <li>
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item d-flex align-items-center">
                        <div className="contact-info-icon">
                          <i className="flaticon-email" />
                        </div>
                        <div className="contact-info-text">
                          <h4 className="title">Our Mail</h4>
                          <p>info@lancolatech.co.ke</p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                    </li>
                    <li>
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item d-flex align-items-center">
                        <div className="contact-info-icon">
                          <i className="flaticon-pin" />
                        </div>
                        <div className="contact-info-text">
                          <h4 className="title">Our Location</h4>
                          <p>Grand Pri 3rd Floor Room 301, Eldoret</p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                    </li>
                  </ul>
                </div>
                {/* Contact Info End */}
              </div>
              <div className="col-xl-7 col-lg-6">
                {/* Contact Form Start */}
                <div className="contact-form">
                  <div className="contact-form-wrap">
                    <div className="heading-wrap text-center">
                      <span className="sub-title">Leave us massage</span>
                      <h3 className="title">How May We Help You!</h3>
                    </div>
                    <form name="Customer List" netlify>
                      <div className="row">
                        <div className="col-sm-6">
                          {/* Single Form Start */}
                          <div className="single-form">
                            <input type="text" placeholder="Your Name" id="name" name="name" required />
                          </div>
                          {/* Single Form End */}
                        </div>
                        <div className="col-sm-6">
                          {/* Single Form Start */}
                          <div className="single-form">
                            <input type="email" placeholder="Your Email" id="email" name="email" required />
                          </div>
                          {/* Single Form End */}
                        </div>
                        <div className="col-sm-12">
                          {/* Single Form Start */}
                          <div className="single-form">
                            <input type="text" placeholder="Subject" id="subject" name="subject" required />
                          </div>
                          {/* Single Form End */}
                        </div>
                        <div className="col-sm-12">
                          {/* Single Form Start */}
                          <div className="single-form">
                            <textarea placeholder="Write A Message" id="message" name="message" required defaultValue={""} />
                          </div>
                          {/* Single Form End */}
                        </div>
                        <div className="col-sm-12">
                          {/*  Single Form Start */}
                          <div className="form-btn">
                            <button className="btn" type="submit">Send Message</button>
                          </div>
                          {/*  Single Form End */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Contact Form End */}
              </div>
            </div>
          </div>
          {/* Contact Wrap End */}
        </div>
      </div>
    </div>
  );
}