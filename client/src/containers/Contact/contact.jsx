import React, { useState } from "react";
import {  Button } from "@mui/material";
import MessageForm from "../../components/contact/Form";
import { useTheme } from "@mui/material/styles";
import { Icon, contactIcon, resumeIcon, messageIcon } from "../../ulti/icon";
import resume from "../../assets/resume.pdf";
import './style.css'

export default function ContactPage({setSuccessAlert}) {
  const [messaging, setMessaging] = useState(false);

  const theme = useTheme();
  const textColor = theme.palette.primary.mainText;
  const buttonTheme = theme.palette.primary.button;
  const buttonBorderTheme = theme.palette.primary.buttonBorder;

  const styles = {
    alert: {
      backgroundColor: "#04fab8f1",
    },
    reachOut: {
      fontFamily: "Raleway",
      color: textColor
    },
    button: {
      color: buttonTheme,
      borderColor: buttonBorderTheme,
    },
  };


  const showMessagingForm = () => <MessageForm  setMessaging={setMessaging} />;

  const showContactOptions = () => (
    <div className="col-lg-6 col-12 p-2">
      <div className="col p-2">
        <Button
          type="button"
          onClick={() => setMessaging(true)}
          className="btn download-button"
          
        >
          <i>{messageIcon}</i> Send Message
        </Button>
      </div>
      <div className="col p-2">
        <Button type="button" className="btn download-button">
          <i>{contactIcon}</i> Contact Info
        </Button>
      </div>
      <div className="col p-2">
          <Button type="button" href={resume}className="btn download-button" >
            <i>{resumeIcon}</i> Download CV Resume
          </Button>
        
      </div>
    </div>
  );

  return (
    <section>
      {messaging ? (
        showMessagingForm()
      ) : (
        <div className="pt-5 contact-container container height-100">
          <div className="col-md-12 align-self-center chat-box p-4">
            <div className="row">
              <div className="col-12">
                <p className="reach-out gradient-text" style={styles.reachOut}>
                  <i>{Icon}</i> Reach out for work
                </p>
              </div>
            </div>
            <div className="row row-cols-2 d-flex flex-row">{showContactOptions()}</div>
          </div>
        </div>
      )}
    </section>
  );
}