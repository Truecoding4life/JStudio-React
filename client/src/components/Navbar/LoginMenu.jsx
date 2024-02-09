import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Auth from "../../ulti/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Inbox from './Inbox';


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
      <Inbox open={open} close={close} ></Inbox>
    </div>
  );
};

export default LoginMenu;
