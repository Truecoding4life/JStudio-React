import React, { useState, useContext } from "react";
import { Input, FormControl, InputAdornment, FormHelperText, Typography, Box, TextField } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BusinessIcon from "@mui/icons-material/Business";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useTheme } from "@mui/material/styles";
import { resumeIcon, messageIcon, backIcon } from "../../ulti/icon";
import { ADD_MESSAGE } from "../../ulti/mutations";
import { useMutation } from "@apollo/client";
import resume from "../../assets/resume.pdf";
import Button from "@mui/material/Button";
import { Icon} from "../../ulti/icon";
import { UserContext } from '../../ulti/UserContext';


const inputStyle = {
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px ##000000e6 inset !important",
    backgroundColor: "#000000e6 !important",
    transition: "background-color 5000s ease-in-out 0s !important",
    color: "#f8f3f3e6 !important", // Add this line to prevent text color change

  },
};

const MessageForm = ({  setMessaging, openModal }) => {
  const {setAlert} = useContext(UserContext);

  const [ emailValid, setEmailNotValid] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [addMessage, { error }] = useMutation(ADD_MESSAGE);

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (emailValidation(formInfo.email)) {
        const { data } = await addMessage({
          variables: { ...formInfo, userId: "65bf4ca7da66cd1e791b259d" },
        });
        if(window.location.pathname==='/contact'){
        
        setMessaging(false);
        }
        else{
        openModal(false);
        }
        setAlert(true);

      } else {
        setEmailNotValid(true);
        return;
      }
    } catch (e) {
      console.log(e);
    }

    setFormInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className=" contact-container container">
        <div className="col-md-12 align-self-center chat-box ">
          <div className="row">
            <div className="col-12">
              <Typography
                className="reach-out gradient-text"
                variant="p"
                style={{
                  fontFamily: "Raleway",
                  
                }}
              >
                <i>{Icon} </i>
                Reach out for work
              </Typography>
            </div>
          </div>
          <div className="row row-cols-2 d-flex flex-row">
            <div className="col-lg-12 col-12 contact-form">
            <Box style={{ padding: "30px" }}>
                <TextField
                  name="name"
                  onChange={handleChange}
                  label="Name"
                  variant="standard"
                  fullWidth
                  required
                  focused
                  sx={
                    inputStyle
                  }
                  
                />
              </Box>

              <Box style={{ padding: "30px" }}>
                <TextField
                  name="email"
                  onChange={handleChange}
                  label="Email"
                  variant="standard"
                  fullWidth
                  required
                  focused
                  sx={
                    inputStyle
                  }
                  
                />
              </Box>

              <Box style={{ padding: "30px" }}>
                <TextField
                  name="message"
                  onChange={handleChange}
                  label="Type here"
                  variant="outlined"
                  fullWidth
                  required
                  focused
                  multiline
                  rows={4}
                  sx={
                    inputStyle
                  }  
                
                />
              </Box>

               

              <div className="row justify-content-around p-4">
                
                {window.location.pathname === '/contact' ? (
                <div className="col-12 p-2">
                  <Button
                    type="button"
                    onClick={() => setMessaging(false)}
                    className="btn delete-button"
                   
                  >
                    <i>{backIcon}</i> Go Back
                  </Button>
                </div>
) : null}

                
                <div className="col-12">
                  
                </div>
                <div className="col-12 p-2">
                  <Button
                    type="button"
                    onClick={handleFormSubmit}
                    
                    className="btn download-button"
                    
                  >
                    <i>{messageIcon}</i> Send Message
                  </Button>
                </div>

                <div className="col-12 p-2">
                  <a href={resume} download="Jay_Resume.pdf">
                    <Button
                      type="button"
                      href={resume}
                      className=" download-button"
                      
                    >
                      <i>{resumeIcon}</i> Download CV Resume
                    </Button>
                  </a>
                </div>
              </div>

              <div className="col-12 p-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
