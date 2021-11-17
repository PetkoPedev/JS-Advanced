function Subscribe(){
    return(
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
    );
}

export default Subscribe;