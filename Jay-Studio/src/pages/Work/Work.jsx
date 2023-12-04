import project1 from  '../assets/food-finder.gif'
import project2 from  '../assets/api-adventure.gif'
export default function WorkPage() {
    return (
        <>

            <div className="section pt-5 mt-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-white">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Food Finder</h4>
                                    <p className="card-text">
                                        This project I focus on front end design, I was able to pull off a beautiful website for users to find their next meal.
                                    </p>
                                    <h6>Click on image to go to page</h6>
                                </div>
                                <a href="https://fenriragni.github.io/food-finder/">
                                    <img src={project1} className="card-img-top" alt="project-1-image" />
                                </a>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">API Adventure</h4>
                                    <p className="card-text">
                                        This is a Fullstack project, my team was able to pull off an amazing website for developers to find API sources for their next project.
                                    </p>
                                    <h6>Click on image to go to page</h6>
                                </div>
                                <a href="https://api-adventures-635e529205da.herokuapp.com/">
                                    <img src={project2} className="card-img-bottom" alt="project 2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-6 align-self-center">
                            <div className="container text-center">
                                <div className="row align-items-end">
                                    <div className="col-12">
                                        <h3>Class Project</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}