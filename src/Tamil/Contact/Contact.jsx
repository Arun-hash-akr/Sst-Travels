import React from "react";
import { useNavigate } from "react-router-dom";
import './Contacts.css'

const Contact = () => {
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

  // const openTamil = () => {
  //   navigate("/tamil");

  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <div className="con">
        <div className="contact">

          <div className="company">
            <div className="head">
              <h3>Sst Travels</h3>
            </div>

            <div className="para">
              <p>
                To my mind, the greatest reward and luxury of travel is to be
                able to experience everyday things as if for the first time,
                to be in a position in which almost nothing is so familiar it
                is taken for granted.
              </p>
            </div>
          </div>

          <div className="lin">

            <div className="quick">
              <h4>Quick Links</h4>

              <ul>
                <li><a href="#">Rentals</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Our Vans</a></li>
              </ul>
            </div>

            <div className="cont">
              <h4>Contact</h4>

              <ul>
                <li><a href="#" onClick={handleBook}>WhatsApp</a></li>
                <li><a href="#" onClick={handleInsta}>Instagram</a></li>
                <li><a href="#" onClick={handleLoc}>Location</a></li>
              </ul>

              <div className="tamil">
                <h6>தமிழில் பார்க்க</h6>

                <button >
                  தமிழ்
                </button>
              </div>

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

export default Contact;