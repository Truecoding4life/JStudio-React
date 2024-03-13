import logo from "../../assets/circle.gif";
import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import PortfolioPage from "../Portfolio/Portfolio";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import imagee from "../../assets/robot3.png";
import { Button } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import 'animate.css'

export default function HomePage({ setSuccessAlert }) {
  const theme = useTheme();

  return (
    <div className="container-fluid home-container p-0">
      <section className="container-fluid home-content-row d-flex align-items-center justify-content-center">
        <div className="row ">
          <div className="col-12 col-md-6 align-self-center home-image ">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={imagee} alt="logo" id="homepage-logo" />
            </div>
          </div>

          <div className="col-12 col-md-6 align-self-center home-header">
            <div className="col-12 text-center">
              <h3 className="gradient-white-text greeting-quote">
                {" "}
                Hi, it's Jay{" "}
              </h3>
              <h3 className="gradient-text greeting-quote">
                {" "}
                Fullstack Web Developer{" "}
              </h3>
              <h3 className="gradient-white-text greeting-quote">
                and{" "}
                <span className="gradient-text greeting-quote"> Veteran</span>{" "}
              </h3>
              <a download="Jay_Resume.pdf">
                <Button
                  type="button"
                  href={resume}
                  className="btn download-button"
                >
                  {" "}
                  DOWNLOAD MY RESUME{" "}
                </Button>
              </a>
                
                <h5 className="greeting-quote-text animate__animated  animate__shakeY animate__infinite ">
                {" "}
              
                <SouthIcon /> Scroll to see my portfolio <SouthIcon />{" "}
              </h5>
            </div>
          </div>
        </div>
      </section>
    
      <section id="portfolio-section" >
        <PortfolioPage></PortfolioPage>
      </section>
      <FloatingButton  setSuccessAlert={setSuccessAlert}></FloatingButton>
    </div>
  );
}
