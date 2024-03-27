import React from 'react';
import myPhoto from "../../assets/images/website/about.jpg";
import CircleIcon from '@mui/icons-material/Circle';
import './style.css'



export default function AboutPage() {
    return (
        <section className="height-100 container">
            <div className="row">
                <div className="col-12">
                    <h1 className='header text-center'>About Jay</h1>
                </div>
                <div className="col-12  intro-bio">
                    <div className="row ">
                        <div className="col-3 bold text-center align-self-center">
                            <p> Vision </p>
                        </div>
                        <div className="col-9 p-2">
                            <p> {" "} I craft websites using cutting-edge technologies, striving for the most optimized solutions to deliver an exceptional user experience.  {" "}</p>
                        </div>
                        <div className="col-3 bold text-center align-self-center">
                            <p> Values </p>
                        </div>
                        <div className="col-9 p-2">
                            <p> {" "}
                                "As a member of the Army, I embody the seven core values: Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, and Personal Courage. Among these values, Integrity holds a special place for me because it serves as the cornerstone upon which all others are built. Integrity comes first, and everything else falls into place thereafter."  {" "}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 showcase">
                    <div className="row text-center ">
                        <div id='showcase1' className="col-4">
                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                   <h3 className='custom-font'> 2000+ </h3><p>
                                Coding Hours
                            </p> 
                                </div>
                            </div>
                            
                        </div>
                        <div id='showcase2' className="col-4">
                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
<h3 className='custom-font'>
                               100%
                            </h3>
                            <p>  Job Success</p>
                                </div>
                            </div>
                            
                        </div>
                        <div id='showcase3'className="col-4">
                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                <h3 className='custom-font'>
                                3
                            </h3>
                            <p> Projects</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}