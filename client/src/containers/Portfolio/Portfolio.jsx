import { Project, OtherSkills } from "../../ulti/seeds";
import { useTheme } from "@mui/material/styles";
import "./style.css";
import { Github, PlayButton, starIcon, pageIcon } from "../../ulti/icon";
import MoreDetail from "./MoreDetail";



export default function PortfolioPage() {
  const { palette } = useTheme();
  const { mainLight, projectButton: button } = palette.primary;

  const renderButtons = (item) => (
    <div className="col-12 d-flex justify-content-around ">
      <a
        href={item.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn github-btn col-6 m-1"
      >
        {Github} <span className="button-name col-6 m-1">GitHub</span>
      </a>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
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
      className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex  project-card"
    >
      <div className="card flex-grow-1 d-flex flex-column">
        {item.image && (
          <div className="card-image-container">
             <img
            className="card-img-top w-100 h-100 card-image "
            alt={item.title}
            src={item.image}
            key={item.title}
            style={{borderTopRightRadius:20, borderTopLeftRadius:20}}
          />
          </div>
         
        )}
        <div className="card-body">
          <h4 className=" project-title ">{item.title}</h4>
          <div className="tags">
            <div className="list-tag">
              {item.tags.map((tag) => (
                <p className="tag" key={tag}> {tag} </p>
              ))}
            </div>
            <div className="list-tag" >
              {item.tags.map((tag) => (
                <p className="tag" key={tag+"3"}> {tag} </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          {renderButtons(item)}
        </div>
        
        <MoreDetail description={item.description}></MoreDetail>
      </div>
    </div>
  );

  return (

    <div className=" project p-0">
      <div
        className=" project-container container-fluid "
        style={{ borderColor: mainLight }}
      >
        <div className="row p-0">
          <div className="col-12 mb-1 academic-box">
            <h2 className="section-header text-center gradient-header-text">
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
        <br></br>
        <div className="row align-self-center container-fluid other-skills">
          <div className="container ">
            <div className="row">
              <div className="col-12  ">
                <h3 className="section-header text-center  gradient-header-text">
                  Other Skills
                </h3>
              </div>
              {OtherSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="col-12 col-sm-6  col-md-6 col-lg-6 col-xl-3 d-flex project-card text-center "
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
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    

  );
}
