import logo from '../assets/logo.png';

export default function HomePage() {
    return (

        <div className="container">

            <div className="row">
                <div className="col-12 col-md-6 align-self-center home-header">
                    <image className="center">
                        <img
                            src={logo}
                            alt="logo"
                            id="homepage-logo"
                            width="100%"
                        />
                    </image>
                </div>


                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="col-12 text-center">
                        <h1 id='welcome-hi'> Hi, it's Jay </h1>
                        <h2 id="welcome-quote"> I am a </h2>
                        <h3 id="welcome-quote-dev"> Fullstack Web Developer </h3>
                        <h3 id="welcome-quote-vet"> and a <span id='veteran'> Veteran</span>  </h3>
                        <button type="button" class="btn download-button"> DOWNLOAD RESUME </button>
                    </div>
                </div>



            </div>
        </div>
    );
}

