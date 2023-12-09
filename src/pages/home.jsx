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
                        />
                    </image>
                </div>


                <div className="col-12 col-md-6 align-self-center home-header">
                    <div className="col-12 text-center">
                        <h1 id="welcome-quote"> Build your website everyday better</h1>
                        <h4> Turn your idea into reality</h4>
                        <p> We design website for business and personal </p>
                        <p> We Focus on Modern and Minimal Design</p>
                        <p> Fast and Optimize Running Time </p>

                   
                    </div>
                </div>



            </div>
        </div>
    );
}

