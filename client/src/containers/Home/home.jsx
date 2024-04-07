// Import required files
import "./style.css";
import "animate.css";
import resume from "../../assets/resume.pdf";
import myPhoto from "../../assets/images/website/other/profile.jpg";
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';


// Import pages
import Carousel from "../../components/Carousel/Carousel.jsx";
import PortfolioPage from "../Portfolio/Portfolio";
import ContactPage from "../Contact/contact.jsx";
import AboutPage from "../About/AboutPage.jsx";
import NavbarLi from "../../components/Navbar/Navbar.jsx";

// Import Icons
import { Button } from "@mui/material";
import { resumeIcon } from "../../ulti/icon";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleIcon from '@mui/icons-material/Circle';



// JS



export default function HomePage({ setSuccessAlert }) {

  let running = false;

  useEffect(() => {
    let text = $('#text');


function tsWrite(array) {
  let data = array[0]
  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      text.html(text.html() + data[i]);
    }, 100 * i);
    if (i === data.length - 1) {
      setTimeout(() => {
        tsDelete(array);
      }, 100 * i + 100); // Add some delay before calling tsDelete
    }
  }
}

function tsDelete(array) {
  let data = array[0];
  for (let i = data.length - 1; i >= 0; i--) {
    setTimeout(() => {
      text.html(text.html().slice(0, -1));
    }, 100 * (data.length - 1 - i)); // Reverse the index to delete characters one by one
  }
  setTimeout(() => {
    let newArray =[];
    for ( let i = 1; i >= 0; i--){
      newArray.push(array[i])
    }
    tsWrite(newArray); // Call tsWrite again after deleting all characters
  }, 100 * data.length);
}
     // Ensure that the element with ID 'text' exists

     // Check if the element exists
     if (text.length === 0) {
       console.error("Element with ID 'text' not found");
       return;
     }
    let Data = [" Full Stack Web Developer   ", " Veteran   "];
    runTS(Data);

function runTS(data) {
  
    tsWrite(data);
    running = true;
 
}



    window.scrollTo(0, 0); // Scrolls the window to the top-left corner when the component mounts

    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll('.snap-section');
    sections.forEach((section, index) => {
      let duration = index === 2 || 3 ? 400 : 400; // Adjust duration for the portfolio section
      let offset = index === 2 ? 40 : 0; // Adjust offset for the portfolio section
      let triggerHook = index === 3 ? 0 : 0; // Adjust trigger hook for the portfolio section
      new ScrollMagic.Scene({
        triggerElement: section,
        duration: duration,
        triggerHook: triggerHook,
        offset: offset,
      })
        .setPin(section)
        .addTo(controller);
    });

    return () => {
      controller.destroy();
      
    };
  }, []);

  return (
    <div className="container-fluid  p-0">

      
      <section className="container-fluid home p-0   animate__animated animate__fadeIn  height-100 background-image snap-section ">
        <NavbarLi></NavbarLi>
        <div className="row ">

          <div className="col-12 col-md-12  home-header "  >
            <div className="row d-flex justify-content-center align-items-center p-4">
              <div className="col-12 ">
                <div id='profile-box' className="row profile-box d-flex align-items-center">
                  <div className="col-4">

                    <img src={myPhoto} alt="logo" id="profile-picture" />
                  </div>
                  <div className="col-8">


                    <p className="open-to-work"> <CircleIcon className="open-to-work-icon" fontSize="smaller"></CircleIcon>  Open to work</p>
                  </div>
                </div>
              </div>
              <div className="col-12 shadow-1">
                <h3 className=" greeting-quote ">
                  {" "}
                  Meet Jay{" "}
                </h3>
                <h3 className=" greeting-quote "> </h3>
                <h3  className=" greeting-quote "> I am a  <span id='text' className="greeting-quote"> </span></h3>
                <h3> </h3>

               
                <Button

                  type="button"
                  onClick={() => window.open(resume, "jay_resume")}
                  className="btn download-button animate__animated  animate__flash animate__repeat-2"
                  
                >
                  {" "}
                  {resumeIcon}
                  DOWNLOAD MY RESUME{" "}
                </Button>


                <Button
                  
                  href="#portfolio-section" type="button" className="go-portfolio btn animate__animated  animate__flash animate__repeat-2">

                  <ArrowCircleDownIcon ></ArrowCircleDownIcon>
                  GO TO PORTFOLIO
                </Button>
              </div>

            </div>
          </div>
        </div>
         <div className="container scene-container">

  </div>
      </section>


      <section id="about-container" className="container-fluid height-100 snap-section p-0">
        <Carousel ></Carousel>
      </section>
      <div id="portfolio-section" className="snap-section heigh-more" >
        <PortfolioPage ></PortfolioPage>
      </div>
      <section id='info-section' className="container-fluid height-100 snap-section p-0">
        <AboutPage></AboutPage>
      </section>
      <section id='contact-section' className="container-fluid height-100 snap-section p-0">
        <ContactPage ></ContactPage>
      </section>


     
      <FloatingButton setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}

