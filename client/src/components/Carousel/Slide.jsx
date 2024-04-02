import { technologiesLogo } from "../../ulti/seeds";
import './slide-style.css'
export default function Slide (){
    return (
        <div  className=" slide">
        <div className="logo-slide">
          {technologiesLogo.map((logo, index) => {
            return (

              <img src={logo} alt="logo"  className="logos" style={{ borderRadius: 5 }} />
            )

          })}
        </div>

        <div className="logo-slide">
          {technologiesLogo.map((logo, index) => {
            return (

              <img src={logo} alt="logo"  className="logos " style={{ borderRadius: 5 }} />
            )

          })}
        </div>


      </div>
    )
}