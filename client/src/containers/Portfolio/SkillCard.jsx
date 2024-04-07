import {  pageIcon } from "../../ulti/icon";
import renderButtons from "./Buttons";

const renderSkills = (item) => (
<div className="container ">
<div className="row">
  <div className="col-12  ">
    <h3 className="section-header  gradient-header-text">
      Other Skills
    </h3>
  </div>
  {item.map((skill) => (
    <div
      key={skill.name}
      className="col-12 col-sm-6  col-md-6 col-lg-6 col-xl-3 d-flex project-card text-center "
    >
      <div className="card flex-fil p-3 w-100">
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
)


export default renderSkills;

