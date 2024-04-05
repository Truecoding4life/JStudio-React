
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import Container from '@mui/material/Container';
import CarouselCard from "./Card";
import { aboutData } from "../../ulti/seeds";
import CarouselHelper from "./CaroselHelper";
import ShowcaseBox from "../Showcase/Showcase.jsx"
import Slide from "./Slide.jsx"

export default function AboutPage() {


  const [aboutIndex, setAboutIndex] = useState(0);

  let text = aboutData[aboutIndex]?.text;
  let image = aboutData[aboutIndex]?.image;
  let description = aboutData[aboutIndex]?.description || false;

  return (

    <div className="container about-container">
      <div className="section-about d-flex align-items-center  animate__animated animate__fadeIn p-2 ">


        <div id='carousel-row' className="row ">
          <div className="col-12 p-0">
            <CarouselCard  text={text} image={image} description={description} aboutIndex={aboutIndex} set={setAboutIndex} />
          </div>



          <div className="col-12 mt-3">

            <ShowcaseBox />

          </div>

         <div className="Slide-container p-0 pt-3">
          <Slide />
         </div>

        </div>


                

        
      </div>

    </div>

  );
};


