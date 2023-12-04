export default function ContactPage() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 ">
                    <form>
                        <h1> Send me a message</h1>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="name">Name</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />

                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="email">Email</span>
                            </div>
                            <input type="email" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />

                        </div>
                        <div className="input-group">

                            <textarea className="form-control" aria-label="With textarea" id='text' placeholder="Send Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3"> Send Message</button>
                       
                    </form>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    );
}
