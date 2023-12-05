import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <div className="section">
        <Navbar />
      </div>
      <div className="section content">
        <Outlet />
      </div>
       
      <div className="section Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
