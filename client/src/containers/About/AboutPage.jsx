import React from 'react';
import myPhoto from "../../assets/images/website/other/profile.jpg";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import './style.css'
import CodeIcon from '@mui/icons-material/Code';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function AboutPage() {
    return (
        <section className="height-100 container-fluid animate__animated animate__fadeIn">
            {/* <h2 style={{backgroundColor:'white', width:'100%'}}> hey </h2> */}
            <div className="container-fluid">


                <div className="row">

               

                <div className="col-12  intro-bio">
                    <div className="row ">
                        <div className="col-12">
                            <h1 className='header'>Info</h1>
                        </div>
                        <div className="col-12 line-space"></div>
                        <div className="col-12 col-sm-6 bold  ">
                            <h5>  <span> <SubdirectoryArrowRightIcon/> </span> Overview </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <p> {" "} My name is Jay Nghiem, and I am a full-stack web developer with an eye for aestheticism and a passion for solving real-world problems, I bring a unique blend of creativity and technical expertise to every project I undertake.{" "}</p>
                        </div>
                       
                        <div className="col-12 line-space"></div>
                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Certification  </h5>
                        </div>
                        
                        <div className="col-12 col-sm-6 p-1">
                            <p> {" "} UC Berkely Extension Fullstack Web Development.  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> My Vision </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <p> {" "} "I'm committed to make a positive impact on the world and strive to leave a lasting legacy of meaningful change. With a fervent desire to innovate and a relentless pursuit of excellence, I aim to transform challenges into opportunities and make a difference that resonates far and wide "{" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Values </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <p> {" "}
                                "As a member of the Army, I embody the seven core values: Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, and Personal Courage. Among these values, Personal Courage resonates deeply with me, as individuals who exhibit remarkable Personal Courage are often the ones who achieve extraordinary feats."  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Awards </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <ul>
                                <li> Kuwait Soldier of the Month x2</li>
                                <li> Army Achievement Medal</li>
                            </ul>
                        </div>
                    </div>
                </div> 
        




              </div>   

            
            </div>
        </section>
    )
}