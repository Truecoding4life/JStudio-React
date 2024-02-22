import logo from "../../assets/circle.gif";
import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import PortfolioPage from "../Portfolio/Portfolio";

import {  Button } from "@mui/material";


export default function HomePage() {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText;
  const buttonTheme = theme.palette.primary.button;
  const buttonBorderTheme = theme.palette.primary.buttonBorder;
  const mainTextDev = theme.palette.primary.mainTextHighLight;
  const mainTextVet = theme.palette.primary.mainTextHighLightVet;
  return (
    <div className="container-fluid home-container ">
      <section className='container d-flex align-items-center justify-content-center'>
        <div className="row ">
          <div className="col-12 col-md-5 align-self-center home-header ">
            <div
             
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <img src={logo} alt="logo" id="homepage-logo" width="60%" />
            </div>
          </div>

          <div className="col-12 col-md-7 align-self-center home-header">
            <div className="col-12 text-center">
              <h1 id="welcome-hi" style={{ color: textColor }}>
                {" "}
                Hi, it's Jay{" "}
              </h1>
              <h3 className="welcome-quote-dev gradient-text" >
                {" "}
                Fullstack Web Developer{" "}
              </h3>
              <h3 id="welcome-quote" style={{ color: textColor }}>
                {" "}
                and{" "}
                <span id="veteran" className="gradient-text">
                  {" "}
                  Veteran
                </span>{" "}
              </h3>
              <a href={resume} download="Jay_Resume.pdf">
                <Button
                  type="button"
                  style={{ color: buttonTheme, borderColor: buttonBorderTheme }}
                  href={resume}
                  className="btn download-button"
                >
                  {" "}
                  DOWNLOAD MY RESUME{" "}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='portfolio-section'>
        <PortfolioPage></PortfolioPage>
      </section>
    </div>
  );
}
