import CarouselHelper from "./CaroselHelper";

export default function CarouselCard({ image, title, text, aboutIndex, description, set }) {
  return (
 

      <div  className="row">
        <div id='carousel' key={aboutIndex} className="row animate__animated animate__fadeIn d-flex m-0 p-0">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 photograph d-flex align-items-center justify-content-center">
            <img src={image} alt="logo" width="100%" className="carousel-photo " style={{ borderRadius: 5 }} />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 align-self-center about-me ">
            <div key={aboutIndex} className="col-12 align-items-center ">
              <h4 className="carousel-title  "> {title}  </h4>
              <p className="carousel-text">
                {" "}
                {text}
              </p>
            </div>
          </div>
 <div className="carousel-helper col-12 col-sm-12 text-center">
          <CarouselHelper index={aboutIndex} set={set} />
        </div>
        </div>
        
       

      </div>


  );
}