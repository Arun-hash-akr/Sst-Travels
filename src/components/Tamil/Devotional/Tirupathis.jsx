import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Thirunallars-ta.css";

import thirupathi from "./images/thirupathibg.png";
import thiurvannamalai from "./images/thiurvannamalai.png";
import alamelu from "./images/alamelu.png";
import kalashthi from "./images/kalashthi.png";
import Tiruttani from "./images/Tiruttani.png";
import goldentemple from "./images/golden temple.png";

const images = [
    { src: thirupathi, name: "Tirupathi" },
    { src: thiurvannamalai, name: "திருவண்ணாமலை" },
    { src: alamelu, name: "அலமேல் மங்காபுரம்" },
    { src: kalashthi, name: "காளஹஸ்தி" },
    { src: Tiruttani, name: "திருத்தணி" },
    { src: goldentemple, name: "திருமலைக்கோடி" },
];

const Thirunallar = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleBookNow = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20want%20to%20book%20THRUPATI%20PACKAGE.",
            "_blank"
        );
    };

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="tnr">
            <div className="head">
                <h2>திருப்பதி</h2>
                <Link to="/ta/devotional" id="back">Back</Link>
            </div>

            {/* CAROUSEL */}
            <div className="carousel">
                <div
                    className="carousel-track"
                    ref={trackRef}
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: "0.5s ease-in-out",
                        display: "flex",
                    }}
                >
                    {images.map((item, i) => (
                        <div className="carousel-slide" key={i}>
                            <div className="image-name">{item.name}</div>
                            <img
                                src={item.src}
                                alt={item.name}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* PLACES */}
            <div className="heads">
                <h3>திருப்பதியில் பார்க்க வேண்டிய இடங்கள்</h3>
                <ul>
                    {images.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))}
                </ul>
            </div>

            {/* TABLE */}
            <div className="tabel">
                <table>
                    <thead>
                        <tr>
                            <th>முதல்</th>
                            <th>இருந்து</th>
                            <th>விலை</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>திருச்சி</td>
                            <td>திருப்பதி</td>
                            <td>5000</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>குறிப்பு:</strong></p>
                <ul>
                    <li>விலை ஒரு நபருக்கு.</li>
                </ul>
            </div>

            {/* BUTTON */}
            <button onClick={handleBookNow}>முன்பதிவு செய்ய</button>

            {/* MAP */}
            <div className="iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248159.5058977102!2d79.11463311910077!3d13.627791896559023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1742277001408!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Thirunallar;