
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import { Button, Container } from "react-bootstrap";
import CarouselCard from "./Card";
import { aboutData } from "../../ulti/seeds";
import CarouselHelper from "./CaroselHelper";
import ShowcaseBox from "../Showcase/Showcase.jsx"

export default function AboutPage() {


  const [aboutIndex, setAboutIndex] = useState(0);

  let title = aboutData[aboutIndex].title;
  let text = aboutData[aboutIndex].text;
  let image = aboutData[aboutIndex].image;
  let special = aboutData[aboutIndex].special;
  let description = aboutData[aboutIndex]?.description || false;

  return (

    <Container className="container container-fluid about-container">
      <div className="section-about d-flex align-items-center animate__animated animate__fadeIn p-2">


        <div className="row">
          <div className="col-12">
            <CarouselCard title={title} text={text} image={image} description={description} aboutIndex={aboutIndex} set={setAboutIndex} />
          </div>



          <div className="col-12 second">
            <ShowcaseBox  />
{/* 
            <div className="row d-flex justify-content-center">

              <div className="col-3 d-flex justify-content-center align-items-center">
                <h4> Wanna know more about Jay </h4>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <h4> New Block</h4>
                  </div>
                  <div className="col-12">
                    <h4> New Block</h4>
                  </div>
                </div>

              </div>
            </div> */}


          </div>


        </div>
      </div> // row

    </Container>

  );
};


