import React, { useState, useContext } from "react";
import {  Box, IconButton } from "@mui/material";
import { resumeIcon, messageIcon } from "../../ulti/icon";
import { ADD_MESSAGE } from "../../ulti/mutations";
import { useMutation } from "@apollo/client";
import resume from "../../assets/resume.pdf";
import Button from "@mui/material/Button";
import { Icon } from "../../ulti/icon";
import { UserContext } from "../../ulti/UserContext";
import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const MessageForm = ({ openModal }) => {
  const { SuccessAlert, FailAlert } = useContext(UserContext);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });


  if (emailNotValid) {
    FailAlert(true)
  }
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


        openModal(false);

        SuccessAlert(true);
      } else {
        setEmailNotValid(true);
        setTimeout(() => {
          setEmailNotValid(false);
        }, 1000);
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
    < div className="container ">
      <div className=" contact-container container">
        <div className='col-12 align-self-center chat-box m-auto '>
          <div className="row">
            <div className="col-12">
              <h1
                className="reach-out gradient-text"
                variant="p"
                style={{
                  fontFamily: "Raleway"
                }}
              >
                <i>{Icon} </i>
                Reach me for work
              </h1>
              <h2 className="reach-out-out-2">
                Looking for a Fullstack Developer? Want to start a project? or Just ask a question? Contact me!
              </h2>
            </div>
          </div>
          <div className="row row-cols-2 d-flex flex-row">
            <form className="col-lg-12 col-12 contact-form " >


              <Box style={{ padding: "0px" }}>

                <div className="row">
                  <div className="col-6">
                    <div >
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" required placeholder="Type your name" className="custom-input form-control" name="name" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-6">
                    <div >
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" required className="custom-input form-control" placeholder="Type your Email" name="email" onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-8  col-xl-9">
                    <div >
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea type="text" required rows={3} placeholder="Type Message" className="custom-input form-control" name="message" onChange={handleChange} ></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-xl-3 d-flex align-items-center  text-center">
                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      className="btn custom-input-button"
                    >
                      <i>{messageIcon}</i> Send
                    </button>
                  </div>
                </div>

              </Box>



              <div className="row justify-content-around p-1">

                <div className="col-12 p-2">
                  <Button

                    type="button"
                    onClick={() => window.open(resume, "jay_resume")}
                    className="btn download-button icon"
                    
                  >
                    {" "}
                    {resumeIcon}
                    DOWNLOAD MY RESUME{" "}
                  </Button>
                </div>
                <div className="col-12">
                  <IconButton
                      href="mailto:nghiemxthai@gmail.com"
                  >
                    <AlternateEmailIcon className="icon" />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open("https://github.com/truecoding4life")}
                  >
                    <GitHubIcon className="icon" />
                  </IconButton>
                  <IconButton
                    onClick={()=>{ window.open("https://www.linkedin.com/in/thai-nghiem-319292267/")}}
                  >
                    <LinkedInIcon className="icon" />
                  </IconButton>
                </div>
              
              </div>

            </form>
          </div>
        </div>
      </div>
    </ div>
  );
};

export default MessageForm;
