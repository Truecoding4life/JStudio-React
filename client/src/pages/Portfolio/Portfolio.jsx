import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import {Github, PlayButton, starIcon, pageIcon} from '../../ulti/icon';
// Icon use for buttons


export default function PortfolioPage() {
  const theme = useTheme();
  const mainLight = theme.palette.primary.mainLight;
  const button = theme.palette.primary.projectButton;
  return (
    <>
      <div className="pt-5 project pb-5 p-3">
        <div
          className="container project-container"
          style={{ borderColor: mainLight }}
        >
          <div className="row ">
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row align-items-center">
                  <div className="col-12 mb-1">
                    <h2
                      className="section-header fw-bolder"
                      style={{ backgroundColor: mainLight }}
                    >
                      Academic
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {Project.map((project) => (
              <div
                key={project.title}
                className="col-12 col-md-6 project-card p-2"
              >
                <div className="card " style={{ backgroundColor: mainLight }}>
                  <div className="card-body">
                    <h4 className="card-title fw-bolder">
                      <span>
                        {" "}
                        <i> {starIcon}</i>
                      </span>{" "}
                      {project.title}
                    </h4>
                    <p className="card-text">{project.description}</p>
                  </div>

                  {project.link ? (
                    <div className="col-12 d-flex justify-content-evenly p-2">
                      <a
                        href={project.github}
                        className="btn btn rounded-1 col-6 m-1 github-btn "
                        style={{backgroundColor:button}}
                      >
                        {Github}
                      </a>
                      <a
                        href={project.link}
                        className="btn btn-sm play-btn rounded-1 col-6 m-1"
                        style={{backgroundColor:button}}
                      >
                        {PlayButton}
                      </a>
                    </div>
                  ) : (
                    <div className="col-12 d-flex justify-content-evenly p-2">
                      <a
                        href={project.github}
                        className="btn btn rounded-1 col-12 github-btn"
                        style={{backgroundColor:button}}
                      >
                        {Github}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row align-items-center">
                  <div className="col-12 mb-1">
                    <h2
                      className="section-header fw-bolder"
                      style={{ backgroundColor: mainLight }}
                    >
                      Other skills
                    </h2>
                  </div>
                </div>
                <div className="row">
                  {OtherSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="col-12 col-md-12 col-lg-4 project-card d-flex"
                    >
                      <div
                        className="card flex-fill"
                        style={{ backgroundColor: mainLight }}
                      >
                        <div className="card-body">
                          <h4 className="card-title">
                            <span>
                              {" "}
                              <i> {pageIcon}</i>
                            </span>{" "}
                            {skill.name}
                          </h4>
                          <p className="card-text">{skill.description}</p>
                        </div>

                        {skill.link ? (
                          <div className="col-12 d-flex justify-content-evenly p-2">
                            <a
                              href={skill.github}
                              className="btn btn github-btn  rounded-1  col-6 m-1"
                              style={{backgroundColor:button}}
                            >
                              {Github}
                            </a>
                            <a
                              href={skill.link}
                              className="btn btn-sm play-btn rounded-1  col-6 m-1"
                              style={{backgroundColor:button}}
                            >
                              {PlayButton}
                            </a>
                          </div>
                        ) : (
                          <div className="col-12 d-flex justify-content-evenly p-2">
                            <a
                              href={skill.github}
                              className="btn btn github-btn  rounded-1 col-12"
                              style={{backgroundColor:button}}
                            >
                              {Github}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
