import React, { useState } from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import MessageForm from "../../components/contact/Form";
import { useTheme } from "@mui/material/styles";
import { Icon, contactIcon, resumeIcon, messageIcon } from "../../ulti/icon";
import resume from "../../assets/resume.pdf";

export default function ContactPage() {
  const [messaging, setMessaging] = useState(false);
  const [doAlert, setAlert] = useState(false);

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

  const showAlert = () => (
    <Alert
      icon={<CheckCircleOutlineIcon style={{ color: "black", marginTop: "6px", fontWeight: "bold" }} />}
      onClose={() => setAlert(false)}
      style={styles.alert}
    >
      <AlertTitle sx={{ fontWeight: "bold" }}>Success</AlertTitle>
      Your request was sent successfully
    </Alert>
  );

  const showMessagingForm = () => <MessageForm setAlert={setAlert} setMessaging={setMessaging} />;

  const showContactOptions = () => (
    <div className="col-lg-6 col-12 p-2">
      <div className="col p-2">
        <Button
          type="button"
          onClick={() => setMessaging(true)}
          className="btn download-button"
          style={styles.button}
        >
          <i>{messageIcon}</i> Send Message
        </Button>
      </div>
      <div className="col p-2">
        <Button type="button" className="btn download-button" style={styles.button}>
          <i>{contactIcon}</i> Contact Info
        </Button>
      </div>
      <div className="col p-2">
          <Button type="button" href={resume}className="btn download-button" style={styles.button}>
            <i>{resumeIcon}</i> Download CV Resume
          </Button>
        
      </div>
    </div>
  );

  return (
    <section>
      {doAlert && showAlert()}
      {messaging ? (
        showMessagingForm()
      ) : (
        <div className="pt-5 contact-container container">
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