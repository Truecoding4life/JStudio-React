import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Input from "@mui/material/Input";
import KeyIcon from "@mui/icons-material/Key";
import InputAdornment from "@mui/material/InputAdornment";
import { LOGIN_USER } from "../../ulti/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../ulti/auth";
import { useState, useEffect } from "react";

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
        onClick={() => logIn(false)}
        style={{ color: "#04fab8f1" }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default PasswordBox;
