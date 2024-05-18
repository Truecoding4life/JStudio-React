import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Auth from "../../ulti/auth";
import { Link as ScrollLink } from 'react-scroll';
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from "@mui/material/styles";
import PasswordBox from "./PasswordBox";
import BlogContainer from "./Blog";
import LoginMenu from "./LoginMenu";
import DragHandleIcon from '@mui/icons-material/DragHandle';


const expandIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="#04fab8f1"
    className="bi bi-caret-down-square"
    viewBox="0 0 16 16"
  >
    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
  </svg>
);

export default function NavbarLi() {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);
  const [open, setOpen] = useState(false);
  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const [ showBlog, setShowBlog] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBlogOpen = () => {
    setShowBlog(true);
  }

  const handleBlogClose = ()=>{
    setShowBlog(false);
  }

  const handleOpenPasswordBox = () => {
    setShowPasswordBox(true);
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand
        href="/"
        className="navbar-brand nav-brand-color"
      >
        J Studio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">



        <DragHandleIcon fontSize="large" style={{ color: '#c7c4c4' }} />





      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="text-center">
        <Nav className="nav-link-section">
          <Nav.Link
            
            hidden = { currentPage !== '/' ? true : false }
          as={ScrollLink}  
          to="portfolio-section" 
          smooth={true}
          offset={-0}
          duration={100}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
         as={ScrollLink}  

         to="contact-section" 
         smooth={true}
         offset={-0}
         duration={100}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            
            as={ScrollLink}  
          to="info-section" 
          smooth={true}
          offset={-0}
          duration={100}
          >
            About
          </Nav.Link>
          <Nav.Link
            style={{ color: "#b5b4b4" }}
            onClick={handleBlogOpen}
           >
            
            Blog
          </Nav.Link>
          <BlogContainer open={showBlog} close={handleBlogClose}></BlogContainer>
          {Auth.loggedIn() ? (
            <LoginMenu
              open={open}
              handleOpen={handleOpen}
              close={handleClose}
            ></LoginMenu>
          ) : (
            <div >
              {showPasswordBox ? (
                <PasswordBox logIn={setShowPasswordBox}></PasswordBox>
              ) : (
                <IconButton
                  size="sm"
                  aria-label="account of current user"
                  onClick={handleOpenPasswordBox}
                 
                  style={{ color: "#b5b4b4", marginTop: "3px", }}
                >
                  <LockIcon />
                </IconButton>
              )}
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
