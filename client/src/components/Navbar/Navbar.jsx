import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Auth from "../../ulti/auth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link as ScrollLink } from 'react-scroll';


import { useTheme } from "@mui/material/styles";
import PasswordBox from "./PasswordBox";

import LoginMenu from "./LoginMenu";

const expandIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="#04fab8f1"
    class="bi bi-caret-down-square"
    viewBox="0 0 16 16"
  >
    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
  </svg>
);

export default function NavbarLi() {
  const theme = useTheme();
  const mainTheme = theme.palette.primary.main;
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);
  const [open, setOpen] = useState(false);
  const [showPasswordBox, setShowPasswordBox] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenPasswordBox = () => {
    setShowPasswordBox(true);
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand
        href="/"
        className="navbar-brand"
        style={{ color: mainTheme }}
      >
        J Studio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
        {expandIcon}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="d-flex justify-content-between p-3">
          <Nav.Link
            style={{
              color: "#817e7e"
              
            }}
            hidden = { currentPage !== '/' ? true : false }
          as={ScrollLink}  
          to="portfolio-section" 
          smooth={true}
          offset={-70}
          duration={100}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            style={{
              color: currentPage === "/contact" ? "#04fab8f1" : "#817e7e",
            }}
            as={Link}
            to="/contact"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            style={{
              color: currentPage === "/about" ? "#04fab8f1" : "#817e7e",
            }}
            as={Link}
            to="/about"
          >
            About
          </Nav.Link>
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
                  size="xs"
                  aria-label="account of current user"
                  onClick={handleOpenPasswordBox}
                  style={{ color: "#ebebebf1" }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              )}
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
