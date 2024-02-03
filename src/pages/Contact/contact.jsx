// ContactPage.js
import React from "react";
import "./style.css";
import { Button } from "@mui/material";

export default function ContactPage() {
  return (
    <div className="pt-5 contact-container container">
      <div className="col-md-12 align-self-center chat-box p-4">
        <div className="row">
          <div className="col-12">
            
              <h1 className="contact">Contact Me</h1>
              <p className="contact">
                Feel like I am a good fit for your next project?
              </p>
            
          </div>
        </div>
        <div className="row d-flex flex-row">
          <div className="col-lg-6 col-12 p-2">
            <div className="col-12">
              <Button variant="outlined" size="large" className="custom-button">
              Send Message
            </Button> 
            </div>
           <div className="col-12">
            <Button variant="outlined" size="large" className="custom-button">
              Check Response
            </Button>
           </div>
           <div className="col-12">
            <Button variant="outlined" size="large" className="custom-button">
              Contact Info
            </Button>
           </div>
           <div className="col-12">
           <Button variant="outlined" size="medium" className="custom-button">
              Download Resume
            </Button>
           </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
