import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Auth from "../../ulti/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LoginMenu = ({ close, open, handleOpen }) => {
  return (
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
      <ExitToAppIcon onClick={Auth.logout} style={{ color: "#ebebebf1" }} />
      <Modal
        show={open}
        onHide={close}
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
  );
};

export default LoginMenu;
