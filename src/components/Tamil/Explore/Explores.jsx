import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Exploress-ta.css'
import dev from "..//Explore/dev.png"
import rent from "..//Explore/rental.png"
import Devotional from '../Devotional/Devotionals'
import Rental from '../Rental/Rentals'
const Explore = () => {

  return (
    <>
      <div className="explore" id='Explore'>
        <p>எங்களுடன் பயணத்தைத் தொடங்குவோம்.. உங்கள் பயணத்தை பாதுகாப்பானதாகவும், மென்மையாகவும், வேகமாகவும் மாற்றுங்கள்.. கீழே உள்ள விருப்பங்களுடன் உங்கள் தொகுப்பைத் தேர்வுசெய்யவும்.</p>

        <div className="options">

          <div className="kar1">
            <img src={dev} alt="Devotional" />
            <h4>பக்தி பயணம்</h4>
            <Link to="/ta/devotional" onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto"
              });
            }}>மேலும்..</Link>
          </div>

          <div className="kar2">
            <img src={rent} alt="Rentals" />
            <h4>வாடகைக்கு</h4>
            <Link to="/ta/rentals" onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto"
              });
            }}>மேலும்..</Link>
          </div>

        </div>
      </div >

    </>
  )
}

export default Explore
