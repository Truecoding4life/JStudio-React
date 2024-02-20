import { Modal } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Auth from "../../ulti/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Inbox from "./Inbox";
import Badge from "@mui/material/Badge";
import { useState } from "react";

const LoginMenu = ({ close, open, handleOpen }) => {
  const [badge, setBadge] = useState(0);

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
        <Badge
          color="primary"
          badgeContent={badge}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          size="small"
        >
          <MailIcon />
        </Badge>
      </IconButton>
      <ExitToAppIcon onClick={Auth.logout} style={{ color: "#ebebebf1" }} />
      <Inbox open={open} close={close} set={setBadge}></Inbox>
    </div>
  );
};

export default LoginMenu;
