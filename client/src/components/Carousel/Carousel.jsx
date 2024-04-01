
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import { Button, Container } from "react-bootstrap";
import CarouselCard from "./Card";
import {aboutData} from "../../ulti/seeds";
import CarouselHelper from "./CarouselHelper";
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
        
         

          <CarouselCard title={title} text={text} image={image} description={description} aboutIndex={aboutIndex} set={setAboutIndex} />
          
         
         </div>
         
      </Container>
  
  );
};
