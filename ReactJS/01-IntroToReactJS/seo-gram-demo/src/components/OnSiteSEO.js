function OnSiteSEO({
  name,
  description
}) {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>{name}</h5>
                <p>{description}</p>
              </div>
            </div>
    );
}

export default OnSiteSEO;