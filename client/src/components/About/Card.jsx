import CarouselHelper from "./caroselHelper";

export default function CarouselCard({ image, title, text, aboutIndex, description, set }) {
  return (
    <div style={{width:'100%'}}>
      { aboutIndex === 1 ? (
        <>
          <div id='carousel' key={aboutIndex} className="row animate__animated animate__fadeInRight d-flex">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 photograph d-flex align-items-center justify-content-center">
            <img src={image} alt="logo" width="100%" className=" devices " style={{ borderRadius: 5 }} />

            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 align-self-center about-me">
              <div key={aboutIndex} className="col-12 align-items-center ">
                <h3 className="about-title  "> {title}  </h3>
                <p className="about-text">
                  {" "}
                  {text[0]}
                </p>
                
                <p className="carousel-card-description"> {description[0]} </p>
                <br></br>
                <p className="carousel-card-description"> {description[1]} </p>

              </div>
            </div>
          </div>
          <div className="carousel col-12 col-sm-12 ">
            <CarouselHelper index={aboutIndex} set={set} />
          </div>
        </>
      ) : (
        <>
           <div id='carousel' key={aboutIndex} className="row animate__animated animate__fadeInRight d-flex m-0 ">
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
          <div className="carousel col-12 col-sm-12 text-center">
            <CarouselHelper index={aboutIndex} set={set}/>
          </div>
        </>
      )}
    </div>
  );
}