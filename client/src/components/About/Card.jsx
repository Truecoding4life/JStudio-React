import CarouselHelper from "./caroselHelper";


export default function CarouselCard({ image, title, text, aboutIndex, description }) {
  return (
    <div style={{width:'100%'}}>
      { aboutIndex === 1 ? (
        <>
          <div key={aboutIndex} className="row animate__animated animate__fadeInRight d-flex ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 photograph d-flex align-items-center justify-content-center">
              <img src={image} alt="logo" width="100%" className="about-photo " style={{ borderRadius: 5 }} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-8 align-self-center about-me need-padding">
              <div key={aboutIndex} className="col-12 align-items-center ">
                <h3 className="about-title  "> {title}  </h3>
                <p className="about-text">
                  {" "}
                  {text[0]}
                </p>
                <p className="carousel-card-description"> {description[0]} </p>
                <p className="about-text"> {text[1]}</p>
                <p className="carousel-card-description"> {description[1]} </p>

              </div>
            </div>
          </div>
          <div className="col-12 carousel">
            <CarouselHelper index={aboutIndex} />
          </div>
        </>
      ) : (
        <>
           <div key={aboutIndex} className="row animate__animated animate__fadeInRight d-flex ">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 photograph d-flex align-items-center justify-content-center">
              <img src={image} alt="logo" width="100%" className="about-photo " style={{ borderRadius: 5 }} />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-8 align-self-center about-me ">
              <div key={aboutIndex} className="col-12 align-items-center ">
                <h3 className="about-title  "> {title}  </h3>
                <p className="about-text">
                  {" "}
                  {text}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 carousel">
            <CarouselHelper index={aboutIndex} />
          </div>
        </>
      )}
    </div>
  );
}