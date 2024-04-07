import { technologiesLogo } from "../../ulti/seeds";
import './slide-style.css'
export default function Slide (){
    return (
        <div  className="text-center slide shadow-1">
          <h1 className="slide-label">My techs stack</h1>
        <div className="logo-slide">
          {technologiesLogo.map((logo, index) => {
            return (

              <img src={logo} alt="logo" key={index}  className="logos" style={{ borderRadius: 5 }} />
            )

          })}
        </div>

        <div className="logo-slide">
          {technologiesLogo.map((logo, index) => {
            return (

              <img src={logo} alt="logo" key={index+9}  className="logos " style={{ borderRadius: 5 }} />
            )

          })}
        </div>


      </div>
    )
}