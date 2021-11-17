function Features(){
    return(
        <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src="assets/images/features-icon-1.png" alt="" />
                </div>
                <div className="features-content">
                  <h4>Initial Work</h4>
                  <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
                  <a href="/#" className="text-button-icon">
                    Learn More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src="assets/images/features-icon-1.png" alt="" />
                </div>
                <div className="features-content">
                  <h4>Master Planning</h4>
                  <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
                  <a href="/#" className="text-button-icon">
                    Learn More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src="assets/images/features-icon-1.png" alt="" />
                </div>
                <div className="features-content">
                  <h4>Smooth Execution</h4>
                  <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
                  <a href="/#" className="text-button-icon">
                    Learn More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Features;