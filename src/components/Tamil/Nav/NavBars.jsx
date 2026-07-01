import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navss-ta.css";

const NavBars = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbars">
      <div className="logo">
        <h3>ஸ்ரீ சமயபுரம் டிராவல்ஸ் &nbsp;..</h3>
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
          <li>
            <Link to="/ta" onClick={() => setMenuOpen(false)}>
              முகப்புப் பக்கம்
            </Link>
          </li>

          <li>
            <a href="/ta#Hero" onClick={() => setMenuOpen(false)}>
              எங்களைப் பற்றி
            </a>
          </li>

          <li>
            <a href="/ta#Explore" onClick={() => setMenuOpen(false)}>
              பயண தொகுப்புகள்
            </a>
          </li>

          <li>
            <a href="/ta#Gallaries" onClick={() => setMenuOpen(false)}>
              கலைக்கூடங்கள்
            </a>
          </li>

          <li>
            <a href="/ta#Service" onClick={() => setMenuOpen(false)}>
              சேவைகள்
            </a>
          </li>

          <li>
            <a href="/ta#Contact" onClick={() => setMenuOpen(false)}>
              தொடர்புக்கு
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBars;