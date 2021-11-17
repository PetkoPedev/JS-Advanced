function Projects() {
    return(
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
    );
}

export default Projects;