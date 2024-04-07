import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Auth from "../../ulti/auth";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Inbox from './Inbox'
import Badge from "@mui/material/Badge";
import { ALL_MESSAGE } from "../../ulti/queries";
import { useQuery } from "@apollo/client";

const LoginMenu = ({ close, open, handleOpen }) => {
  const { data } = useQuery(ALL_MESSAGE, {
    variables: {
      username: "admin",
    },
  });
  let messages = [];

  if (data) {
    messages = data?.user?.messages;
    
  }
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
          badgeContent={messages.length}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          size="small"
        >
          <MailIcon />
        </Badge>
      </IconButton>
      <LockOpenIcon onClick={Auth.logout} id='log-out-button'   />
      <Inbox  open={open} close={close} ></Inbox>
    </div>
  );
};

export default LoginMenu;
