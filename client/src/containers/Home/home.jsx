// Import required files
import "./style.css";
import "animate.css";
import resume from "../../assets/resume.pdf";
import myPhoto from "../../assets/images/website/about.jpg";

// Import pages
import AboutPage from "../About/About";
import PortfolioPage from "../Portfolio/Portfolio";

// Import Icons
import { Button } from "@mui/material";
import {  resumeIcon } from "../../ulti/icon";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleIcon from '@mui/icons-material/Circle';


export default function HomePage({ setSuccessAlert }) {
  

  return (
    <div className="container-fluid home-container p-0 ">
      <section className="container-fluid  d-flex justify-content-center animate__animated animate__fadeIn animate__slower background-image">
        <div className="row ">
       

          <div className="col-12 col-md-12  home-header" style={{ paddingTop: '10%' }}>
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
                download="Jay_Resume.pdf"
                type="button"
                href={resume}
                className="btn download-button"
                sx={{color: '#848a8c'}}
              >
                {" "}
                {resumeIcon}
                DOWNLOAD MY RESUME{" "}
              </Button>


              <Button
                sx={{color: '#848a8c'}}
                href="#portfolio-section" type="button" className="go-portfolio btn animate__animated  animate__flash animate__repeat-3">

                  <ArrowCircleDownIcon ></ArrowCircleDownIcon>
                GO TO PORTFOLIO 
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AboutPage></AboutPage>
      <section id="portfolio-section" >
        <PortfolioPage ></PortfolioPage>
      </section>
      <FloatingButton setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}
