import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <div className="section">
        <Navbar />
      </div>
     
        <Outlet />
      
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
