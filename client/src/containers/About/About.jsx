import photo1 from "../../assets/images/website/about.jpg";
import photo2 from "../../assets/images/website/photo2.jpg";
import photo3 from "../../assets/images/website/photo3.png";
import {  useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import { Button } from "react-bootstrap";
import CarouselHelper from "./caroselHelper";


export default function AboutPage() {
 

  const [aboutIndex, setAboutIndex] = useState(0)


  // Rest of your component code

  const aboutData = [
    {
      title: "CODINGWITHJAY",
      text: "I'm a Fullstack Software Developer based in California, passionate about crafting remarkable digital experiences.",
      image: photo1
    },
    {
      title: "Military Background",
      text: "Came from military background I have a strong work ethic and professionalism. In Kuwait I was nominated for Soldier of the Month twice.",
      image: photo2
    },
    {
      title: "User Experience",
      text: "To me, great user experience is paramount, I strive to create a lasting impact through innovative solutions.",
      image: photo3
    }
  ]

  let title = aboutData[aboutIndex].title;
  let text = aboutData[aboutIndex].text;
  let image = aboutData[aboutIndex].image;

  return (
    <section id="about-container" className="container-fluid">
      <div className="">
        <div className="section-about d-flex align-items-center animate__animated animate__fadeIn">
          <div className="button-about-div">
            <Button type="button" className="carousel-button" onClick={() => { aboutIndex > 0 && setAboutIndex(aboutIndex - 1) }}>
              <ChevronLeftIcon fontSize="large" />
            </Button>
          </div>
          <div className="row ">

            <div  className="col-12 col-sm-6 col-md-6 col-lg-4 pt-5 photograph  text-center">
              <image>
                <img key={aboutIndex} src={image} alt="logo" width="100%" className="about-photo align-items-center animate__animated animate__fadeInRight" style={{ borderRadius: 5 }} />
              </image>
            </div>
            <div  className="col-12 col-sm-6 col-md-6 col-lg-8 align-self-center about-me ">
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




          </div>

          <div className="button-about-div">
            <Button type="button" className="carousel-button" onClick={() => { aboutIndex < aboutData.length - 1 && setAboutIndex(aboutIndex + 1) }}>
              <NavigateNextIcon fontSize="large" />
            </Button>
          </div>
        </div>










      </div>
    </section>
  );
};
