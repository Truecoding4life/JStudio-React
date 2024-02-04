import logo from '../assets/hello.png';
import resume from '../assets/resume.pdf';

export default function HomePage() {
    return (

        <div className="container">
            
            <div className="row">
                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="center">
                        <img
                            src={logo}
                            alt="logo"
                            id="homepage-logo"
                            width="100%"
                        />
                    </div>
                </div>


                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="col-12 text-center">
                        <h1 id='welcome-hi'> Hi, it's Jay </h1>
                        <h3 className="welcome-quote-dev"> Fullstack Web Developer </h3>
                        <h3 id="welcome-quote"> and <span id='veteran'> Veteran</span>  </h3>
                        <a href={resume} download="Jay_Resume.pdf">
                           
                        <button type="button" href={resume}  className="btn download-button"> DOWNLOAD RESUME </button>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
}

