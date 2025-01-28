import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from "./icon.png"
const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.8,
};

const Header = () => (
  <header className="header">
    <nav className="nav">
    <img src={Logo} alt="Logo" className="Logo" />
    <h1 className="controls">Fake ID Detector</h1>
      <ul>
        <li><h3><Link to="/">Home</Link></h3></li>
        <li><h3><Link to="/upload" className="hover:underline">Upload CSV</Link></h3></li>
        <li><h3><Link to="/profile" className="hover:underline">Profile</Link></h3></li>
        <li><h3>Report</h3></li>
      </ul>
      <button className="buttonh"><h3>Sign Up/Login</h3></button>
    </nav>
  </header>
);

const LandingPage = () => (
  <motion.div
    className="p-4"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="home-page">
      <div className="Upload">
        <button className="ubtn"><h1>Upload File</h1></button>
        <br />
        <h3>Or drop a file</h3>
        <br />
      </div>
      <div className="Image">

      </div>
    </div>
  </motion.div>
);

const UploadPage = () => (
  <motion.div
    className="p-4"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <h1 className="text-3xl font-bold">Upload Your CSV File</h1>
    <input type="file" className="mt-4 border border-gray-300 p-2" />
  </motion.div>
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
            <li><a href="#">Fraudulant Management</a></li>
            <li><a href="#">Network Traffic Avoider</a></li>
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
            We are here to help you to find the anamoly in your csv data using one of the most cuttign edge technology call isolation forest algorithm . Make sure you uplad a .CSV file
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        Lorem ipsum dolor sit amet - All Rights Reserved
      </div>
    </footer>
  );
};
const ProfilePage = () => (
  <motion.div
    className="p-4"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <h1 className="text-3xl font-bold">Profile Page</h1>
    <p className="mt-2">This is where user details will be displayed.</p>
  </motion.div>
);

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
