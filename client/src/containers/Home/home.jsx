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





export default function HomePage({ setSuccessAlert }) {


  useEffect(() => {

    window.scrollTo(0, 0); // Scrolls the window to the top-left corner when the component mounts

    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll('.snap-section');
    sections.forEach((section, index) => {
      let duration = index === 2 || 3 ? 400 : 0; // Adjust duration for the portfolio section
      let offset = index === 2 ? 0 : 10; // Adjust offset for the portfolio section
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
              <div className="col-12 ">
                <h3 className=" greeting-quote text-white">
                  {" "}
                  Meet Jay{" "}
                </h3>
                <h3 className=" greeting-quote text-white"> Full Stack Web Developer</h3>
                <h3 className=" greeting-quote text-white"> Veteran</h3>

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


      {/* <div >
      <ContactPage ></ContactPage>
      </div> */}
      <FloatingButton setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}

