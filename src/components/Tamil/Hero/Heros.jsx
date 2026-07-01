import React from 'react'
import './Heross-ta.css'
import Explore from '../Explore/Explores'
import Rental from '../Rental/Rentals'
import Contact from '../Contact/Contacts'
import Service from '../Service/Services'

const Hero = () => {
  return (
    <>
      <div className="Hero" id='Hero'>

        <div className="about">
          <div className="head"> <h1>ஸ்ரீ சமயபுரம் டிராவல்ஸ்</h1> </div>
          <div className="para"><p>என் கருத்துப்படி, பயணத்தின் மிகப்பெரிய வெகுமதியும் ஆடம்பரமும் என்னவென்றால், முதல் முறையாக அன்றாட விஷயங்களை அனுபவிப்பது போல, கிட்டத்தட்ட எதுவும் அவ்வளவு பரிச்சயமில்லாத ஒரு நிலையில் இருப்பதுதான்.</p></div>
          <div className="exp"><button>மேலும் ஆராயுங்கள்..</button></div>
        </div>

      </div>
    </>
  )
}

export default Hero