import CarouselHelper from "./CaroselHelper";
import CloudIcon from '@mui/icons-material/Cloud';
import './rocket.css'

import { rocketIcon } from '../../ulti/icon'


export default function CarouselCard({ image,  text, aboutIndex, description, set }) {
  return (


    <div className="row">

      {aboutIndex === 1 ? (
        <div id='carousel' key={aboutIndex} className="row animate__animated animate__fadeIn d-flex  p-4">
          <div className="scene-container col-4">
            <div className="scene">
              <i className="rocket-icon"> {rocketIcon}</i>

              <span className="cloud c1"> <CloudIcon className="c1" /></span>
              <span className="cloud c2"> <CloudIcon className="c2" /></span>
              <span className="cloud c3"> <CloudIcon className="c3" /></span>

            </div>
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4 className="carousel-text">
            {text}
            </h4>
          </div>

          <div className="carousel-helper col-12 col-sm-12 text-center">
            <CarouselHelper index={aboutIndex} set={set} />
          </div>
        </div>
      ) : (
        <div id='carousel' key={aboutIndex} className="row animate__animated animate__fadeIn d-flex m-0 p-0">

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 photograph d-flex align-items-center justify-content-center">
            <img src={image} alt="logo" className="carousel-photo " style={{ borderRadius: 5 }} />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 align-self-center about-me ">
            <div key={aboutIndex} className="col-12  ">
              {aboutIndex === 0 && (
                <h4 className="carousel-title"> CODINGWITHJAY   </h4>

              )}
              <p className="carousel-text ">
                {" "}
                {text}
              </p>
            </div>
          </div>
          <div className="carousel-helper col-12 col-sm-12 text-center">
            <CarouselHelper index={aboutIndex} set={set} />
          </div>

        </div>
      )}




    </div>


  );
}