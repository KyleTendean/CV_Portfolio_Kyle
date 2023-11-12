const Service = ()=> {
    return (
    <> 
     <section id="service" className="section">
    <div className="container text-center">
      <h6 className="subtitle">Service</h6>
      <h6 className="section-title mb-4">What I Do</h6>
      <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
      <div className="row">
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="custom-card card border">
            <div className="card-body">
              <i className="icon ti-crown" />
              <h5>UI/UX Design</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="custom-card card border">
            <div className="card-body">
              <i className="icon ti-desktop" />
              <h5>Web Design</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="custom-card card border">
            <div className="card-body">
              <i className="icon ti-mobile" />
              <h5>App Design</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="custom-card card border">
            <div className="card-body">
              <i className="icon ti-bar-chart" />
              <h5>Leadership</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
    );

};

export default Service;