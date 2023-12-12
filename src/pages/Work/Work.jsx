import "./style.css";

const Github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="currentColor"
    class="bi bi-github"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const Play = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="currentColor"
    class="bi bi-play-fill"
    viewBox="0 0 16 16"
  >
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
  </svg>
);

import project1 from "../../assets/food-finder.gif";
import project2 from "../../assets/api-adventure.gif";
export default function WorkPage() {
  return (
    <>
      <div className=" pt-5 mt-1 project">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 align-self-center ">
              <div className="container text-center ">
                <div className="row align-items-center">
                  <div className=" col-12 mb-5">
                    <h2 className="section-header">Class Project</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className=" container-fluid col-12 d-md-inline-flex flex-lg-row justify-content-between ">
              <div className="card col-md-5 col-12 text-white mb-5">
                <div className="card-body">
                  <h4 className="card-title">Food Finder</h4>
                  <p className="card-text">
                    This project I focus on front end design, I was able to pull
                    off a beautiful website for users to find their next meal.
                  </p>
                  <h6 className="text-success">Click on image to go to page</h6>
                </div>

                <a href="https://fenriragni.github.io/food-finder/">
                  <img
                    src={project1}
                    className="card-img-top "
                    alt="project-1-image"
                  />
                </a>

                <div className="col-12 d-flex justify-content-evenly p-2">
                  <a
                    href="https://github.com/FenriRagni/food-finder"
                    className="btn btn bg-primary text-white rounded-1 col-5"
                  >
                    {Github}
                  </a>
                  <a
                    href="https://fenriragni.github.io/food-finder/"
                    className="btn btn-sm bg-success text-white rounded-1 col-5"
                  >
                    {Play}
                  </a>
                </div>
              </div>
              <div className="card col-md-5 col-12  text-white">
                <div className="card-body">
                  <h4 className="card-title">API Adventure</h4>
                  <p className="card-text">
                    This is a Fullstack project, my team was able to pull off an
                    amazing website for developers to find API sources for their
                    next project.
                  </p>
                  <h6 className="text-success">Click on image to go to page</h6>
                </div>

                <a href="https://api-adventure-project-8151c086edbf.herokuapp.com/">
                  <img
                    src={project2}
                    className="card-img-bottom"
                    alt="project 2"
                  />
                </a>
                <div className="col-12 d-flex justify-content-evenly p-2">
                  <a
                    href="https://github.com/Truecoding4life/api-adventures"
                    className="btn btn-sm bg-primary text-white rounded-1 col-5"
                  >
                    {Github}
                  </a>
                  <a
                    href="https://api-adventures-635e529205da.herokuapp.com/"
                    className="btn btn-sm bg-success text-white rounded-1 col-5"
                  >
                    {Play}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
