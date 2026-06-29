import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="con">

        <div className="contact">

          <div className="company">
            <div className="head"> <h3>Sst Travels</h3> </div>
            <div className="para"><p>To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.</p></div>
          </div>

          <div className="lin">
            <div className="quick">
              <h4>Quick Links</h4>
              <li><a href="">Rentals</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Explore</a></li>
              <li><a href="">Our Vans</a></li>
            </div>

            <div className="cont">
              <h4>Contact</h4>
              <ul>
                <li><a href="">WhatsApp</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Location</a></li>
              </ul>

              <div className="tamil">
                <h6>தமிழில் பார்க்க</h6>
                <button>Tamil</button></div>
            </div>

          </div>
        </div>

        <div className="copy">
          <p>
            Copyright 2026 @ ssttavels.com -All rights reserved</p>
        </div>

      </div>


    </>
  )
}

export default Contact