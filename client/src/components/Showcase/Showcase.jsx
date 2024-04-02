
import './style.css'
import {showcaseData} from '../../ulti/seeds.js'


export default function ShowcaseBox (){
    return (
        <div className="col-12 showcase animate__animated animate__bounceIn animate__delay-0s">
        <div className="row ">
            {showcaseData.map((item, index)=>
            <div key={index} id={`showcase${index +1}`} className="col-4">
                <div className="row">
                    <div className="col-12 col-sm-5  showcase-icon">
                        <item.icon style={{ fontSize: '5vw',maxHeight:'75px', color: 'var(--showcase-icon-color)' }}></item.icon>
                    </div>
                    <div className="col-12 col-sm-7 showcase-text">
                        <h3 className='custom-font'> {item.text} </h3><p className='sub'>
                            {item.sub}
                        </p>
                    </div>
                </div>

            </div>

            )}
            
            {/* <div id='showcase2' className="col-4">
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

            </div> */}
        </div>
    </div>
    )
}