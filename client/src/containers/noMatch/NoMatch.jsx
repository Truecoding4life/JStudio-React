import "./style.css";
import errorGif from "./noMatch.gif";
import { useLocation } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();
  const error = location.state && location.state.error;
  
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
      <img  src={errorGif} alt="ATAT 404 error gif" />
      </div>
    </div>
  );
}

export default NoMatch;
