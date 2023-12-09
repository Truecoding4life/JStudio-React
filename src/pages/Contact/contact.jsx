export default function ContactPage() {
    return (
        <div className="container ">
            <div className="row mt-5 justify-content-center">
                <div className="col-8 col-md-6 col-lg-4 contact-box mt-5">
                    <form>
                        <h1 className="mb-5"> Send me a message</h1> 
                        <label >Name</label>
                        <input type="text" className="form-control mb-4" placeholder="Your Name" aria-label="Small" aria-describedby="inputGroup-sizing" />
                        <label >Email</label>
                        <input type="email" className="form-control mb-4" aria-label="Small" placeholder="Email Address" aria-describedby="inputGroup-sizing-sm" />


                       

                            <textarea className="form-control" aria-label="With textarea" id='text' placeholder="Send Message"></textarea>
                      
                        <button type="submit" className="btn btn-primary mt-3 col-12"> Send Message</button>
                       
                    </form>
                </div>
            </div>
        </div>
    );
}
