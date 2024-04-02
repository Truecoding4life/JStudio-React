import CodeIcon from '@mui/icons-material/Code';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'
export default function ShowcaseBox (){
    return (
        <div className="col-12 showcase animate__animated animate__bounceIn animate__delay-4s">
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
    )
}