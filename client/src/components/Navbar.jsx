import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {useState, useEffect} from 'react';

const contact = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    fill="currentColor"
    class="bi bi-person-vcard"
    viewBox="0 0 16 16"
  >
    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12z" />
  </svg>
);

const expandIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#04fab8f1" class="bi bi-caret-down-square" viewBox="0 0 16 16">
  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
);

const resume = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-file-text"
    viewBox="0 0 16 16"
  >
    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
  </svg>
);

const portfolio = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
</svg>
);

export default function NavbarLi() {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);


  return (
    
    <Navbar expand="md">
      <Navbar.Brand href="/" className='navbarbrand'>
       
          J Studio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
  {expandIcon}
</Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="d-flex justify-content-between p-3">
      <Nav.Link  style={{ color: currentPage === '/portfolio' ? '#04fab8f1' : '#817e7e' }} as={Link} to="/portfolio" >
        Portfolio
      </Nav.Link>
      <Nav.Link style={{ color: currentPage === '/contact' ? '#04fab8f1' : '#817e7e' }} as={Link} to="/contact">
        Contact
      </Nav.Link>
      <Nav.Link style={{ color: currentPage === '/about' ? '#04fab8f1' : '#817e7e' }} as={Link} to="/about">
        About
      </Nav.Link>
    </Nav>
       
      </Navbar.Collapse>
    </Navbar>
   
  );
};

const handlePageChange = (page) => { setCurrentPage(page) };

// const MyNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/">
//         <image> <img src={image} alt="logo" width="50px" /></image>
//           J Studio
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="/work"> {portfolio} Portfolio </NavDropdown.Item>
//             <NavDropdown.Item href="/contact">{contact} Contact</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="/resume">{resume} Resume</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };