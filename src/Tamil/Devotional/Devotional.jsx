import React from 'react'
import './Devo.css'
import { Link } from 'react-router-dom'
import tnr from "./images/thirunallar.png";
import tcr from "./images/tiruchendur.png";
import trp from "./images/thirupathibg.png";
import pln from "./images/palanibg.png";
import rmr from "./images/rmr.png";


const Devotional = () => {
  return (

    <>
      <div className="dev">
        <h3>Devotional</h3  >

        <div className="cards">

          <div className="crd1">
            <div className="crd">
              <h4>Thirunallar</h4>
              <img src={tnr} alt="" />
              <p>Thirunallar is a small town in southeastern India in the Karaikal District of the Union Territory of Puducherry, near the town of Karaikal. .</p>
              <Link to="/thirunallaru">more</Link>
            </div>

            <div className="crd">
              <h4>Tirupathi</h4>
              <img src={trp} alt="" />
              <p>Tirupati is a city in the Indian state of Andhra Pradesh and serves as the administrative headquarters of Tirupati district. It is known for its significant religious and cultural heritage.</p>
              <Link to="/tirupathi">more</Link>
            </div>

            <div className="crd">
              <h4>Thiruchendur</h4>
              <img src={tcr} alt="" />
              <p>Tiruchendur, also is a municipality in Thoothukudi district, Tamil Nadu, India. It is home to the Arulmigu Subramaniya Swamy Temple, one of the Six Abodes of Murugan.</p>
              <Link to="/thiruchendur">more</Link>
            </div>

          </div>

          <div className="crd2">
            <div className="crd">
              <h4>Palani</h4>
              <img src={pln} alt="" />
              <p>The Palani Murugan Temple or Arulmigu Dhandayuthapani Swamy Temple (Thiru Avinankudi), dedicated to Murugan is situated on a hill overlooking the town. </p>
              <Link to="/palani">more</Link>
            </div>

            <div className="crd" id='rmr'>
              <h4>Rameshwaram</h4>
              <img src={rmr} alt="" />
              <p>Rameswaram is the second closest point from which to reach Sri Lanka from India and geological evidence suggests that the Rama Sethu was a former land connection between India and Sri Lanka. </p>
              <Link to="/rameshwaram">more</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Devotional;