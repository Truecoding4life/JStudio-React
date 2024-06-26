import { OtherSkills } from "../../../ulti/seeds";
import { pageIcon } from "../../../ulti/icon";
import renderButtons from "../Components/Buttons";

export default function RenderSkill() {
  return (
    <div className="row align-self-center container-fluid other-skills">

      <div className="col-12  ">
        <h3 className="section-header  gradient-header-text">
          Other Skills
        </h3>
      </div>
      {OtherSkills.map((skill) => (
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
            <div className="row">
                {renderButtons(skill)}
            </div>
          

          </div>
        </div>
      ))}
      <br />
    </div>
  )
}



