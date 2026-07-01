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

  return (
    <>
      <div className="en-con">
        <div className="en-contact">

          <div className="en-company">
            <div className="en-head">
              <h3>Sst Travels</h3>
            </div>

            <div className="en-para">
              <p>
                To my mind, the greatest reward and luxury of travel is to be
                able to experience everyday things as if for the first time,
                to be in a position in which almost nothing is so familiar it
                is taken for granted.
              </p>
            </div>
          </div>

          <div className="en-lin">

            <div className="en-quick">
              <h4>Quick Links</h4>

              <ul>
                <li><a href="#">Rentals</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Our Vans</a></li>
              </ul>

              <div className="en-tamil">
                <h6>தமிழில் பார்க்க</h6>

                <button onClick={() => {
                  navigate("/ta"); window.scrollTo({
                    top: 0,
                    behavior: "smooth", // or "auto" for instant scrolling
                  });
                }}>தமிழ்</button>

              </div>


            </div>

            <div className="en-cont">
              <h4>Contact</h4>

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

        <div className="en-copy">
          <p>
            Copyright © 2026 ssttravels.com - All rights reserved
          </p>
        </div>

      </div>
    </>
  );
};

export default Contact;