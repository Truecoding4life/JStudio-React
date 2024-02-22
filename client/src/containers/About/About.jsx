import logo from "../../assets/Homepage.jpg";
import {useTheme} from '@mui/material/styles'


export default function AboutPage() {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText
  const themeMain = theme.palette.primary.main
  return (
    <section id="about-container" className="container-fluid">
      <div className="row mephoto">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 align-self-center photograph">
          <image>
            <img src={logo} alt="logo"  width="100%" />
          </image>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-4 align-self-center about-me mt-3">
          <div className="col-12 p-5">
            <h3 className="highlight" style={{color:themeMain}}> CODINGWITHJAY  </h3>
            <p style={{color:textColor}}>
              {" "}
              I'm a Fullstack Software Developer based in California, passionate
              about crafting remarkable digital experiences. Came from military background
              I have a strong work ethic and professionalism. I have a strong foundation in web development, and I am always looking to expand my skill set. I am a quick learner and a team player, and
              I strive to create a lasting impact through innovative solutions. To me, great user experience is paramount, and I bring that
              commitment to every project I undertake.
            </p>
          </div>
          <div className="col-12 ">
            <h3 className="highlight" style={{color:themeMain}}> Came From Military Background  </h3>
            <p style={{color:textColor}}>
              {" "}
              I'm Proud to served in the United State Army. I'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
