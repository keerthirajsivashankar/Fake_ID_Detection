import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./icon.png";
import Upload from "./upload";
import Upload1 from "./upload1";
import Upload2 from "./upload2";
const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="brand1"> 
        <img src={Logo} alt="Logo" className="Logo" />
        <h1 className="controls">Fake ID Detector</h1>
      </div>
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