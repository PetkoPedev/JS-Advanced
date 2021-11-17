function ContactUs() {
    return (
        <section className="section" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>Feel free to keep in touch with us!</h2>
                </div>
                <ul className="contact-info">
                  <li><img src="assets/images/contact-info-01.png" alt="" />010-020-0860</li>
                  <li><img src="assets/images/contact-info-02.png" alt="" />info@company.com</li>
                  <li><img src="assets/images/contact-info-03.png" alt="" />www.company.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12">
              <div className="contact-form">
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" id="name" placeholder="Your Name *" required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="phone" type="text" id="phone" placeholder="Your Phone" required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="email" type="email" id="email" placeholder="Your Email *" required="" />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="subject" type="text" id="subject" placeholder="Subject" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button-icon">Send Message Now <i className="fa fa-arrow-right"></i></button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactUs;