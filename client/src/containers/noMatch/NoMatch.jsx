import "./style.css";
import errorGif from "./noMatch.webp";
import { Link, useLocation } from 'react-router-dom';
import { Container } from "@mui/material";

function NoMatch() {
  const location = useLocation();
  const error = location.state && location.state.error;
  
  return (
      <div   id='no-found-container' className="container-fluid d-flex align-items-center justify-content-center  error-container"  >
 <Container
     style={{height:'100vh'}}
    className="w-100 d-flex flex-column justify-content-center align-items-center"
  
    >
   

   <Link to="/" className="btn home-button" >Go home page</Link>     
    </Container>
    </div>
   
  );
}

export default NoMatch;
