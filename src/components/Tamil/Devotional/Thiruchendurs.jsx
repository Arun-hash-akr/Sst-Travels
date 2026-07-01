import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Thirunallars-ta.css";

import thiruchendur from "./images/tiruchendur.png";
import muttharamman from "./images/muttharamman.png";
import vantirupati from "./images/vantirupati.png";
import Thenthiruperai from "./images/Thenthiruperai.png";
import Srivaikuntanathan from "./images/Srivaikuntanathan.png";

const images = [
    { src: thiruchendur, name: "திருச்செந்தூர்" },
    { src: muttharamman, name: "குலசேகர பட்டிணம்" },
    { src: vantirupati, name: "வன திருப்பதி" },
    { src: Thenthiruperai, name: "தென்திருப்பேரை" },
    { src: Srivaikuntanathan, name: "ஸ்ரீவைகுண்டம்" },
];

const Thirunallar = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleBookNow = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20want%20to%20book%20THRUCHENDUR%20PACKAGE.",
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
                <h2>திருச்செந்தூர்</h2>
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
                <h3>திருச்செந்தூரில் பார்க்க வேண்டிய இடங்கள்</h3>
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
                            <td>திருச்செந்தூர்</td>
                            <td>4000</td>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.205239047391!2d78.10859393971883!3d8.494392387201318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0390118f119e01%3A0xb9bc989564965383!2sThiruchendur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1742277446321!5m2!1sen!2sin"
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