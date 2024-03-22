import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import {  resumeIcon } from "../../ulti/icon";

import PortfolioPage from "../Portfolio/Portfolio";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import myPhoto from "../../assets/images/website/about.jpg";
import { Button } from "@mui/material";
import "animate.css";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function HomePage({ setSuccessAlert }) {
  const theme = useTheme();

  return (
    <div className="container-fluid home-container animate__animated animate__fadeIn">
      <section className="container-fluid  d-flex justify-content-center  background-image">
        <div className="row ">
          {/* <div className="col-12 col-md-6 home-image ">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={myPhoto} alt="logo" id="homepage-logo" />
            </div>
          </div> */}

          <div className="col-12 col-md-12  home-header" style={{ paddingTop: '20%' }}>
            <div className="col-12 text-center">
              <img src={myPhoto} alt="logo" id="profile-picture" />
            </div>
            <div className="col-12 text-center">
              <h3 className="gradient-white-text greeting-quote greeting-sm">
                {" "}
                Hi, it's Jay{" "}
              </h3>
              <h3 className="gradient-text greeting-quote w-40">
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

      <section id="portfolio-section">
        <PortfolioPage></PortfolioPage>
      </section>
      <FloatingButton setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}
