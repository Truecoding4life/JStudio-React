import "./style.css";
import { Project, OtherSkills } from "../../ulti/seeds";

// Icon use for buttons
const Github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="currentColor"
    className="bi bi-github"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const PlayButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="currentColor"
    className="bi bi-play-fill"
    viewBox="0 0 16 16"
  >
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
  </svg>
);

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-star-fill"
    viewBox="0 0 16 16"
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);

const pageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-sticky"
    viewBox="0 0 16 16"
  >
    <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" />
  </svg>
);


const renderSkillCard = (skill) => (
  <div key={skill.name} className="col-12 col-md-12 col-lg-4 project-card d-flex">
    <div className="card flex-fill">
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

      <div className="col-12 d-flex justify-content-evenly p-2">
        <a
          href={skill.github}
          className="btn btn bg-primary  rounded-1 col-5"
        >
          {Github}
        </a>
        {skill.link ? (
          <a
            href={skill.link}
            className="btn btn-sm bg-success rounded-1 col-5"
          >
            {PlayButton}
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export default function WorkPage() {
  return (
    <>
      <div className="pt-5 project pb-5">
        <div className="container project-container">
          <div className="row ">
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row align-items-center">
                  <div className="col-12 mb-1">
                    <h2 className="section-header">Academic</h2>
                  </div>
                </div>
              </div>
            </div>
            {Project.map((project) => (
              <div
                key={project.title}
                className="col-12 col-md-6 project-card"
              >
                <div className="card ">
                  <div className="card-body">
                    <h4 className="card-title">
                      <span>
                        {" "}
                        <i> {starIcon}</i>
                      </span>{" "}
                      {project.title}
                    </h4>
                    <p className="card-text">{project.description}</p>
                  </div>

                  <div className="col-12 d-flex justify-content-evenly p-2">
                    <a
                      href={project.github}
                      className="btn btn bg-primary  rounded-1 col-5"
                    >
                      {Github}
                    </a>
                    {project.link ? (
                      <a
                        href={project.link}
                        className="btn btn-sm bg-success rounded-1 col-5"
                      >
                        {PlayButton}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row align-items-center">
                  <div className="col-12 mb-1">
                    <h2 className="section-header">Other skills</h2>
                  </div>
                </div>
                <div className="row">
                  {OtherSkills.map(renderSkillCard)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
