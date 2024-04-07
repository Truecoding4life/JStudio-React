import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import RenderProject from "./Project/ProjectCard";
import {  pageIcon } from "../../ulti/icon";
import renderButtons from "./Components/Buttons";
import RenderSkills from "./Skill/SkillCard";

export default function PortfolioPage() {
  const { palette } = useTheme();
  const { mainLight, projectButton: button } = palette.primary;

  return (
    <div className=" project p-0">
      <div
        className=" project-container container-fluid "
        style={{ borderColor: mainLight }}
      >
      
       <RenderProject></RenderProject>

        <RenderSkills></RenderSkills>



      </div>
    </div>
  );
}
