export default function ResumePage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-10 col-md-6 col-lg-4 mt-5">
          <h1> Resume </h1>
          <h4> Computer Science Skills</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Pseudocode</li>
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">Java Script and React</li>
            <li className="list-group-item">MongoDb and IndexDB</li>
          </ul>
          <a
            href="https://docs.google.com/document/d/1nRdWUr0BJAV-i-XUV5W1z-jJe613ZwSLYrtNlvE0BuY/edit?usp=sharing"
            className="btn bg-primary mt-3 text-white"
          >
            {" "}
            Download my resume
          </a>
        </div>
      </div>
    </div>
  );
}
