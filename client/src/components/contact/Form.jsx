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
import { Alert, AlertTitle } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import resume from "../../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";

const Icon = (
  <svg
    width="70px"
    height="70px"
    viewBox="0 0 1024.00 1024.00"
    class="icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#131111"
    stroke="#131111"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
        fill="#223258"
      ></path>
      <path
        d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
        fill="#223258"
      ></path>
      <path
        d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
        fill="#223258"
      ></path>
      <path
        d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
        fill="#14b897"
      ></path>
    </g>
  </svg>
);
const resumeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-file-pdf"
    viewBox="0 0 16 16"
  >
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
    <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.244.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 5.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
  </svg>
);
const messageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-cursor-fill"
    viewBox="0 0 16 16"
  >
    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
  </svg>
);
const backIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>
);

const MessageForm = ({ formInfo, setFormInfo, setAlert, setMessaging }) => {
  const theme = useTheme();
  const textColor = theme.palette.primary.mainText;
  const buttonTheme = theme.palette.primary.button;
  const buttonBorderTheme = theme.palette.primary.buttonBorder;
  const dangerButtonTheme = theme.palette.primary.buttonDanger;
  const dangerButtonBorder= theme.palette.primary.buttonDangerBorder;
 
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: [e.target.value] });
    client = formInfo.name;
  };

  const handleFormSubmit = (e) => {
    setAlert(true);
    setMessaging(false);
    e.preventDefault();
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
                fontFamily: "Contrail One",
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
                style={{
                  backgroundColor: "#7c9f90f1",
                  borderRadius: "5px",
                  padding: "10px",
                }}
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
                style={{
                  backgroundColor: "#7c9f90f1",
                  borderRadius: "5px",
                  padding: "10px",
                }}
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
                style={{
                  backgroundColor: "#7c9f90f1",
                  borderRadius: "5px",
                  padding: "10px",
                }}
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
