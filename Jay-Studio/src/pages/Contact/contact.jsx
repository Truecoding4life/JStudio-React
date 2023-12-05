export default function ContactPage() {
    return (
        <div className="container ">
            <div className="row mt-5">
                <div className="col-md-6 contact-box">
                    <form>
                        <h1 className="mb-5"> Send me a message</h1> 
                        <label >Name</label>
                        <input type="text" className="form-control mb-4" aria-label="Small" aria-describedby="inputGroup-sizing" />
                        <label >Email</label>
                        <input type="email" className="form-control mb-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />


                       

                            <textarea className="form-control" aria-label="With textarea" id='text' placeholder="Send Message"></textarea>
                      
                        <button type="submit" className="btn btn-primary mt-3 col-12"> Send Message</button>
                       
                    </form>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    );
}
