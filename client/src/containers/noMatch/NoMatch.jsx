import "./style.css";
import { Link, useLocation } from 'react-router-dom';
import { Container } from "@mui/material";

function NoMatch() {
  const location = useLocation();
  const error = location.state && location.state.error;

  return (
    <div id='no-found-container' className="container-fluid d-flex align-items-center justify-content-center  error-container"  >
      <Container
        style={{ height: '100vh' }}
        className="w-100 d-flex flex-column justify-content-center align-items-center"

      >

        <div className="error-code text-center">
          <h1 > 404 Page no found </h1>
        <Link to="/" className="btn home-button " > Go back </Link>
          </div>
          
      </Container>
    </div>

  );
}

export default NoMatch;
