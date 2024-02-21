import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import { Github, PlayButton, starIcon, pageIcon } from "../../ulti/icon";
import MoreDetail from "./MoreDetail";

// Icon use for buttons

export default function PortfolioPage() {
  const theme = useTheme();
  const mainLight = theme.palette.primary.mainLight;
  const button = theme.palette.primary.projectButton;
  return (
    <>
      <div className="pt-5 project pb-5 p-3 container-fluid">
        <div className=" project-container" style={{ borderColor: mainLight }}>
          <div className="row ">
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row ">
                  <div className="col-12 mb-1">
                    <h2 className="section-header fw-bolder">Academic</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {Project.map((project) => (
                <div
                  key={project.title}
                  className="col-12 col-sm-12 col-md-6 col-lg-4  project-card d-flex mx-auto"
                >
                  <div className="card p-3 d-flex ">
                    {project.image ? (
                      <img
                        class="card-img-top"
                        src={project.image}
                        alt="Food Finder"
                      />
                    ) : null}

                    <h4 className="card-title fw-bolder p-3">
                      <span>
                        {" "}
                        <i> {starIcon}</i>
                      </span>{" "}
                      {project.title}
                    </h4>

                    {project.link ? (
                      <div className="col-12 d-flex justify-content-evenly p-2">
                        <a
                          href={project.github}
                          className="btn btn rounded-4 col-6 m-2 p-2 github-btn "
                          style={{ backgroundColor: button }}
                        >
                          {Github} GitHub
                        </a>
                        <a
                          href={project.link}
                          className="btn  play-btn rounded-4 p-2 col-6 m-2"
                          style={{ backgroundColor: button }}
                        >
                          {PlayButton} Website
                        </a>
                      </div>
                    ) : (
                      <div className="col-12 d-flex justify-content-evenly p-2">
                        <a
                          href={project.github}
                          className="btn btn rounded-4 col-12 p-2 github-btn"
                          style={{ backgroundColor: button }}
                        >
                          {Github} GitHub
                        </a>
                      </div>
                    )}
                    <MoreDetail description={project.description}></MoreDetail>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row ">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-3 project-card align-items-center d-flex">
                    <div className="card flex-fill ">
                      <div className="card-body">
                        <h5 className="card-title other-project">OTHER PROJECT </h5>
                      </div>
                    </div>
                  </div>
                  {OtherSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="col-12 col-md-6 col-lg-6 col-xl-3  project-card d-flex"
                    >
                      <div className="card flex-fill p-3">
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
                              className="btn btn github-btn  rounded-4 p-2  col-6 m-1"
                              style={{ backgroundColor: button }}
                            >
                              {Github} GitHub
                            </a>
                            <a
                              href={skill.link}
                              className="btn btn-sm play-btn rounded-4 p-2  col-6 m-1"
                              style={{ backgroundColor: button }}
                            >
                              {PlayButton} Website
                            </a>
                          </div>
                        ) : (
                          <div className="col-12 d-flex justify-content-evenly p-2">
                            <a
                              href={skill.github}
                              className="btn btn github-btn  rounded-4 p-2 col-12"
                              style={{ backgroundColor: button }}
                            >
                              {Github} GitHub
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
