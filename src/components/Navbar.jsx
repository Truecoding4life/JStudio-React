export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid ">
        <a className="navbar-brand " href="/">
          J Studio
        </a>
        <ul className="nav justify-content-center">

          <li className="nav-item">
            <a className="nav-link" href="/work">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/resume">
              Resume
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
