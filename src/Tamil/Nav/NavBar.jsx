import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbars">
      <div className="logo">
        <h3>SST Travels &nbsp;..</h3>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menus ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><a href="/#Hero" onClick={() => setMenuOpen(false)}>Explore</a></li>
          <li><a href="/#Explore" onClick={() => setMenuOpen(false)}>Packages</a></li>
          <li><a href="/#Gallaries" onClick={() => setMenuOpen(false)}>Gallaries</a></li>
          <li><a href="/#Service" onClick={() => setMenuOpen(false)}>Service</a></li>
          <li><a href="/#Contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;