import React from 'react'
import './Devoss-ta.css'
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
        <h3>பக்தி தொகுப்புகள்</h3  >

        <div className="cards">

          <div className="crd1">
            <div className="crd">
              <h4>திருநள்ளாறு</h4>
              <img src={tnr} alt="" />
              <p>திருநள்ளாறு இந்தியாவின் புதுச்சேரி யூனியன் பிரதேசத்தின், காரைக்கால் அருகில் உள்ள ஒரு சிறிய நகரம் ஆகும்.திருநள்ளாறு தர்ப்பாரண்யேசுவரர் கோயில் பாடல் பெற்ற தலங்களில் ஒன்றாகும். சம்பந்தர், அப்பர், சுந்தரர் மூவரதும் பாடல் பெற்ற இத்தலம் காரைக்கால் வட்டத்தில் அமைந்துள்ளது.</p>
              <Link to="/ta/thirunallaru" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // or "auto"
                });
              }}>மேலும்.</Link>
            </div>

            <div className="crd">
              <h4>திருப்பதி</h4>
              <img src={trp} alt="" />
              <p>திருப்பதி இந்தியாவில் உள்ள ஆந்திரப் பிரதேசத்தின் தென்கிழக்குப் பகுதியில் உள்ள திருப்பதி மாவட்டத்தில் அமைந்துள்ள ஒரு வைணவத் தலமாகும். திருப்பதி மாநகராட்சி இந்தியாவில் உள்ள மிக முக்கிய திருத்தலங்களில் இது ஒன்று..</p>
              <Link to="/ta/tirupathi" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // or "auto"
                });
              }}>மேலும்.</Link>
            </div>

            <div className="crd">
              <h4>திருச்செந்தூர்</h4>
              <img src={tcr} alt="" />
              <p>திருச்செந்தூரில் முருகனின் அறுபடை வீடுகளில் இரண்டாம் படை என்று போற்றப்படும் சுப்பிரமணிய சுவாமி கோயில் அமைந்துள்ளது.
                சூரபத்மனைப் போரில் வென்ற செந்தில் நின்று சிரிக்கும் கோயில் இதுதான். ஐப்பசி மாதம் இங்கு நடக்கும் சூரசம்காரம் திருவிழா பிரபலமானது.</p>
              <Link to="/ta/thiruchendur" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // or "auto"
                });
              }}>மேலும்.</Link>
            </div>

          </div>

          <div className="crd2">
            <div className="crd" id='pln'>
              <h4>பழனி</h4>
              <img src={pln} alt="" />
              <p>மேற்கு தொடர்ச்சி மலையில் உள்ள பழனி மலையில் 18 சித்தர்களில் ஒருவரான போகரால் ஒன்பது வகை பாசாணத்தைக் கொண்டு செய்த புகழ் பெற்ற முருகன் சிலை, மலைக்கோயிலில் இருக்கிறது. இவ்வூரில் அறுபடை வீடுகளில் ஒன்றான திருஆவினன்குடி கோவிலும் உள்ளது. </p>
              <Link to="/ta/palani" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // or "auto"
                });
              }}>மேலும்.</Link>
            </div>

            <div className="crd" id='rmr'>
              <h4>இராமேசுவரம்</h4>
              <img src={rmr} alt="" />
              <p>வாரணாசிக்கு இணையான புனித வழிபாட்டுத் தலமாக இராமேசுவரமும் இந்துக்களால் கருதப்படுகின்றது. இந்தியாவின் நான்கு திசைகளில் உள்ள "சார் தாம்" எனப்படும் நான்கு புனிதத் தலங்களில் இதுவும் ஒன்றாகும். </p>
              <Link to="/ta/rameshwaram" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // or "auto"
                });
              }}>மேலும்.</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Devotional;