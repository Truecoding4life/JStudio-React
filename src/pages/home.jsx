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
                        <h4> Jay Studio aim to deliver</h4>
                        <p> Website for Personal or Business use </p>
                        <p> Modern and Minimal Design</p>
                        <p> Fast and Optimize Running Time </p>
                        <p> Secure User Information </p>
                   
                    </div>
                </div>



            </div>
        </div>
    );
}

