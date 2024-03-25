import CarouselHelper from "./caroselHelper";


export default function CarouselCard({ image, title, text, aboutIndex}) {
  return (
    <div className="row">
    {image ? (
      <>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 pt-5 photograph  text-center">
          <img key={aboutIndex} src={image} alt="logo" width="100%" className="about-photo align-items-center animate__animated animate__fadeInRight" style={{ borderRadius: 5 }} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-8 align-self-center about-me ">
          <div key={aboutIndex} className="col-12 align-items-center animate__animated animate__fadeInRight">
            <h3 className="about-title  "> {title}  </h3>
            <p className="about-text">
              {" "}
              {text}
            </p>
          </div>
        </div>
        <div className="col-12 carousel">
          <CarouselHelper index={aboutIndex} />
        </div>
      </>
    ) : (
        <div className="col-12 col-sm-6 col-md-6 col-lg-12 align-self-center about-me ">
          <div key={aboutIndex} className="col-12 align-items-center animate__animated animate__fadeInRight">
            <h3 className="about-title  "> {title}  </h3>
            <p className="about-text">
              {" "}
              {text}
            </p>
          </div>
        
        <div className="col-12 carousel">
          <CarouselHelper index={aboutIndex} />
        </div>
      </div>
    )}
  </div>
  );
}