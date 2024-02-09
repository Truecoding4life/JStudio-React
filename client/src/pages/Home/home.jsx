import logo from '../../assets/logo.png';
import resume from '../../assets/resume.pdf';
import {useTheme} from '@mui/material/styles'
import './style.css'


export default function HomePage() {
    
    const theme = useTheme();
    const textColor = theme.palette.primary.mainText
    const buttonTheme = theme.palette.primary.button
    const buttonBorderTheme = theme.palette.primary.buttonBorder
    return (

        <div className="container" >
            
            <div className="row">
                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="content-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <img
                            src={logo}
                            alt="logo"
                            id="homepage-logo"
                            width="60%"
                            
                        />
                    </div>
                </div>
            


                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="col-12 text-center">
                        <h1 id='welcome-hi' style={{color:textColor}}> Hi, it's Jay </h1>
                        <h3 className="welcome-quote-dev"> Fullstack Web Developer </h3>
                        <h3 id="welcome-quote" style={{color:textColor}} > and <span id='veteran'> Veteran</span>  </h3>
                        <a href={resume} download="Jay_Resume.pdf">
                           
                        <button type="button" style={{color: buttonTheme, borderColor: buttonBorderTheme}} href={resume}  className="btn download-button"> DOWNLOAD RESUME </button>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
}

