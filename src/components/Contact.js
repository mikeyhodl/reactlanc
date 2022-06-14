import React from 'react';

export default function App() {
  return (
    <div>
      <div className="section contact-info-section section-padding-02">
        <div className="container">
          {/* Contact Info Wrap Start */}
          <div className="contact-info-wrap">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/*Single Contact Info Start */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <i className="flaticon-phone-call" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Telephone</h5>
                    <p>+254 115 588 872</p>
                  </div>
                </div>
                {/*Single Contact Info End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/*Single Contact Info Start */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Mail Address</h5>
                    <p>info@lancolatech.co.ke</p>
                  </div>
                </div>
                {/*Single Contact Info End */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/*Single Contact Info Start */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <i className="flaticon-pin" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Location</h5>
                    <p>Grand Pri 3rd Floor Room 301, Eldoret</p>
                  </div>
                </div>
                {/*Single Contact Info End */}
              </div>
            </div>
          </div>
          {/* Contact Info Wrap End */}
        </div>
      </div>
      {/* Contact Info End */}
      {/* Contact Form Start */}
      <div className="section contact-form-section section-padding">
        <div className="container">
          {/* Contact Wrap Start */}
          <div className="contact-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="form-title text-center">
                  <h2 className="title">Get Support from our Team</h2>
                </div>
                {/* Contact Form Wrap Start */}
                {/* Missing action="#" */}
                <div className="contact-form-wrap">
                  <form name="Customer List" netlify>
                    <div className="row">
                      <div className="col-md-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <input className="form-control" type="text" placeholder="Your Name" id="name" name="name" required />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <input className="form-control" type="email" placeholder="Your Email" id="email" name="email" required />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <input className="form-control" type="text" placeholder="Phone Number" id="phone" name="phone" required />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-md-6">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <input className="form-control" type="text" placeholder="Subject" id="subject" name="subject" required />  
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-md-12">
                        {/* Single Form Start */}
                        <div className="single-form">
                          <textarea className="form-control" placeholder="Write A Message" id="message" name="message" required defaultValue={""} />
                        </div>
                        {/* Single Form End */}
                      </div>
                      <div className="col-md-12">
                        {/*  Single Form Start */}
                        <div className="form-btn text-center">
                          <button className="btn" type="submit">Send Message</button>
                        </div>
                        {/*  Single Form End */}
                      </div>
                    </div>
                  </form>
                </div>
                {/* Contact Form Wrap End */}
              </div>
            </div>
          </div>
          {/* Contact Wrap End */}
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d627.2740674030131!2d35.269247999538734!3d0.5140838068682568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781015c5cc8a069%3A0x2a52e9d8fd61ce31!2sLancola%20Tech%20Company%20Limited!5e0!3m2!1sen!2ske!4v1651927795448!5m2!1sen!2ske" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lancola Tech Company" aria-label="Lancola Tech Company" />
    </div>
  );
}