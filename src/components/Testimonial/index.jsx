const Testmonial = ()=> {
    return (
    <> 
    <section id="testmonial" className="section">
    <div className="container text-center">
      <h6 className="subtitle">Testmonial</h6>
      <h6 className="section-title mb-4">What People Say About Me</h6>
      <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card testmonial-card border">
              <div className="card-body">
                <img src="src/assets/imgs/kyle2.jpg" alt />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                <h1 className="title">Kyle T</h1>
                <h1 className="subtitle">Mobile Designer</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card testmonial-card border">
              <div className="card-body">
                <img src="assets/imgs/avatar-2.jpg" alt />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                <h1 className="title">James Bert</h1>
                <h1 className="subtitle">Web Designer</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card testmonial-card border">
              <div className="card-body">
                <img src="assets/imgs/avatar-3.jpg" alt />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                <h1 className="title">Michael Abra</h1>
                <h1 className="subtitle">Web Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
    );

};

export default Testmonial;