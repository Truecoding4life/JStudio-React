import CarouselHelper from "./caroselHelper";


export default function CarouselCard({ image, title, text, aboutIndex }) {
  return (
    <div>
      {image ? (
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
      ) : (
        <>
          <div key={aboutIndex} className="align-items-center animate__animated animate__fadeInRight">
            <div className="col-12 col-sm-6 col-md-6 col-lg-12 align-self-center about-me ">
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
        </>
      )}
    </div>
  );
}