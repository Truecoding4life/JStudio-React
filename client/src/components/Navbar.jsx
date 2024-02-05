import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Fade, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Auth from "../ulti/auth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Input from "@mui/material/Input";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../ulti/mutations";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyIcon from "@mui/icons-material/Key";
import InputAdornment from "@mui/material/InputAdornment";


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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    class="bi bi-filter-circle"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
  </svg>
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavbarLi() {
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

  const handleClosePasswordBox = () => {
    setShowPasswordBox(false);
  };
  const [inputValue, setInputValue] = useState("");

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    console.log("inputValue", inputValue);
    try {
      const { data } = await login({
        variables: { username: "admin", password: inputValue },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setInputValue(" ");
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand href="/" className="navbarbrand">
        J Studio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
        {expandIcon}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex justify-content-between p-3">
          <Nav.Link
            style={{
              color: currentPage === "/portfolio" ? "#04fab8f1" : "#817e7e",
            }}
            as={Link}
            to="/portfolio"
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
            <div className="ms-auto">
              <IconButton
                size="xs"
                aria-label="account of current user"
                onClick={handleOpen}
                style={{ color: "#ebebebf1" }}
                onKeyDown={(e) => {
                  console.log(e);
                }}
              >
                <AccountCircle />
              </IconButton>
              <ExitToAppIcon
                onClick={Auth.logout}
                style={{ color: "#ebebebf1" }}
              />
              <Modal
                show={open}
                onHide={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                top
              >
                <Modal.Header
                  style={{ backgroundColor: "rgb(9, 161, 110) " }}
                  closeButton
                >
                  <Modal.Title id="modal-title">Your Messages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Typography id="modal-description">
                    "You don't have any message"
                  </Typography>
                </Modal.Body>
              </Modal>
            </div>
          ) : (
            <div className="ms-auto">
              {showPasswordBox ? (
                <div>
                 
                  <Input
                    type="password"
                    startAdornment={
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    }
                    style={{
                      backgroundColor: "#04fab8f1",
                      borderRadius: "5px",
                      padding: "5px",
                      width: "69px",
                      height: "30px",
                      color: "#141517fc",
                      marginLeft: "20px",
                      fontFamily: "Roboto",
                    }}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleLogin();
                      }
                    }}
                    sx={{
                      "&:focus-within::before": {
                        transform: 0,
                      },
                    }}
                  />
                 
                      <IconButton
                        size="xs"
                        aria-label="account of current user"
                        onClick={handleClosePasswordBox}
                        style={{ color: "#04fab8f1" }}
                      >
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    
                </div>
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
