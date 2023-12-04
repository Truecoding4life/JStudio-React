import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="section">
        <Navbar />
      </div>
      <div className="section">
        <Outlet />
      </div>
    </>
  );
}

export default App;
