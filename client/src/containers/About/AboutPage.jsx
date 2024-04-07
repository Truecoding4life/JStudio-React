import React from 'react';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import './style.css'

export default function AboutPage() {
    return (
        <section className="height-100  container-fluid animate__animated animate__fadeIn info-container">
          
                <div className="row">
                    <div className="col-12  intro-bio">
                        <div className="row ">
                            <div className="col-12">
                                <h1 className='header'>Info</h1>
                            </div>
                            <div className="col-12 line-space p-1"></div>
                            <div className="col-12 col-sm-4 bold  ">
                                <h5 className='info-bold'>  <span> <SubdirectoryArrowRightIcon /> </span> Overview </h5>
                            </div>
                            <div className="col-12 col-sm-8 info-description">
                                <p> {" "} My name is Jay Nghiem, and I am a full-stack web developer with an eye for aestheticism and a passion for solving real-world problems, I bring a unique blend of creativity and technical expertise to every project I undertake.{" "}</p>
                            </div>

                            <div className="col-12 line-space "></div>
                            <div className="col-12 col-sm-4 bold  ">
                                <h5 className='info-bold'> <span> <SubdirectoryArrowRightIcon /> </span> Certification  </h5>
                            </div>

                            <div className="col-12 col-sm-8 info-description">
                                <p> {" "} UC Berkely Extension Fullstack Web Development.  {" "}</p>
                            </div>
                            <div className="col-12 line-space "></div>





                            <div className="col-12 col-sm-4 bold  ">
                                <h5 className='info-bold'> <span> <SubdirectoryArrowRightIcon /> </span> Awards </h5>
                            </div>
                            <div className="col-12 col-sm-8 info-description">
                                <ul>
                                    <li> Kuwait Soldier of the Month x2</li>
                                    <li> Army Achievement Medal</li>
                                </ul>
                            </div>

                            <div className="col-12 line-space"></div>

                            <div className="col-12 col-sm-4 bold  ">
                                <h5 className='info-bold'> <span> <SubdirectoryArrowRightIcon /> </span> My Goal </h5>
                            </div>
                            <div className="col-12 col-sm-8 info-description">
                                <p> {" "} "I'm eager to make a positive impact on the world and strive to leave a lasting legacy of meaningful change. With a fervent desire to innovate and a relentless pursuit of excellence, I aim to transform challenges into opportunities and make a difference that resonates far and wide "{" "}</p>
                            </div>

                            <div className="col-12 line-space"></div>

                        </div>
                    </div>
                </div>
            
        </section>
    )
}