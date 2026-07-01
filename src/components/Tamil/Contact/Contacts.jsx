import React from "react";
import { useNavigate } from "react-router-dom";
import './Contactss-ta.css'

const Contacts = () => {
  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    window.open(
      "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20contact%20through%20your%20website.",
      "_blank"
    );
  };

  const handleInsta = (e) => {
    e.preventDefault();
    window.open(
      "https://www.instagram.com/sst.travels?igsh=MWZ4bWZuN2M3cmd6Zg==",
      "_blank"
    );
  };

  const handleLoc = (e) => {
    e.preventDefault();
    window.open(
      "https://share.google/QzTvT8NMaIMuHg2VP",
      "_blank"
    );
  };

  return (
    <>
      <div className="con">
        <div className="contact">

          <div className="company">
            <div className="head">
              <h3>ஸ்ரீ சமயபுரம் டிராவல்ஸ்</h3>
            </div>

            <div className="para">
              <p>
                எங்களுடன் பயணம் செய்வோம்.. உங்கள் பயணத்தை பாதுகாப்பானதாகவும், மென்மையாகவும், வேகமாகவும் ஆக்குவோம்..
              </p>
            </div>
          </div>

          <div className="lin">

            <div className="quick">
              <h4>Quick Links</h4>

              <ul>
                <li><a href="#">வாடகைக்கு</a></li>
                <li><a href="#">சேவைகள்</a></li>
                <li><a href="#">மேலும் ஆராயுங்கள்</a></li>
                <li><a href="#">எங்கள் போகுவரத்துகள்</a></li>
              </ul>

              <div className="tamil">
                <h6>For View in English</h6>

                <button
                  onClick={() => {
                    navigate("/en");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // or "auto" for instant scrolling
                    });
                  }}
                >
                  Click Here
                </button>
              </div>

            </div>

            <div className="cont">
              <h4>தொடர்புக்கு</h4>

              <ul>
                <li><a href="#" onClick={handleBook}>WhatsApp</a></li>
                <li><a href="#" onClick={handleInsta}>Instagram</a></li>
                <li><a href="#" onClick={handleLoc}>Location</a></li>
                <li><a href="tel:+919994346459">9994346459</a></li>
                <li><a href="tel:+919786515007">9786515007</a></li>
              </ul>



            </div>

          </div>

        </div>

        <div className="copy">
          <p>
            Copyright © 2026 ssttravels.com - All rights reserved
          </p>
        </div>

      </div>
    </>
  );
};

export default Contacts;