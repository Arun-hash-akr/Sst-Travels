import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Explore.css'
import dev from "..//Explore/dev.png"
import rent from "..//Explore/rental.png"
import Devotional from '../Devotional/Devotional'
import Rental from '../Rental/Rental'
const Explore = () => {

  return (
    <>
      <div className="explore" id='Explore'>
        <p>Lets get journey with us.. And make your journey safer, smoother, faster.. Choose Your package with the options below.</p>
        
        <div className="options">

          <div className="kar1">
            <img src={dev} alt="Devotional" />
            <h4>Devotional</h4>
            <Link to="/devotional">More</Link>
          </div>

          <div className="kar2">
            <img src={rent} alt="Rentals" />
            <h4>Rentals</h4>
            <Link to="/rentals">More</Link>
          </div>

        </div>
      </div >

    </>
  )
}

export default Explore
