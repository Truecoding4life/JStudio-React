import photo1 from "../../assets/images/website/about.jpg";
import photo2 from "../../assets/images/website/photo2.jpg";
import photo3 from "../../assets/images/website/photo3.png";
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles'
import './style.css'
import { Button } from "react-bootstrap";

export default function AboutPage() {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText
  const themeMain = theme.palette.primary.main

  const [aboutIndex, setAboutIndex] = useState(0)
  
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
        <div className="section-about d-flex align-items-center">
          <div className="button">
            <Button type="button" style={{borderColor:'black', backgroundColor:'black'}} onClick={() => { aboutIndex > 0 ? setAboutIndex(aboutIndex - 1) : null}}>
              <ChevronLeftIcon />
            </Button>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 pt-5 photograph  text-end">
              <image>
                <img src={image} alt="logo" width="100%" className="about-photo" style={{ borderRadius: 5 }} />
              </image>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-8 align-self-center about-me ">
              <div className="col-12 ">
                <p className="about-text">
                  <h3 className="about-title"> {title}  </h3>
                  {" "}
                  {text}
                </p>
              </div>
            </div>
          </div>

          <div className="button">
            <Button type="button" style={{borderColor:'black', backgroundColor:'black'}} onClick={() => { aboutIndex < 2 ? setAboutIndex(aboutIndex + 1) : null }}>
              <NavigateNextIcon />
            </Button>
          </div>
        </div>


       





      

      </div>
    </section>
  );
};
