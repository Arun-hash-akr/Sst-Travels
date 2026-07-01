import React from 'react'
import './Hero-en.css'
import Explore from '../Explore/Explore'
import Rental from '../Rental/Rental'
import Contact from '../Contact/Contact'
import Service from '../Service/Service'

const Hero = () => {
  return (
    <>
      <div className="en-Hero" id='Hero'>

        <div className="en-about">
          <div className="en-head"> <h1>SST TRAVELS</h1> </div>
          <div className="en-para"><p>To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.</p></div>
          <div className="en-exp"><button>Explore</button></div>
        </div>

      </div>
    </>
  )
}

export default Hero