import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./icon.png";
import Upload from "./upload";
import Upload1 from "./upload1";
import Upload2 from "./upload2";
const Header = () => (
  <header className="header">
    <nav className="nav">
      <img src={Logo} alt="Logo" className="Logo" />
      <h1 className="controls">Fake ID Detector</h1>
      <ul>
        <li><Link to="/">Instagram</Link></li>
        <li><Link to="/twitter">X (Twitter)</Link></li>
        <li><Link to="/linkedin">LinkedIn</Link></li>
      </ul>
      <button className="buttonh" onClick={() => alert("Enter ID details in the form to check for authenticity.")}>
        How It Works?
      </button>
    </nav>
  </header>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>Fake ID Detection</h2>
          <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-tumblr"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>ABOUT</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Anomaly Detection</a></li>
            <li><a href="#">Fraudulent Management</a></li>
            <li><a href="#">Network Traffic Analysis</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </div>

        {/* Additional Info */}
        <div className="footer-section additional-info">
          <h3>ADDITIONAL INFO</h3>
          <p>
            Our system helps detect fake social media accounts by analyzing user activity and profile details. Fill out the form with the required attributes to verify authenticity.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Fake ID Detector - All Rights Reserved
      </div>
    </footer>
  );
};

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="/twitter" element={<Upload1 />} />
      <Route path="/linkedin" element={<Upload2 />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
