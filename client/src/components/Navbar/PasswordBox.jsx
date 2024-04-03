import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Input from "@mui/material/Input";
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from "@mui/material/InputAdornment";
import { LOGIN_USER } from "../../ulti/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../ulti/auth";
import { useState, useEffect } from "react";
import KeyIcon from '@mui/icons-material/Key';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const PasswordBox = ({ logIn }) => {
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [inputValue, setInputValue] = useState("");

  const handleLogin = async () => {
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
    <div style={{marginTop: "0px"}}>
      <Input
        id='password-box'
        type="password"
        startAdornment={
          <InputAdornment position="start">
            <KeyIcon />
          </InputAdornment>
        }
        style={{
          backgroundColor: "#04fab8f1",
          borderRadius: "17px",
          padding: "2px 4px",
          width: "89px",
          height: "30px",
          color: "#141517fc",
          marginLeft: "10px",
          fontFamily: "Roboto",
          marginTop: "8px",
        }}
        disableUnderline 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
        sx={{
          "&:focus-within::before": {
            transform: 'none',
          },
        }}
      />

      <IconButton
        size="xs"
        aria-label="account of current user"
        onClick={() => logIn(false)}
        style={{ color: "#04fab8f1" }}
      >
         <LockOpenIcon />
      </IconButton>
    </div>
  );
};

export default PasswordBox;
