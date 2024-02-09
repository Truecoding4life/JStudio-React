// ContactPage.js
import React from "react";
import resume from "../../assets/resume.pdf";
import { useState } from "react";
import { Alert, FormHelperText, Input } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import AlertTitle from '@mui/material/AlertTitle';
import MessageForm from '../../components/contact/Form'
import {useTheme} from '@mui/material/styles'
import {Icon, contactIcon, resumeIcon, messageIcon} from '../../ulti/icon'


export default function ContactPage() {
  const [Messaging, setMessaging] = useState(false);
  const [doAlert, setAlert] = useState(false)
  


  const theme = useTheme();
  const textColor = theme.palette.primary.mainText
  const buttonTheme = theme.palette.primary.button
  const buttonBorderTheme = theme.palette.primary.buttonBorder


  return (
    <div>
    { doAlert ?
      <Alert icon={<CheckCircleOutlineIcon  style={{color: "black", marginTop:"6px", fontWeight: 'bold'}} />} onClose={()=>{setAlert(false)}}  style={{backgroundColor: "#04fab8f1"}}>
       <AlertTitle sx={{ fontWeight: 'bold' }}>Success</AlertTitle>
      Your request was sent successful
    </Alert> : null}
      {Messaging ? (
        <MessageForm  setAlert={setAlert} setMessaging={setMessaging} >

        </MessageForm>
      ) : (
        <div className="pt-5 contact-container container">
          <div className="col-md-12 align-self-center chat-box p-4" style={{borderColor: buttonBorderTheme}} >
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
