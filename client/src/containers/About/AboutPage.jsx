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
                        <div className="col-12 col-sm-6 p-2">
                            <p> {" "} My name is Jay Nghiem, and I specialize in full-stack web development. With a eye for aestheticism and a passion for solving real-world problems, I bring a unique blend of creativity and technical expertise to every project I undertake.{" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>
                        <div className="col-12 col-sm-6 bold  ">
                            <h5>  <span> <SubdirectoryArrowRightIcon/> </span> Services </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-2">
                            <p> {" "} Fullstack Web Development.  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>
                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Certification  </h5>
                        </div>
                        
                        <div className="col-12 col-sm-6 p-2">
                            <p> {" "} UC Berkely Extension Fullstack Web Development.  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> My Vision </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-2">
                            <p> {" "} My passion lies in using creative vision to drive product strategies, enhance user experience, and deliver exceptional design solutions that drive results.  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Values </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-2">
                            <p> {" "}
                                "As a member of the Army, I embody the seven core values: Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, and Personal Courage. Among these values, Personal Courage resonates deeply with me, as individuals who exhibit remarkable Personal Courage are often the ones who achieve extraordinary feats."  {" "}</p>
                        </div>
                        <div className="col-12 line-space"></div>

                        <div className="col-12 col-sm-6 bold  ">
                            <h5> <span> <SubdirectoryArrowRightIcon/> </span> Awards </h5>
                        </div>
                        <div className="col-12 col-sm-6 p-2">
                            <ul>
                                <li> Kuwait Soldier of the Month x2</li>
                                <li> Army Achievement Medal</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            {/* intro col */}

                
                {/* <div className="col-12 showcase animate__animated animate__bounceIn animate__delay-1s">
                    <div className="row ">
                        <div id='showcase1' className="col-4">
                            <div className="row">
                                <div className="col-5 text-end p-0">
                                    <CodeIcon style={{ fontSize: '5vw',maxHeight:'75px', color: 'var(--showcase-icon-color)' }}></CodeIcon>
                                </div>
                                <div className="col-7">
                                    <h3 className='custom-font'> 2000+ </h3><p className='sub'>
                                        Coding Hours
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div id='showcase2' className="col-4">
                            <div className="row">

                                <div className="col-5 text-end p-0">
                                    <ThumbUpOffAltIcon style={{ fontSize: '5vw',maxHeight:'75px', color: 'var(--showcase-icon-color)' }}></ThumbUpOffAltIcon>
                                </div>

                                <div className="col-7">
                                    <h3 className='custom-font'>
                                        100%
                                    </h3>
                                    <p className='sub'>  Job Success</p>
                                </div>
                            </div>

                        </div>
                        <div id='showcase3' className="col-4">
                            <div className="row">

                                <div className="col-5 text-end p-0">
                                    <ArrowForwardIosIcon  style={{ fontSize: '5vw', color: 'var(--showcase-icon-color)' , maxHeight:'75px'}}></ArrowForwardIosIcon >
                                </div>

                                <div className="col-7">
                                    <h3 className='custom-font'>
                                        10+
                                    </h3>
                                    <p className='sub'> Total Works</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                  showcase col */}

                <div className="col-12 pt-5">

                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>



              </div>   

            
            </div>
        </section>
    )
}