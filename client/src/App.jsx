import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarLi from "./components/Navbar.jsx";
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <div className='body'>
      <div className="section">
        <NavbarLi />
      </div>
      <div className="section content">
        <Outlet />
      </div>
       
      <div className="section Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
