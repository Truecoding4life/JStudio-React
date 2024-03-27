import React from "react";
import MessageForm from "../../components/contact/Form";
import image from "../../assets/images/website/contact-6.jpeg";
import './style.css'

export default function ContactPage() {



  

  

  return (
    <section className="contact-content  animate__animated animate__fadeIn animate__slower">
      <div className="row">
        <div className="col-5 col-lg-7" style={{overflow:'hidden'}}>
          <img src={image} alt="beautiful lighting" id="contact-page-photo" />
        </div>
        <div className="col-md-12 col-lg-5 contact-box ">
      <MessageForm   />

        </div>
      </div>
    </section>
  );
}