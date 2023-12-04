export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">J Studio</a>
        
                <div className="navbar " id="navbarNav">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
