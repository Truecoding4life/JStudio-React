// ContactPage.js
import React from "react";
import resume from "../../assets/resume.pdf";
import { useState } from "react";
import { Alert, FormHelperText, Input } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import AlertTitle from '@mui/material/AlertTitle';
import MessageForm from '../../components/contact/Form'
import {useTheme} from '@mui/material/styles'


    
    

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

const contactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-person-lines-fill"
    viewBox="0 0 16 16"
  >
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
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
let client;
export default function ContactPage() {
  const [Messaging, setMessaging] = useState(false);
  const [doAlert, setAlert] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });


  const theme = useTheme();
  const textColor = theme.palette.primary.mainText
  const buttonTheme = theme.palette.primary.button
  const buttonBorderTheme = theme.palette.primary.buttonBorder

 
  


  return (
    <div>
    { doAlert ?
      <Alert icon={<CheckCircleOutlineIcon  style={{color: "black", marginTop:"6px", fontWeight: 'bold'}} />} onClose={()=>{setAlert(false)}}  style={{backgroundColor: "#04fab8f1"}}>
       <AlertTitle sx={{ fontWeight: 'bold' }}>Success</AlertTitle>
      Hola {client}, your request was sent successful
    </Alert> : null}
      {Messaging ? (
        <MessageForm setFormInfo={setFormInfo} setAlert={setAlert} setMessaging={setMessaging} formInfo={formInfo}>

        </MessageForm>
      ) : (
        <div className="pt-5 contact-container container">
          <div className="col-md-12 align-self-center chat-box p-4" >
            <div className="row">
              <div className="col-12">
                <p
                  className="reach-out"
                  style={{
                    fontFamily: "Contrail One",
                    fontSize: 30,
                    color: textColor,
                  }}
                >
                  <i> {Icon}</i> Reach out for work
                </p>
              </div>
            </div>
            <div className="row row-cols-2 d-flex flex-row">
              <div className="col-lg-6 col-12 p-2">
                <div className="col p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMessaging(true);
                    }}
                    className="btn download-button"
                    style={{color: buttonTheme, borderColor: buttonBorderTheme}}
                  >
                    {" "}
                    <i>{messageIcon} </i> send message{" "}
                  </button>
                </div>
                <div className="col p-2">
                  <button type="button" className="btn download-button" style={{color: buttonTheme, borderColor: buttonBorderTheme}}> 
                    {" "}
                    <i> {contactIcon}</i> Contact info{" "}
                  </button>
                </div>
                <div className="col p-2">
                  <a href={resume} download="Jay_Resume.pdf">
                    <button
                      type="button"
                      href={resume}
                      className="btn download-button"
                      style={{color: buttonTheme, borderColor: buttonBorderTheme}}
                    >
                      {" "}
                      <i> {resumeIcon}</i> Download CV Resume{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
