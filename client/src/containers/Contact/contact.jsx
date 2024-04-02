import React from "react";
import MessageForm from "../../components/contact/Form";
import image1 from "../../assets/images/website/contact/photo-1.jpeg";
import image2 from "../../assets/images/website/contact/photo-2.jpeg";

const imageList = [ image1];

import './style.css'


export default function ContactPage() {

let image = imageList[Math.floor(Math.random() * imageList.length)];

  

  

  return (
    <section className="contact-content  animate__animated animate__fadeIn height-100 p-0" >
      <div className="row">
        <div className=" col-lg-7 p-0 m-0" style={{overflow:'hidden'}}>
          <img src={image} alt="beautiful lighting" id="contact-page-photo" />
        </div>
        <div className="col-md-12 col-lg-5 contact-box ">
      <MessageForm   />

        </div>
      </div>
    </section>
  );
}