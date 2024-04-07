import { Github, PlayButton } from "../../../ulti/icon";
import './style.css'


const renderButtons = (item) => (
  <div className="col-12  ">
    {item.link ? (
      <div className="row d-flex justify-content-evenly gap-1">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"

          className="btn btn github-btn col-5 "
        >
          <i>
            {Github}
          </i>
          GitHub
        </a>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn play-btn  col-5 "
        >
          <i>
            {PlayButton}
          </i>
          Website
        </a>


      </div>
    ) : (
      <div className="row d-flex justify-content-evenly">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"

          className="btn btn github-btn col-11 mx-1"
        >
          {Github} <span className="button-name ">GitHub</span>
        </a>
      </div>
    )}

  </div>
);

export default renderButtons