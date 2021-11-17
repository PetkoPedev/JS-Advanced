

function App() {
  return (
    <div>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  .BREEZED
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#projects">Projects</a></li>
                  <li className="submenu">
                    <a href="javascript:;">Drop Down</a>
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Features</a></li>
                      <li><a href="">FAQ's</a></li>
                      <li><a href="">Blog</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
                  <div className="search-icon">
                    <a href="#search"><i className="fa fa-search"></i></a>
                  </div>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div id="search">
        <button type="button" className="close">×</button>
        <form id="contact" action="#" method="get">
          <fieldset>
            <input type="search" name="q" placeholder="SEARCH KEYWORD(s)" aria-label="Search through site content" />
          </fieldset>
          <fieldset>
            <button type="submit" className="main-button">Search</button>
          </fieldset>
        </form>
      </div>

      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          <div className="item">
            <div className="img-fill">
              <img src="assets/images/slide-01.jpg" alt="" />
              <div className ="text-content">
              <h3>Welcome To Breezed</h3>
              <h5>New Bootstrap Template</h5>
              <a href="#" className ="main-stroked-button">Learn More</a>
              <a href="#" className ="main-filled-button">Get It Now</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img-fill">
              <img src="assets/images/slide-02.jpg" alt="" />
              <div className ="text-content">
              <h3>Integrated Marketing Media</h3>
              <h5>Best Digital Marketing</h5>
              <a href="#" className ="main-stroked-button">Read More</a>
              <a href="#" className ="main-filled-button">Take Action</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img-fill">
              <img src="assets/images/slide-03.jpg" alt="" />
              <div className ="text-content">
              <h3>High Performance</h3>
              <h5>Robust and Speedy</h5>
              <a href="#" className ="main-stroked-button">Learn More</a>
              <a href="#" className ="main-filled-button">Get It Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down scroll-to-section"><a href="#about"><i className="fa fa-arrow-down"></i></a></div>
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h2>We work with top brands and startups</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/service-item-01.png" alt="" />
                      <h4>Top Notch</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/service-item-01.png" alt="" />
                      <h4>Robust</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/contact-info-03.png" alt="" />
                      <h4>Reliable</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/contact-info-03.png" alt="" />
                      <h4>Up-to-date</h4>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a href="#" className="main-button-icon">
                      Learn More <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-text-content">
                <p><a rel="nofollow noopener" href="https://templatemo.com/tm-543-breezed" target="_parent">Breezed HTML Template</a> is provided by TemplateMo for absolutely free of charge.You can download, edit and use this for your non-commercial and commercial websites.
                <br/><br/>Redistributing this template as a downloadable ZIP file on any template collection website is strictly prohibited.You will need to talk to us if you want to redistribute this template.Thank you.
                <br/><br/>This is a Bootstrap v4.3.1 CSS layout.Do you like it?You can feel free to <a rel="nofollow noopener" href="https://templatemo.com/contact" target="_parent">talk to us</a> if you have anything.
                </p>
                </div>
                </div>
                </div>
              </div>
      </section>
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
                        <a href="#" className="text-button-icon">
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
                        <a href="#" className="text-button-icon">
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
                        <a href="#" className="text-button-icon">
                          Learn More <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section" id="subscribe">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                      <h6>Subscribe Newsletters</h6>
                      <h2>Don’t miss this chance!</h2>
                    </div>
                    <div className="subscribe-content">
                      <p>Vivamus suscipit blandit nibh, in cursus mi. Proin vel blandit metus, et auctor elit. Vivamus tincidunt tristique convallis. Ut nec odio vel arcu euismod semper nec ac sem.</p>
                      <div className="subscribe-form">
                        <form id="subscribe-now" action="" method="get">
                          <div className="row">
                            <div className="col-md-8 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" placeholder="Enter your email..." required="" />
                              </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Subscribe Now</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section" id="projects">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="section-heading">
                      <h6>Our Projects</h6>
                      <h2>Some of our latest projects</h2>
                    </div>
                    <div className="filters">
                      <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".des">Web Design</li>
                        <li data-filter=".dev">Web Development</li>
                        <li data-filter=".gra">Graphics</li>
                        <li data-filter=".tsh">Artworks</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="filters-content">
                      <div className="row grid">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div className="item">
                            <a href="assets/images/project-big-item-01.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div className="item">
                            <a href="assets/images/project-big-item-02.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-02.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all gra">
                          <div className="item">
                            <a href="assets/images/project-big-item-03.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-03.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all tsh">
                          <div className="item">
                            <a href="assets/images/project-big-item-04.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-04.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div className="item">
                            <a href="assets/images/project-big-item-05.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-05.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div className="item">
                            <a href="assets/images/project-big-item-06.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-06.jpg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section" id="testimonials">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>Digital Team</h6>
                      <h2>young and talented members</h2>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div className="owl-carousel owl-theme">
                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-01.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.01 White Cheese</h4>
                        <span>Digital Marketer</span>
                      </div>
                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-04.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.02 Snow Mary</h4>
                        <span>Site Analyst</span>
                      </div>
                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-02.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.03 Johnny Egg</h4>
                        <span>Digital Influencer</span>
                      </div>
                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-05.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.04 Catherine Phyu</h4>
                        <span>Co Founder</span>
                      </div>
                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-03.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.05 Shao Lynn</h4>
                        <span>Chief Marketing</span>
                      </div>

                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-04.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.06 Emma Honey</h4>
                        <span>Digital Influencer</span>
                      </div>

                      <div className="item author-item">
                        <div className="member-thumb">
                          <img src="assets/images/member-item-06.jpg" alt="" />
                          <div className ="hover-effect">
                          <div className ="hover-content">
                          <ul>
                          <li><a href="#"><i className ="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className ="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className ="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className ="fa fa-rss"></i></a></li>
                          </ul>
                          </div>
                          </div>
                        </div>
                        <h4>.07 Oliva Sofie</h4>
                        <span>Website Analyst</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                        <li><img src="assets/images/contact-info-02.png" alt="" />info @company.com</li>
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
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-xs-12">
                    <div className="left-text-content">
                      <p>Copyright &copy; 2020 Breezed Co., Ltd.

                        - Design: <a rel="nofollow noopener" href="https://templatemo.com">TemplateMo</a></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12">
                    <div className="right-text-content">
                      <ul className="social-icons">
                        <li><p>Follow Us</p></li>
                        <li><a rel="nofollow" href="https://fb.com/templatemo"><i className="fa fa-facebook"></i></a></li>
                        <li><a rel="nofollow" href="https://fb.com/templatemo"><i className="fa fa-twitter"></i></a></li>
                        <li><a rel="nofollow" href="https://fb.com/templatemo"><i className="fa fa-linkedin"></i></a></li>
                        <li><a rel="nofollow" href="https://fb.com/templatemo"><i className="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          );
}

export default App;
