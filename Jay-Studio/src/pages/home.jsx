export default function HomePage() {
    return (
        <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
               Welcome to the new world
            </div>
        </div>
    );
}
