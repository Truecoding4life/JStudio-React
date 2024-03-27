
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import { Button } from "react-bootstrap";
import CarouselCard from "./Card";
import {aboutData} from "../../ulti/seeds";

export default function AboutPage() {


  const [aboutIndex, setAboutIndex] = useState(0);

  let title = aboutData[aboutIndex].title;
  let text = aboutData[aboutIndex].text;
  let image = aboutData[aboutIndex].image;

  return (
    
      <div>
        <div className="section-about d-flex align-items-center animate__animated animate__fadeIn ">
          <div className="button-about-div">
            <Button type="button" className="carousel-button" onClick={() => { aboutIndex > 0 && setAboutIndex(aboutIndex - 1) }}>
              <ChevronLeftIcon fontSize="large" />
            </Button>
          </div>
         

          <CarouselCard title={title} text={text} image={image} aboutIndex={aboutIndex} />
          <div className="button-about-div">
            <Button type="button" className="carousel-button" onClick={() => { aboutIndex < aboutData.length - 1 && setAboutIndex(aboutIndex + 1) }}>
              <NavigateNextIcon fontSize="large" />
            </Button>
          </div>
        </div>
      </div>
  
  );
};
