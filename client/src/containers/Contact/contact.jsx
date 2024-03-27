import React from "react";
import MessageForm from "../../components/contact/Form";
import image1 from "../../assets/images/website/contact-1.jpeg";
import image2 from "../../assets/images/website/contact-2.jpeg";
import image3 from "../../assets/images/website/contact-3.jpeg";
import image4 from "../../assets/images/website/contact-4.jpeg";

const imageList = [image1, image2, image3, image4];

import './style.css'


export default function ContactPage() {

let image = imageList[Math.floor(Math.random() * imageList.length)];

  

  

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