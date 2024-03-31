// Import required files
import "./style.css";
import "animate.css";
import resume from "../../assets/resume.pdf";
import myPhoto from "../../assets/images/website/other/profile.jpg";
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';


// Import pages
import AboutPage from "../../components/About/About.jsx";
import PortfolioPage from "../Portfolio/Portfolio";
import ContactPage from "../Contact/contact.jsx";

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
      let duration = index === 2 ? 400 : 0; // Adjust duration for the portfolio section
      let offset = index === 2 ? 0 : 10; // Adjust offset for the portfolio section
      let triggerHook = index === 2 ? 0 : 0; // Adjust trigger hook for the portfolio section
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
    <div className="container-fluid home-container">
      <section className="container-fluid   animate__animated animate__fadeIn animate__slower height-100 background-image snap-section ">
        <div className="row ">

          <div className="col-12 col-md-12  home-header "  >
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 text-center">
                <img src={myPhoto} alt="logo" id="profile-picture" />
                <p className="open-to-work"> <CircleIcon className="open-to-work-icon" fontSize="smaller"></CircleIcon>  Open to work</p>
              </div>
              <div className="col-12 text-center">
                <h3 className="gradient-white-text greeting-quote greeting-sm">
                  {" "}
                  Hi, it's Jay{" "}
                </h3>
                <h3 className="gradient-text greeting-quote">
                  {" "}
                  Fullstack Web Developer{" "}
                </h3>
                <h3 className="gradient-white-text greeting-quote greeting-sm">
                  and{" "}
                  <span className="gradient-text greeting-quote greeting-sm">
                    {" "}
                    Veteran
                  </span>{" "}
                </h3>

                <Button

                  type="button"
                  onClick={() => window.open(resume, "jay_resume")}
                  className="btn download-button"
                  sx={{ color: '#848a8c' }}
                >
                  {" "}
                  {resumeIcon}
                  DOWNLOAD MY RESUME{" "}
                </Button>


                <Button
                  sx={{ color: '#848a8c' }}
                  href="#portfolio-section" type="button" className="go-portfolio btn animate__animated  animate__flash animate__repeat-3">

                  <ArrowCircleDownIcon ></ArrowCircleDownIcon>
                  GO TO PORTFOLIO
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="about-container" className="container-fluid height-100 snap-section">
        <AboutPage ></AboutPage>
      </section>
      <div id="portfolio-section" className="snap-section heigh-more" >
        <PortfolioPage ></PortfolioPage>
      </div>


      <div >
      <ContactPage ></ContactPage>
      </div>
      <FloatingButton setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}

