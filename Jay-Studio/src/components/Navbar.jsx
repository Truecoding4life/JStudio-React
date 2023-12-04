export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          J Studio
        </a>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/work">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
