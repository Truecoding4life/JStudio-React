import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          J Studio
        </Link>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/work">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
