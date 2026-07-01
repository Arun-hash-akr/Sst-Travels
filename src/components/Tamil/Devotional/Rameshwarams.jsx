import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Thirunallars-ta.css";

import rmr from "./images/rmr.png";
import Tirupullani from "./images/Tirupullani1.png";
import Uthirakosamangai from "./images/Uthirakosamangai.png";
import Devipattinam from "./images/Devipattinam.png";
import pillayarpatti from "./images/pillayarpatti.png";

const images = [
    { src: rmr, name: "ராமேஸ்வரம்" },
    { src: Tirupullani, name: "திருப்புல்லாணி" },
    { src: Uthirakosamangai, name: "உத்திரகோசமங்கை" },
    { src: Devipattinam, name: "தேவிபட்டினம்" },
    { src: pillayarpatti, name: "பிள்ளையார்பட்டி" },
];

const Rameshwaram = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleBookNow = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20want%20to%20book%20Rameshwaram%20PACKAGE.",
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
                <h2>ராமேஸ்வரம்</h2>
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
                <h3>ராமேஸ்வரத்தில் பார்க்க வேண்டிய இடங்கள்</h3>
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
                            <td>ராமேஸ்வரம்</td>
                            <td>4500</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Note:</strong></p>
                <ul>
                    <li>விலை ஒரு நபருக்கு.</li>
                </ul>
            </div>

            {/* BUTTON */}
            <button onClick={handleBookNow}>முன்பதிவு செய்ய</button>

            {/* MAP */}
            <div className="iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15750.061100471226!2d79.30072733983346!3d9.287528029090414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e3c4e61cf2b3%3A0xd667f9b98bbd63a1!2sRameswaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1742277853874!5m2!1sen!2sin"
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

export default Rameshwaram