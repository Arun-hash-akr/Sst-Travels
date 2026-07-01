import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav-en.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="en-navbars">
      <div className="en-logo">
        <h3>SST Travels &nbsp;..</h3>
      </div>

      <div
        className="en-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`en-menus ${menuOpen ? "show" : ""}`}>
        <ul className="en-ul">
          <li>
            <Link to="/en" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <a href="/en#Hero" onClick={() => setMenuOpen(false)}>
              Explore
            </a>
          </li>

          <li>
            <a href="/en#Explore" onClick={() => setMenuOpen(false)}>
              Packages
            </a>
          </li>

          <li>
            <a href="/en#Gallaries" onClick={() => setMenuOpen(false)}>
              Galleries
            </a>
          </li>

          <li>
            <a href="/en#Service" onClick={() => setMenuOpen(false)}>
              Service
            </a>
          </li>

          <li>
            <a href="/en#Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;