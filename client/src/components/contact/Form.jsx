import React, { useState } from "react";
import {
  Input,
  FormControl,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BusinessIcon from "@mui/icons-material/Business";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";
import {Icon, resumeIcon, messageIcon, backIcon} from '../../ulti/icon'
import {ADD_MESSAGE} from '../../ulti/mutations'
import { useMutation } from "@apollo/client";

const inputStyle = {
  backgroundColor: "#7c9f90f1",
  borderRadius: "5px",
  padding: "10px",
  fontFamily: 'Josefin Sans',
  color: '#161717cd'
}


const MessageForm = ({ setAlert, setMessaging }) => {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText;
  const buttonTheme = theme.palette.primary.button;
  const buttonBorderTheme = theme.palette.primary.buttonBorder;
  const dangerButtonTheme = theme.palette.primary.buttonDanger;
  const dangerButtonBorder= theme.palette.primary.buttonDangerBorder;
 

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [addMessage, { error }] = useMutation(ADD_MESSAGE);


  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    client = formInfo.name;
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();
    try{
      const {data} = await addMessage({variables:
      {...formInfo,userId: '65bf4ca7da66cd1e791b259d'}})
        console.log(data)
    } catch (e) {console.log(e)}
    setAlert(true);
    setMessaging(false);
   
    setFormInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="pt-5 contact-container container">
      <div className="col-md-12 align-self-center chat-box p-4">
        <div className="row">
          <div className="col-12">
            <p
              className="reach-out"
              style={{
                fontFamily: "Righteous",
                fontSize: 30,
                color: "white",
              }}
            >
              <i> {Icon}</i> Reach out for work
            </p>
          </div>
        </div>
        <div className="row row-cols-2 d-flex flex-row">
          <div className="col-lg-6 col-12 p-2">
            <FormControl style={{ padding: "30px" }} className="col-12">
              <Input
                name="name"
                onChange={handleChange}
                placeholder="Name"
                variant="soft"
                
                required
                startAdornment={
                  <InputAdornment position="start">
                    <PermIdentityIcon />
                  </InputAdornment>
                }
                color="success"
                style={inputStyle}
              />
            </FormControl>

            <FormControl style={{ padding: "30px" }} className="col-12">
              <Input
                onChange={handleChange}
                name="email"
                placeholder="Email"
                variant="soft"
                color="success"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                }
                style={inputStyle}
              />
            </FormControl>

            <FormControl style={{ padding: "30px" }} className="col-12">
              <Input
                onChange={handleChange}
                name="message"
                placeholder="Write your message"
                variant="soft"
                color="success"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <FormatAlignJustifyIcon />
                  </InputAdornment>
                }
                style={inputStyle}
              />

              <FormHelperText style={{ color: "white" }}>
                {" "}
                How did you heard about me ?
              </FormHelperText>
            </FormControl>

            <div className="row justify-content-around p-4">
              <div className='col-12 p-2'>
                 <button
                type="button"
                onClick={()=>{setMessaging(false)}}
               
                className="btn delete-button"
                style={{ color: dangerButtonTheme, borderColor: dangerButtonBorder }}
              >
                {" "}
                <i>{backIcon} </i> Go Back  {" "}
              </button>
              </div>
              <div className='col-12 p-2'>
                 <button
                type="button"
                onClick={handleFormSubmit}
                onKeyDown={(e) => console.log(e.key)}
                className="btn download-button"
                style={{ color: buttonTheme, borderColor: buttonBorderTheme }}
              >
                {" "}
                <i>{messageIcon} </i> send message{" "}
              </button>
              </div>
              
             <div className='col-12 p-2'>
               <a href={resume} download="Jay_Resume.pdf">
                <button
                  type="button"
                  href={resume}
                  className="btn download-button"
                  style={{ color: buttonTheme, borderColor: buttonBorderTheme }}
                >
                  {" "}
                  <i> {resumeIcon}</i> Download CV Resume{" "}
                </button>
              </a> 
              </div>
              
            </div>

            <div className="col-12 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
