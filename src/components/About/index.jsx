const About= ()=> {
    return (
    <> 
    <section id="about" className="section mt-3">
    <div className="container mt-5">
      <div className="row text-center text-md-left">
        <div className="col-md-3">
          <img src="src/assets/imgs/kyle1.jpg" alt className="img-thumbnail mb-4" />
        </div>
        <div className="pl-md-4 col-md-9">
          <h6 className="title">James Smith</h6>
          <p className="subtitle">UI/UX Designer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p>
          <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>                   
        </div>
      </div>
    </div>
  </section>
   </>
    );

};

export default About;