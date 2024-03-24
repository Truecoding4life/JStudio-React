import { Modal } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Auth from "../../ulti/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import Inbox from './Inbox'
import Badge from "@mui/material/Badge";
import { useState } from "react";

const LoginMenu = ({ close, open, handleOpen }) => {
  const [badge, setBadge] = useState(0);

  return (
    <div className="ms-auto" style={{paddingRight:10, marginTop:2}}>
      <IconButton
        size="xs"
        aria-label="account of current user"
        onClick={handleOpen}
        style={{ color: "#ebebebf1",paddingRight:20, paddingLeft:10 }}
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
      <LogoutIcon onClick={Auth.logout} id='log-out-button'   />
      <Inbox  open={open} close={close} set={setBadge}></Inbox>
    </div>
  );
};

export default LoginMenu;
