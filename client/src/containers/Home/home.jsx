import logo from "../../assets/circle.gif";
import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import PortfolioPage from "../Portfolio/Portfolio";
import FloatingActionButtonSize from "../../components/FloatingBox";
import imagee from '../../assets/robot1.png'
import { Button } from "@mui/material";
import SouthIcon from '@mui/icons-material/South';
export default function HomePage() {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText;
  const buttonTheme = theme.palette.primary.button;
  const buttonBorderTheme = theme.palette.primary.buttonBorder;
  const mainTextDev = theme.palette.primary.mainTextHighLight;
  const mainTextVet = theme.palette.primary.mainTextHighLightVet;
  return (
    <div className="container-fluid home-container p-0">

      <section className="container-fluid home-content-row d-flex align-items-center justify-content-center">
        <div className="row ">
          <div className="col-12 col-md-6 align-self-center home-header ">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                
              }}
            >
              <img src={imagee} alt="logo" id="homepage-logo" width="100%" />

            </div>
          </div>

          <div className="col-12 col-md-6 align-self-center home-header">
            <div className="col-12 text-center greeting-quote">
              <h3 className="gradient-white-text greeting-quote"> Hi, it's Jay </h3>
              <h3 className="gradient-text greeting-quote"> Fullstack Web Developer </h3>
              <h3 className="gradient-white-text greeting-quote">
                and <span className="gradient-text greeting-quote"> Veteran</span>{" "}
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

                            <h4 className=" greeting-quote-text"> <SouthIcon /> Scroll to see my portfolio <SouthIcon /> </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-section">
        <PortfolioPage></PortfolioPage>
      </section>
      <FloatingActionButtonSize></FloatingActionButtonSize>
    </div>
  );
}
