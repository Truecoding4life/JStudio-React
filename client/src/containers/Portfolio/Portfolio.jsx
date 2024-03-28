import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import { Github, PlayButton, starIcon, pageIcon } from "../../ulti/icon";
import MoreDetail from "./MoreDetail";



export default function PortfolioPage() {
  const { palette } = useTheme();
  const { mainLight, projectButton: button } = palette.primary;

  const renderButtons = (item) => (
    <div className="col-12 d-flex justify-content-evenly p-1">
      <a
        href={item.github}
        className="btn btn github-btn   col-6 m-1"

      >
        {Github} <span className="button-name">GitHub</span>
      </a>
      {item.link && (
        <a
          href={item.link}
          className="btn play-btn m-1  col-6"
        >
          {PlayButton} <span className="button-name">Website</span>
        </a>
      )}
    </div>
  );

  const renderCard = (item) => (
    <div
      key={item.title}
      className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 d-flex  project-card"
    >
      <div className="card flex-grow-1 d-flex flex-column">
        {item.image && (
          <img
            className="card-img-top w-100 h-100 card-image "
            alt={item.title}
            src={item.image}
            key={item.title}
            style={{borderTopRightRadius:20, borderTopLeftRadius:20}}
          />
        )}
        <div className="card-body">
          <h4 className="card-title fw-bolder project-title ">{item.title}</h4>
          <div>
            <ul className="list-tag" style={{ textDecorationStyle: "none" }}>
              {item.tags.map((tag) => (
                <li className="tag" key={tag}> {tag} </li>
              ))}
            </ul>
          </div>
        </div>
        {renderButtons(item)}
        <MoreDetail description={item.description}></MoreDetail>
      </div>
    </div>
  );

  return (

    <div className=" project p-3">
      <div
        className=" project-container container-fluid "
        style={{ borderColor: mainLight }}
      >
        <div className="row">
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
          <span className="space"></span>
        <div className="row align-self-center container-fluid other-skills">
          <div className="container ">
            <div className="row">
              <div className="col-12  ">
                <h3 className="section-header  gradient-header-text">
                  Other Skills
                </h3>
              </div>
              {OtherSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="col-12 col-md-6 col-lg-12 col-xl-4 d-flex project-card text-center "
                >
                  <div className="card flex-fill p-3">
                    <div className="card-body">
                      <h5 className="card-title skill-name p-2">
                        <span>
                          {" "}
                          <i> {pageIcon}</i>
                        </span>{" "}
                        {skill.name}
                      </h5>
                      <p className="card-text text-secondary">{skill.description}</p>
                    </div>
                    {renderButtons(skill)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
