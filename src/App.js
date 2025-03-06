import "./App.css";
import Navbar from "./Component/NavbarDir/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/HomeDir/Home";
import AboutUs from "./Pages/AboutUsDir/AboutUs";
import Team from "./Pages/TeamDir/Team";
import ContactUs from "./Pages/ContactUsDir/ContactUs";
import Projects from "./Pages/ProjectsDir/Projects";
import Footer from "./Component/FooterDir/Footer";
import Donate from "./Component/DonateComponent/Donate";
import { useState } from "react";
import Loaderjs from "./Component/Loaderjs";
import Loader from "react-js-loader";


function App() {

  const [color, setColor] = useState('black');
  const [isLoading, setIsLoading] = useState(false);
  
  const [isopen, setIsopen] = useState(false);

  const handleDonate = () => {
    setIsopen(!isopen);
  };



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">

          {/* <Loaderjs /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
          <br />
          <br />
        </div>
        <div className="footer">
          <Footer />
        </div>

        {isLoading && <div style={{top:'50%'}} className="donate_component" >
            <Loader type="spinner-circle" bgColor={color} color={color}  size={100} />
        </div>}

        {isopen && <div className="donate_component" >
          <Donate />
        </div>}

        <div className="donate_div">
          <div className="bttn_container">

          
          {isopen ? (
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={handleDonate}
            ></i>
          ) : (
            <button onClick={handleDonate} className="donate-button">
              Donate Now
            </button>
          )}
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
