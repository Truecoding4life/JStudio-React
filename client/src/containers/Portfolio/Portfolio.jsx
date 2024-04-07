import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import renderCard from "./ProjectCard";
import {  pageIcon } from "../../ulti/icon";
import renderButtons from "./Buttons";
import renderSkills from "./SkillCard";

export default function PortfolioPage() {
  const { palette } = useTheme();
  const { mainLight, projectButton: button } = palette.primary;

  return (
    <div className=" project p-0">
      <div
        className=" project-container container-fluid "
        style={{ borderColor: mainLight }}
      >
        <div className="row p-0">
          <div className="col-12 mb-1 academic-box">
            <h2 className="section-header gradient-header-text">
              Academic Projects

            </h2>
          </div>
          <div className="col-md-12 align-self-center ">
            <div className="container-fluid">
              <div className="row  ">
              </div>
            </div>
          </div>
        </div>
        <div className="row ">


          {Project.map((project) => renderCard(project))}
        </div>


        
        <div className="row align-self-center container-fluid other-skills">



        

        {renderSkills(OtherSkills)}




        </div>
      </div>
    </div>
  );
}
